import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useCart } from '../context/CartContext'
import styles from './CheckoutPage.module.css'

const stripePromise = loadStripe('pk_test_51Ted9IBRMM8Kh3xuHepJ9FqYwgoEgDYhLxmLEhtgxEvajegdxGwAh7GH3EDLgFtwKuQWosCVaWKGanduueFyQeYS00h2s91UY0')

function PaymentForm({ form, verzending, totaal, onSuccess }) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!stripe || !elements) return
    setLoading(true)
    setError('')
    const { error: stripeError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + '/bestelling-bevestigd',
        payment_method_data: {
          billing_details: {
            name: form.naam,
            email: form.email,
            address: { line1: `${form.straat} ${form.huisnummer}`, postal_code: form.postcode, city: form.stad, country: 'NL' }
          }
        }
      },
      redirect: 'if_required',
    })
    if (stripeError) { setError(stripeError.message); setLoading(false) } else { onSuccess() }
  }

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {error && <p className={styles.error} style={{marginTop:'1rem'}}>{error}</p>}
      <button type="submit" className={styles.orderBtn} disabled={!stripe || loading} style={{marginTop:'1.5rem'}}>
        {loading ? 'Bezig...' : `Betaal €${totaal.toFixed(2)} →`}
      </button>
      <p className={styles.secure}>✦ Beveiligde betaling via Stripe</p>
    </form>
  )
}

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [clientSecret, setClientSecret] = useState('')
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', straat: '', huisnummer: '', postcode: '', stad: '', bezorging: 'standaard' })
  const [errors, setErrors] = useState({})
  const verzending = form.bezorging === 'express' ? 12.95 : (totalPrice >= 75 ? 0 : 5.95)
  const totaal = totalPrice + verzending

  function update(e) { setForm(f => ({ ...f, [e.target.name]: e.target.value })); setErrors(err => ({ ...err, [e.target.name]: '' })) }

  function validate() {
    const required = ['naam', 'email', 'straat', 'huisnummer', 'postcode', 'stad']
    const newErr = {}
    required.forEach(f => { if (!form[f]) newErr[f] = 'Verplicht veld' })
    setErrors(newErr)
    return Object.keys(newErr).length === 0
  }

  async function handleContinue() {
    if (!validate()) return
    const res = await fetch('/api/create-payment-intent', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ amount: totaal }) })
    const data = await res.json()
    setClientSecret(data.clientSecret)
    setStep(2)
  }

  function handleSuccess() { clearCart(); navigate('/'); alert('Betaling gelukt! Bedankt voor je bestelling bij Velour.') }

  if (items.length === 0) return (
    <div className={styles.empty}>
      <Helmet><title>Bestellen — Velour</title></Helmet>
      <p>Je winkelwagen is leeg. <Link to="/">Terug naar de shop</Link></p>
    </div>
  )

  return (
    <div className={styles.page}>
      <Helmet><title>Bestellen — Velour</title><meta name="robots" content="noindex" /></Helmet>
      <div className={styles.container}>
        <h1>Bestellen</h1>
        <div className={styles.layout}>
          <div className={styles.form}>
            {step === 1 && (
              <>
                <section className={styles.section}>
                  <h2>1. Jouw gegevens</h2>
                  <div className={styles.grid2}>
                    <div className={styles.field}><label>Naam</label><input name="naam" value={form.naam} onChange={update} placeholder="Voor- en achternaam" />{errors.naam && <span className={styles.error}>{errors.naam}</span>}</div>
                    <div className={styles.field}><label>E-mail</label><input name="email" type="email" value={form.email} onChange={update} placeholder="jouw@email.nl" />{errors.email && <span className={styles.error}>{errors.email}</span>}</div>
                    <div className={styles.field}><label>Telefoon</label><input name="telefoon" value={form.telefoon} onChange={update} placeholder="06 — — — —" /></div>
                  </div>
                </section>
                <section className={styles.section}>
                  <h2>2. Bezorgadres</h2>
                  <div className={styles.grid2}>
                    <div className={styles.field} style={{gridColumn:'1/3'}}><label>Straat</label><input name="straat" value={form.straat} onChange={update} placeholder="Straatnaam" />{errors.straat && <span className={styles.error}>{errors.straat}</span>}</div>
                    <div className={styles.field}><label>Huisnummer</label><input name="huisnummer" value={form.huisnummer} onChange={update} placeholder="12A" />{errors.huisnummer && <span className={styles.error}>{errors.huisnummer}</span>}</div>
                    <div className={styles.field}><label>Postcode</label><input name="postcode" value={form.postcode} onChange={update} placeholder="1234 AB" />{errors.postcode && <span className={styles.error}>{errors.postcode}</span>}</div>
                    <div className={styles.field}><label>Stad</label><input name="stad" value={form.stad} onChange={update} placeholder="Amsterdam" />{errors.stad && <span className={styles.error}>{errors.stad}</span>}</div>
                  </div>
                </section>
                <section className={styles.section}>
                  <h2>3. Bezorgmethode</h2>
                  <div className={styles.options}>
                    {[{val:'standaard',label:'Standaard bezorging',sub:'2–3 werkdagen',price:totalPrice>=75?'Gratis':'€5,95'},{val:'express',label:'Express bezorging',sub:'Volgende werkdag voor 17:00',price:'€12,95'}].map(opt => (
                      <label key={opt.val} className={`${styles.optionCard} ${form.bezorging===opt.val?styles.optionActive:''}`}>
                        <input type="radio" name="bezorging" value={opt.val} checked={form.bezorging===opt.val} onChange={update} />
                        <div><strong>{opt.label}</strong><span>{opt.sub}</span></div>
                        <span className={styles.optionPrice}>{opt.price}</span>
                      </label>
                    ))}
                  </div>
                </section>
                <button className={styles.orderBtn} onClick={handleContinue}>Doorgaan naar betaling →</button>
              </>
            )}
            {step === 2 && clientSecret && (
              <section className={styles.section}>
                <h2>4. Betaling</h2>
                <Elements stripe={stripePromise} options={{ clientSecret, appearance: { theme: 'stripe' } }}>
                  <PaymentForm form={form} verzending={verzending} totaal={totaal} onSuccess={handleSuccess} />
                </Elements>
              </section>
            )}
          </div>
          <div className={styles.summary}>
            <h2>Jouw bestelling</h2>
            {items.map(item => (
              <div key={item.key} className={styles.summaryItem}>
                <img src={item.product.images[0]} alt={item.product.name} />
                <div><p>{item.product.name}</p>{item.variant && <p className={styles.variantLabel}>{item.variant.label}</p>}<p className={styles.summaryQty}>× {item.qty}</p></div>
                <span>€{(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
            <div className={styles.summaryTotals}>
              <div className={styles.summaryRow}><span>Bezorging</span><span>{verzending===0?'Gratis':`€${verzending.toFixed(2)}`}</span></div>
              <div className={styles.summaryRow}><span>BTW (21%)</span><span>€{(totalPrice*0.21).toFixed(2)}</span></div>
              <div className={`${styles.summaryRow} ${styles.summaryTotal}`}><span>Totaal</span><span>€{totaal.toFixed(2)}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

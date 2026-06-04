import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './ContactPage.module.css'

export default function ContactPage() {
  const [form, setForm] = useState({ naam: '', email: '', bericht: '' })
  const [sent, setSent] = useState(false)

  function update(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.naam || !form.email || !form.bericht) return
    setSent(true)
  }

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Contact — Velour</title>
        <meta name="description" content="Neem contact op met Velour. Vragen over een parfum, je bestelling of iets anders? We reageren binnen één werkdag." />
      </Helmet>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Contact</h1>
          <p>Vragen over een parfum, je bestelling of iets anders? We reageren binnen één werkdag.</p>
        </div>

        <div className={styles.layout}>
          <div className={styles.formWrap}>
            {sent ? (
              <div className={styles.success}>
                <h2>Bericht verzonden</h2>
                <p>We nemen zo snel mogelijk contact met je op via {form.email}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                  <label>Naam</label>
                  <input name="naam" value={form.naam} onChange={update} placeholder="Jouw naam" required />
                </div>
                <div className={styles.field}>
                  <label>E-mail</label>
                  <input name="email" type="email" value={form.email} onChange={update} placeholder="jouw@email.nl" required />
                </div>
                <div className={styles.field}>
                  <label>Bericht</label>
                  <textarea name="bericht" value={form.bericht} onChange={update} placeholder="Hoe kunnen we je helpen?" rows={6} required />
                </div>
                <button type="submit" className={styles.submitBtn}>Verstuur bericht →</button>
              </form>
            )}
          </div>

          <div className={styles.info}>
            <div className={styles.infoBlock}>
              <h3>Velour</h3>
              <p>Niche parfumerie<br />Nederland & België</p>
            </div>
            <div className={styles.infoBlock}>
              <h3>E-mail</h3>
              <p>info@velour-parfum.nl</p>
            </div>
            <div className={styles.infoBlock}>
              <h3>Klantenservice</h3>
              <p>Maandag t/m vrijdag<br />09:00 – 17:00</p>
            </div>
            <div className={styles.infoBlock}>
              <h3>Verzending</h3>
              <p>Bestellingen worden verwerkt op werkdagen. Gratis verzending vanaf €75.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

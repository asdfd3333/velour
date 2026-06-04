import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useCart } from '../context/CartContext'
import styles from './CartPage.module.css'

export default function CartPage() {
  const { items, removeItem, updateQty, totalPrice } = useCart()
  const btw = totalPrice * 0.21
  const excl = totalPrice - btw
  const verzending = totalPrice >= 75 ? 0 : 5.95

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <Helmet><title>Winkelwagen — Velour</title></Helmet>
        <h1>Winkelwagen</h1>
        <p>Je winkelwagen is leeg.</p>
        <Link to="/" className={styles.backBtn}>Ga naar de shop →</Link>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Winkelwagen — Velour</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className={styles.container}>
        <h1>Winkelwagen</h1>
        <div className={styles.layout}>
          <div className={styles.items}>
            {items.map(item => (
              <div key={item.key} className={styles.item}>
                <div className={styles.itemImage}>
                  <img src={item.product.images[0]} alt={item.product.name} />
                </div>
                <div className={styles.itemInfo}>
                  <h3>{item.product.name}</h3>
                  {item.variant && <p className={styles.variant}>{item.variant.label}</p>}
                  <p className={styles.itemPrice}>€{item.price}</p>
                </div>
                <div className={styles.itemActions}>
                  <div className={styles.qtyRow}>
                    <button onClick={() => updateQty(item.key, item.qty - 1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.key, item.qty + 1)}>+</button>
                  </div>
                  <button className={styles.removeBtn} onClick={() => removeItem(item.key)}>Verwijder</button>
                </div>
                <div className={styles.itemTotal}>€{(item.price * item.qty).toFixed(2)}</div>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <h2>Overzicht</h2>
            <div className={styles.summaryRows}>
              <div className={styles.row}><span>Subtotaal (excl. BTW)</span><span>€{excl.toFixed(2)}</span></div>
              <div className={styles.row}><span>BTW (21%)</span><span>€{btw.toFixed(2)}</span></div>
              <div className={styles.row}><span>Verzending</span><span>{verzending === 0 ? 'Gratis' : `€${verzending.toFixed(2)}`}</span></div>
              <div className={`${styles.row} ${styles.total}`}><span>Totaal</span><span>€{(totalPrice + verzending).toFixed(2)}</span></div>
            </div>
            {totalPrice < 75 && (
              <p className={styles.shippingNote}>Nog €{(75 - totalPrice).toFixed(2)} voor gratis verzending</p>
            )}
            <Link to="/bestellen" className={styles.checkoutBtn}>Bestellen →</Link>
            <Link to="/" className={styles.continueBtn}>Verder winkelen</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

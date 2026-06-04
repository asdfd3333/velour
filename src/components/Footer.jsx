import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logoV}>V</span>
          <p className={styles.tagline}>Wear your invisible art.</p>
        </div>
        <div className={styles.links}>
          <h4>Collectie</h4>
          <ul>
            <li><Link to="/collectie/woody-warm">Woody & Warm</Link></li>
            <li><Link to="/collectie/floral-abstract">Floral & Abstract</Link></li>
          </ul>
        </div>
        <div className={styles.links}>
          <h4>Informatie</h4>
          <ul>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="#">Verzending & retour</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Velour. Alle rechten voorbehouden.</p>
        <p>BTW: NL000000000B01 — KVK: 00000000</p>
      </div>
    </footer>
  )
}

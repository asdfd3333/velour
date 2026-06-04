import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { totalItems } = useCart()

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.left}>
          <li><NavLink to="/collectie/woody-warm" className={({ isActive }) => isActive ? styles.active : ''}>Woody & Warm</NavLink></li>
          <li><NavLink to="/collectie/floral-abstract" className={({ isActive }) => isActive ? styles.active : ''}>Floral & Abstract</NavLink></li>
        </ul>

        <Link to="/" className={styles.logo}>
          <span className={styles.logoV}>V</span>
          <span className={styles.logoName}>Velour</span>
        </Link>

        <ul className={styles.right}>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>Contact</NavLink></li>
          <li>
            <Link to="/winkelwagen" className={styles.cartLink}>
              Winkelwagen
              {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

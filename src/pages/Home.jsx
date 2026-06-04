import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { products, categories } from '../data/products'
import styles from './Home.module.css'

export default function Home() {
  const featured = products.filter(p => p.inStock).slice(0, 3)

  return (
    <div>
      <Helmet>
        <title>Velour — Wear your invisible art</title>
        <meta name="description" content="Velour is een niche parfumerie voor wie wil ruiken zoals niemand anders. Ontdek onze collectie artisanale geuren." />
        <meta property="og:title" content="Velour — Niche Parfumerie" />
        <meta property="og:description" content="Artisanale niche parfums voor de bewuste koper. Woody, floraal en abstract." />
      </Helmet>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroSub}>Niche parfumerie</p>
          <h1 className={styles.heroTitle}>Wear your<br /><em>invisible art.</em></h1>
          <p className={styles.heroText}>
            Geuren die niet voor iedereen zijn. Gemaakt voor mensen die weten wat ze willen ruiken.
          </p>
          <Link to="/collectie/woody-warm" className={styles.heroBtn}>Ontdek de collectie</Link>
        </div>
      </section>

      {/* Categorieën */}
      <section className={styles.categories}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>De collectie</h2>
          <div className={styles.catGrid}>
            {categories.map(cat => (
              <Link key={cat.id} to={`/collectie/${cat.slug}`} className={styles.catCard}>
                <div className={styles.catImage} data-cat={cat.id} />
                <div className={styles.catBody}>
                  <h3>{cat.name}</h3>
                  <p>{cat.description}</p>
                  <span className={styles.catLink}>Bekijk collectie →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured producten */}
      <section className={styles.featured}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Uitgelicht</h2>
          <div className={styles.productGrid}>
            {featured.map(p => (
              <Link key={p.id} to={`/parfum/${p.slug}`} className={styles.productCard}>
                <div className={styles.productImage}>
                  <img src={p.images[0]} alt={p.name} loading="lazy" />
                </div>
                <div className={styles.productInfo}>
                  <h3>{p.name}</h3>
                  <p>{p.shortDescription}</p>
                  <span className={styles.price}>
                    {p.type === 'variable'
                      ? `Vanaf €${Math.min(...p.variants.map(v => v.price))}`
                      : `€${p.price}`}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Merkwaarden */}
      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.valueGrid}>
            <div className={styles.value}>
              <h3>Artisanaal</h3>
              <p>Elke geur is samengesteld door een onafhankelijke parfumeur. Geen fabrieksgeuren.</p>
            </div>
            <div className={styles.value}>
              <h3>Eerlijk geprijsd</h3>
              <p>Premium kwaliteit zonder het merkopslag van de grote huizen. Je betaalt voor de geur.</p>
            </div>
            <div className={styles.value}>
              <h3>Gratis verzending</h3>
              <p>Gratis verzending vanaf €75 binnen Nederland en België. Discrete verpakking.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { products, categories } from '../data/products'
import styles from './CategoryPage.module.css'

export default function CategoryPage() {
  const { slug } = useParams()
  const category = categories.find(c => c.slug === slug)
  const catProducts = products.filter(p => p.category === category?.id)

  if (!category) return <div className={styles.notFound}>Categorie niet gevonden.</div>

  return (
    <div className={styles.page}>
      <Helmet>
        <title>{category.name} — Velour</title>
        <meta name="description" content={category.description} />
      </Helmet>
      <div className={styles.header}>
        <div className={styles.container}>
          <p className={styles.breadcrumb}><Link to="/">Home</Link> / {category.name}</p>
          <h1>{category.name}</h1>
          <p className={styles.desc}>{category.description}</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {catProducts.map(p => (
            <Link key={p.id} to={`/parfum/${p.slug}`} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={p.images[0]} alt={p.name} loading="lazy" />
                {!p.inStock && <span className={styles.outOfStock}>Uitverkocht</span>}
              </div>
              <div className={styles.info}>
                <div>
                  <h2>{p.name}</h2>
                  <p>{p.shortDescription}</p>
                </div>
                <div className={styles.meta}>
                  <span className={styles.price}>
                    {p.type === 'variable'
                      ? `Vanaf €${Math.min(...p.variants.map(v => v.price))}`
                      : `€${p.price}`}
                  </span>
                  <span className={styles.type}>{p.type === 'variable' ? 'Meerdere maten' : 'Eau de Parfum'}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

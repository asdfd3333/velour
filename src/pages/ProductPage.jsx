import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import styles from './ProductPage.module.css'

export default function ProductPage() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const { addItem } = useCart()
  const [activeImage, setActiveImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[1] ?? null)
  const [added, setAdded] = useState(false)

  if (!product) return <div className={styles.notFound}>Product niet gevonden.</div>

  const price = selectedVariant ? selectedVariant.price : product.price

  function handleAdd() {
    if (!product.inStock) return
    addItem(product, selectedVariant)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className={styles.page}>
      <Helmet>
        <title>{product.name} — Velour</title>
        <meta name="description" content={product.shortDescription} />
        <meta property="og:title" content={`${product.name} — Velour`} />
        <meta property="og:description" content={product.shortDescription} />
        <meta property="og:image" content={product.images[0]} />
      </Helmet>
      <div className={styles.container}>
        <p className={styles.breadcrumb}>
          <Link to="/">Home</Link> / <Link to={`/collectie/${product.category === 'woody' ? 'woody-warm' : 'floral-abstract'}`}>Collectie</Link> / {product.name}
        </p>

        <div className={styles.layout}>
          {/* Afbeeldingen */}
          <div className={styles.gallery}>
            <div className={styles.mainImage}>
              <img src={product.images[activeImage]} alt={product.name} />
            </div>
            <div className={styles.thumbs}>
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`${styles.thumb} ${i === activeImage ? styles.thumbActive : ''}`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={img} alt={`${product.name} ${i + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className={styles.info}>
            <h1>{product.name}</h1>
            <p className={styles.short}>{product.shortDescription}</p>

            <div className={styles.priceRow}>
              <span className={styles.price}>€{price}</span>
              {!product.inStock && <span className={styles.stockBadge}>Uitverkocht</span>}
            </div>

            {/* Varianten */}
            {product.type === 'variable' && (
              <div className={styles.variants}>
                <p className={styles.variantLabel}>Kies formaat</p>
                <div className={styles.variantBtns}>
                  {product.variants.map(v => (
                    <button
                      key={v.label}
                      className={`${styles.variantBtn} ${selectedVariant?.label === v.label ? styles.variantActive : ''}`}
                      onClick={() => setSelectedVariant(v)}
                    >
                      {v.label}<br />
                      <span>€{v.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              className={`${styles.addBtn} ${!product.inStock ? styles.addBtnDisabled : ''} ${added ? styles.addBtnAdded : ''}`}
              onClick={handleAdd}
              disabled={!product.inStock}
            >
              {added ? 'Toegevoegd ✓' : !product.inStock ? 'Uitverkocht' : 'In winkelwagen'}
            </button>

            <div className={styles.shipping}>
              <p>✦ Gratis verzending vanaf €75</p>
              <p>✦ Discrete verpakking</p>
              <p>✦ 14 dagen retourrecht</p>
            </div>

            {/* Lange beschrijving */}
            <div className={styles.longDesc}>
              <h2>Over {product.name}</h2>
              {product.longDescription.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

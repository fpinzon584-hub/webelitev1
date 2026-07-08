import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Catálogo — Entrega Inmediata',
  description: 'Explora nuestro catálogo de productos con entrega inmediata. Filtra por talla, categoría y precio. Stock disponible.',
}

// Datos de ejemplo - En Fase 5 serán cargados dinámicamente desde Firebase
const categories = ['Todos', 'Camisetas', 'Sudaderas', 'Pantalones', 'Accesorios']

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

const products = [
  {
    id: '1',
    name: 'Camiseta Oversize Premium',
    category: 'Camisetas',
    price: 35000,
    originalPrice: 45000,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#1A1A24', '#6C3BFF', '#FF6B35'],
    description: 'Corte oversize de algodón premium 100%. Suave, duradera y con acabado impecable.',
    badge: 'Más vendido',
    initial: 'C',
    color: '#6C3BFF',
  },
  {
    id: '2',
    name: 'Sudadera Fleece Unisex',
    category: 'Sudaderas',
    price: 75000,
    originalPrice: null,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['#333344', '#22C55E'],
    description: 'Interior afelpado para máximo confort. Capucha ajustable y bolsillo canguro.',
    badge: 'Nuevo',
    initial: 'S',
    color: '#22C55E',
  },
  {
    id: '3',
    name: 'Pantalón Cargo Urbano',
    category: 'Pantalones',
    price: 89000,
    originalPrice: 110000,
    sizes: ['S', 'M', 'L'],
    colors: ['#4A4A5A', '#8B6914'],
    description: 'Múltiples bolsillos funcionales. Tela resistente y cómoda para el día a día.',
    badge: null,
    initial: 'P',
    color: '#FF6B35',
  },
  {
    id: '4',
    name: 'Gorra Snapback Classic',
    category: 'Accesorios',
    price: 28000,
    originalPrice: null,
    sizes: ['Única'],
    colors: ['#0A0A0F', '#6C3BFF', '#EF4444'],
    description: 'Correa ajustable snap. Visera pre-curvada. Disponible en múltiples colores.',
    badge: 'Popular',
    initial: 'G',
    color: '#3B82F6',
  },
  {
    id: '5',
    name: 'Camiseta Estampado Artístico',
    category: 'Camisetas',
    price: 42000,
    originalPrice: null,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['#F0F0F8', '#1A1A24'],
    description: 'Estampado de alta definición, resistente al lavado. Diseños exclusivos cada temporada.',
    badge: 'Exclusivo',
    initial: 'E',
    color: '#8B5CF6',
  },
  {
    id: '6',
    name: 'Hoodie Zip Premium',
    category: 'Sudaderas',
    price: 95000,
    originalPrice: 120000,
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['#1A1A24', '#4A4A5A'],
    description: 'Cierre frontal de alta calidad. Bolsillos con cremallera. Tejido técnico de 3 capas.',
    badge: null,
    initial: 'H',
    color: '#F59E0B',
  },
]

function formatPrice(price: number) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(price)
}

export default function CatalogoPage() {
  return (
    <div className={styles.page}>

      {/* ====== HERO ====== */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.sectionTag}>Entrega Inmediata</span>
            <h1 className={styles.heroTitle}>
              Nuestro <span className="gradient-text">Catálogo</span>
            </h1>
            <p className={styles.heroDesc}>
              Productos con stock disponible para entrega en 24–48 horas. Sin esperas, sin personalizaciones.
            </p>
          </div>
        </div>
      </section>

      {/* ====== FILTERS ====== */}
      <section className={styles.filtersSection}>
        <div className="container">
          <div className={styles.filters}>
            {/* Categories */}
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Categoría:</span>
              <div className={styles.filterChips}>
                {categories.map((cat) => (
                  <button key={cat} className={`${styles.chip} ${cat === 'Todos' ? styles.chipActive : ''}`} id={`filter-cat-${cat.toLowerCase()}`}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Talla:</span>
              <div className={styles.filterChips}>
                {sizes.map((size) => (
                  <button key={size} className={styles.chip} id={`filter-size-${size.toLowerCase()}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Size Guide */}
          <div className={styles.sizeGuideBar}>
            <span>¿No sabes tu talla?</span>
            <button className="btn btn--outline btn--sm" id="size-guide-btn">
              📏 Ver Guía de Tallas
            </button>
          </div>
        </div>
      </section>

      {/* ====== PRODUCTS GRID ====== */}
      <section className={styles.productsSection}>
        <div className="container">
          <div className={styles.productsHeader}>
            <p className={styles.productsCount}>{products.length} productos encontrados</p>
          </div>

          <div className={styles.productsGrid}>
            {products.map((product) => (
              <div key={product.id} className={styles.productCard} id={`product-${product.id}`}>
                {/* Image placeholder */}
                <div className={styles.productImage}>
                  <div
                    className={styles.productImageBg}
                    style={{ background: `linear-gradient(135deg, ${product.color}22, ${product.color}44)` }}
                  >
                    <span className={styles.productInitial} style={{ color: product.color }}>{product.initial}</span>
                  </div>

                  {product.badge && (
                    <span className={styles.productBadge}>{product.badge}</span>
                  )}

                  {product.originalPrice && (
                    <span className={styles.discountBadge}>
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  )}

                  {/* Color swatches */}
                  <div className={styles.colorSwatches}>
                    {product.colors.map((color, i) => (
                      <div key={i} className={styles.colorSwatch} style={{ background: color }} />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className={styles.productContent}>
                  <span className={styles.productCategory}>{product.category}</span>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDesc}>{product.description}</p>

                  {/* Sizes */}
                  <div className={styles.sizesRow}>
                    {product.sizes.map((size) => (
                      <span key={size} className={styles.sizeChip}>{size}</span>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className={styles.productFooter}>
                    <div className={styles.priceGroup}>
                      <span className={styles.price}>{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className={styles.originalPrice}>{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                    <Link
                      href={`/pedido?producto=${encodeURIComponent(product.name)}`}
                      className="btn btn--primary btn--sm"
                      id={`product-cta-${product.id}`}
                    >
                      Quiero este ✦
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA PERSONALIZADO ====== */}
      <section className={styles.customCta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>¿No encontraste lo que buscas?</h2>
            <p className={styles.ctaDesc}>Cuéntanos tu idea. Lo diseñamos y producimos a medida para ti.</p>
            <Link href="/pedido" className="btn btn--accent btn--lg" id="catalogo-custom-cta">
              Hacer Pedido Personalizado
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

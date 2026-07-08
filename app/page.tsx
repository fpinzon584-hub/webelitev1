import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'
import {
  CameraIcon, RulerIcon, SearchIcon, CardIcon,
  SparkleIcon, ArrowRightIcon, StarIcon,
} from '@/components/Icons'

export const metadata: Metadata = {
  title: 'StyleOrder — Tu Moda Personalizada',
  description: 'Registra tu pedido personalizado, elige tallas y haz seguimiento en tiempo real. Catálogo de entrega inmediata disponible.',
}

const features = [
  {
    Icon: CameraIcon,
    title: 'Sube tu Referencia',
    desc: 'Adjunta la foto del diseño que deseas. Lo hacemos realidad.',
  },
  {
    Icon: RulerIcon,
    title: 'Tallas Exactas',
    desc: 'Selecciona tu talla o envíanos tus medidas para un ajuste perfecto.',
  },
  {
    Icon: SearchIcon,
    title: 'Seguimiento en Tiempo Real',
    desc: 'Revisa el estado de tu pedido: diseño, producción, envío y entrega.',
  },
  {
    Icon: CardIcon,
    title: 'Pagos Flexibles',
    desc: 'Abona o cancela tu pedido. Transparencia total en cada transacción.',
  },
]

const statusItems = [
  { label: 'Pendiente', cls: 'status-badge--pending', desc: 'Tu pedido fue recibido' },
  { label: 'En Diseño', cls: 'status-badge--design', desc: 'Estamos trabajando en tu pieza' },
  { label: 'En Camino', cls: 'status-badge--shipping', desc: 'Tu pedido va en camino' },
  { label: 'Entregado', cls: 'status-badge--delivered', desc: 'Pedido completado' },
  { label: 'Abonado', cls: 'status-badge--partial', desc: 'Pago parcial registrado' },
  { label: 'Cancelado', cls: 'status-badge--cancelled', desc: 'Pedido cancelado' },
]

const testimonials = [
  {
    name: 'María González',
    role: 'Cliente frecuente',
    comment: 'Increíble calidad y puntualidad. Mi pedido llegó exactamente como lo imaginé. 100% recomendado.',
    stars: 5,
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Empresario',
    comment: 'Pedimos uniformes para todo el equipo y el resultado fue espectacular. Proceso muy fácil.',
    stars: 5,
  },
  {
    name: 'Ana López',
    role: 'Diseñadora',
    comment: 'El sistema de seguimiento es perfecto. Siempre supe en qué etapa estaba mi pedido.',
    stars: 5,
  },
]

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* ====== HERO ====== */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg}>
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
          <div className={styles.heroGrid} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <SparkleIcon size={15} /> Pedidos Personalizados con Seguimiento en Tiempo Real
          </div>

          <h1 className={styles.heroTitle}>
            Tu moda, <br />
            <span className="gradient-text">hecha a medida</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Registra tu pedido con foto de referencia, elige tallas y sigue el proceso
            desde el diseño hasta la entrega. Calidad premium, trato personalizado.
          </p>

          <div className={styles.heroCtas}>
            <Link href="/pedido" className="btn btn--primary btn--lg" id="hero-cta-pedido">
              <SparkleIcon size={17} /> Hacer mi Pedido
            </Link>
            <Link href="/catalogo" className="btn btn--outline btn--lg" id="hero-cta-catalogo">
              Ver Catálogo
            </Link>
          </div>

          {/* Stats */}
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>Clientes Satisfechos</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>1,200+</span>
              <span className={styles.statLabel}>Pedidos Entregados</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>98%</span>
              <span className={styles.statLabel}>Satisfacción</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURES ====== */}
      <section className={styles.features} id="como-funciona">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>¿Cómo funciona?</span>
            <h2 className={styles.sectionTitle}>Simple, rápido y transparente</h2>
            <p className={styles.sectionDesc}>
              Desde tu primera solicitud hasta la entrega final, tienes control total de tu pedido.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((f, i) => (
              <div key={i} className={styles.featureCard} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={styles.featureIcon}><f.Icon size={26} /></div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TRACKING PREVIEW ====== */}
      <section className={styles.tracking} id="seguimiento">
        <div className="container">
          <div className={styles.trackingInner}>
            <div className={styles.trackingText}>
              <span className={styles.sectionTag}>Seguimiento</span>
              <h2 className={styles.sectionTitle}>Siempre sabe dónde está tu pedido</h2>
              <p className={styles.sectionDesc}>
                Cada cambio de estado te llega al instante. Nunca más incertidumbre sobre tu pedido.
              </p>
              <Link href="/mis-pedidos" className="btn btn--primary" id="tracking-cta" style={{ marginTop: 'var(--space-6)' }}>
                Ver mis pedidos
              </Link>
            </div>

            <div className={styles.statusShowcase}>
              {statusItems.map((s, i) => (
                <div key={i} className={styles.statusItem} style={{ animationDelay: `${i * 0.08}s` }}>
                  <span className={`status-badge ${s.cls}`}>{s.label}</span>
                  <span className={styles.statusDesc}>{s.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA CATALOG ====== */}
      <section className={styles.catalogCta} id="catalogo-preview">
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaOrb} />
            <span className={styles.sectionTag}>Entrega Inmediata</span>
            <h2 className={styles.ctaTitle}>¿No quieres esperar?</h2>
            <p className={styles.ctaDesc}>
              Tenemos productos listos para entrega inmediata. Explora nuestro catálogo
              con tallas disponibles y llévalo hoy mismo.
            </p>
            <Link href="/catalogo" className="btn btn--accent btn--lg" id="cta-catalogo">
              Explorar Catálogo <ArrowRightIcon size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== TESTIMONIOS ====== */}
      <section className={styles.testimonials} id="testimonios">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Testimonios</span>
            <h2 className={styles.sectionTitle}>Lo que dicen nuestros clientes</h2>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <div className={styles.stars}>
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <StarIcon key={s} size={16} />
                  ))}
                </div>
                <p className={styles.testimonialComment}>"{t.comment}"</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>{t.name.charAt(0)}</div>
                  <div>
                    <p className={styles.authorName}>{t.name}</p>
                    <p className={styles.authorRole}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section className={styles.finalCta} id="cta-final">
        <div className="container">
          <div className={styles.finalCtaInner}>
            <h2 className={styles.finalCtaTitle}>
              ¿Listo para tu pedido <span className="gradient-text">personalizado</span>?
            </h2>
            <p className={styles.finalCtaDesc}>
              Únete a más de 500 clientes satisfechos. Empieza hoy mismo.
            </p>
            <Link href="/pedido" className="btn btn--primary btn--lg" id="final-cta-button">
              Comenzar mi Pedido <SparkleIcon size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

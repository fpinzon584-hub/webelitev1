import type { Metadata } from 'next'
import styles from './page.module.css'
import { TargetIcon, DiamondIcon, HandshakeIcon, SparkleIcon, SpotlightIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Acerca de Nosotros',
  description: 'Conoce la historia de StyleOrder, nuestros valores y el equipo apasionado detrás de cada pieza personalizada.',
}

const values = [
  { Icon: TargetIcon, title: 'Precisión', desc: 'Cada detalle importa. Desde la talla hasta el acabado final, trabajamos con exactitud.' },
  { Icon: DiamondIcon, title: 'Calidad Premium', desc: 'Usamos materiales de primera calidad para garantizar que cada pieza dure y se vea increíble.' },
  { Icon: HandshakeIcon, title: 'Compromiso', desc: 'Tu satisfacción es nuestra prioridad. Cumplimos con fechas y expectativas, siempre.' },
  { Icon: SparkleIcon, title: 'Creatividad', desc: 'Transformamos tus ideas en prendas únicas. Sin límites para tu imaginación.' },
]

const team = [
  { name: 'Sofía Martínez', role: 'Fundadora & Directora de Diseño', initial: 'S', color: '#D9B56E' },
  { name: 'Andrés Vargas', role: 'Producción & Calidad', initial: 'A', color: '#542240' },
  { name: 'Laura Herrera', role: 'Atención al Cliente', initial: 'L', color: '#5FA6A8' },
  { name: 'Miguel Torres', role: 'Logística & Entregas', initial: 'M', color: '#B07BA0' },
]

const milestones = [
  { year: '2019', event: 'Fundación de StyleOrder con 3 pedidos semanales.' },
  { year: '2020', event: 'Expansión digital. Primeros pedidos online.' },
  { year: '2022', event: 'Superamos los 500 clientes. Apertura de taller propio.' },
  { year: '2024', event: 'Lanzamiento del sistema de seguimiento en tiempo real.' },
  { year: '2025', event: 'Más de 1,200 pedidos entregados con 98% de satisfacción.' },
]

export default function NosotrosPage() {
  return (
    <div className={styles.page}>

      {/* ====== HERO ====== */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroOrb} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.sectionTag}>Nuestra Historia</span>
          <h1 className={styles.heroTitle}>
            Pasión por la <span className="gradient-text">moda personalizada</span>
          </h1>
          <p className={styles.heroDesc}>
            Nacimos del deseo de hacer realidad las ideas de personas que buscan algo único, 
            algo que realmente los represente. Cada puntada cuenta nuestra historia.
          </p>
        </div>
      </section>

      {/* ====== MISSION ====== */}
      <section className={styles.mission}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}><TargetIcon size={30} /></div>
              <h2 className={styles.missionTitle}>Nuestra Misión</h2>
              <p className={styles.missionDesc}>
                Crear prendas personalizadas de alta calidad que superen las expectativas de 
                nuestros clientes, combinando creatividad, técnica y puntualidad en cada pedido.
              </p>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}><SpotlightIcon size={30} /></div>
              <h2 className={styles.missionTitle}>Nuestra Visión</h2>
              <p className={styles.missionDesc}>
                Ser el referente de moda personalizada en la región, donde cada cliente se 
                sienta único y especial con cada pieza que creamos para él.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== VALUES ====== */}
      <section className={styles.values}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Lo que nos mueve</span>
            <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <span className={styles.valueIcon}><v.Icon size={26} /></span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TIMELINE ====== */}
      <section className={styles.timeline}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Nuestro Recorrido</span>
            <h2 className={styles.sectionTitle}>Cómo llegamos hasta aquí</h2>
          </div>
          <div className={styles.timelineList}>
            {milestones.map((m, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{m.year}</div>
                <div className={styles.timelineLine} />
                <div className={styles.timelineEvent}>{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TEAM ====== */}
      <section className={styles.team}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Equipo</span>
            <h2 className={styles.sectionTitle}>Las personas detrás de tu pedido</h2>
            <p className={styles.sectionDesc}>
              Un equipo comprometido, apasionado y con un solo objetivo: que tu pedido sea perfecto.
            </p>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <div key={i} className={styles.teamCard}>
                <div
                  className={styles.teamAvatar}
                  style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}99)` }}
                >
                  {member.initial}
                </div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

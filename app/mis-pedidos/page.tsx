import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Mis Pedidos — Panel de Cliente',
  description: 'Revisa el estado de todos tus pedidos en tiempo real.',
}

export default function MisPedidosPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.comingSoon}>
          <div className={styles.icon}>📦</div>
          <h1 className={styles.title}>Mis Pedidos</h1>
          <p className={styles.desc}>
            Aquí podrás ver el estado de todos tus pedidos en tiempo real.
            Disponible en la <strong>Fase 2</strong> del desarrollo.
          </p>
          <div className={styles.statusPreview}>
            <span className="status-badge status-badge--pending">Pendiente</span>
            <span className="status-badge status-badge--design">En Diseño</span>
            <span className="status-badge status-badge--shipping">En Camino</span>
            <span className="status-badge status-badge--delivered">Entregado</span>
          </div>
          <Link href="/" className="btn btn--primary">
            ← Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  )
}

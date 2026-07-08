import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Hacer Pedido — Cotización Personalizada',
  description: 'Registra tu pedido personalizado. Sube tu foto de referencia, elige tallas y recibe tu cotización.',
}

export default function PedidoPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.comingSoon}>
          <div className={styles.icon}>📋</div>
          <h1 className={styles.title}>Formulario de Pedido</h1>
          <p className={styles.desc}>
            Esta sección estará disponible en la <strong>Fase 2</strong> del desarrollo.
            Aquí podrás registrar tu pedido con foto de referencia, tallas y descripción.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>📸 Subir foto de referencia</div>
            <div className={styles.feature}>📏 Seleccionar tallas exactas</div>
            <div className={styles.feature}>💬 Agregar instrucciones especiales</div>
            <div className={styles.feature}>🔍 Seguimiento en tiempo real</div>
          </div>
          <Link href="/" className="btn btn--primary">
            ← Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  )
}

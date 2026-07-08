import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'
import { ClipboardIcon, CameraIcon, RulerIcon, ChatIcon, SearchIcon, ArrowLeftIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Hacer Pedido — Cotización Personalizada',
  description: 'Registra tu pedido personalizado. Sube tu foto de referencia, elige tallas y recibe tu cotización.',
}

export default function PedidoPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.comingSoon}>
          <div className={styles.icon}><ClipboardIcon size={40} /></div>
          <h1 className={styles.title}>Formulario de Pedido</h1>
          <p className={styles.desc}>
            Esta sección estará disponible en la <strong>Fase 2</strong> del desarrollo.
            Aquí podrás registrar tu pedido con foto de referencia, tallas y descripción.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}><CameraIcon size={18} /> Subir foto de referencia</div>
            <div className={styles.feature}><RulerIcon size={18} /> Seleccionar tallas exactas</div>
            <div className={styles.feature}><ChatIcon size={18} /> Agregar instrucciones especiales</div>
            <div className={styles.feature}><SearchIcon size={18} /> Seguimiento en tiempo real</div>
          </div>
          <Link href="/" className="btn btn--primary">
            <ArrowLeftIcon size={17} /> Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  )
}

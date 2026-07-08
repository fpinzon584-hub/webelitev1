import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'StyleOrder — Pedidos y Catálogo de Moda',
    template: '%s | StyleOrder',
  },
  description: 'Registra tu pedido personalizado, explora nuestro catálogo de entrega inmediata y haz seguimiento de tu orden en tiempo real.',
  keywords: ['pedidos personalizados', 'ropa', 'moda', 'catálogo', 'tallas', 'diseño a medida'],
  openGraph: {
    title: 'StyleOrder — Pedidos y Catálogo de Moda',
    description: 'Registra tu pedido personalizado y haz seguimiento en tiempo real.',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

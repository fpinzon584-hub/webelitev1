import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

const footerLinks = {
  empresa: [
    { href: '/nosotros', label: 'Acerca de Nosotros' },
    { href: '/catalogo', label: 'Catálogo' },
    { href: '/pedido', label: 'Hacer Pedido' },
  ],
  cliente: [
    { href: '/mis-pedidos', label: 'Mis Pedidos' },
    { href: '/pedido', label: 'Cotizar Producto' },
    { href: '/#tallas', label: 'Guía de Tallas' },
  ],
  legal: [
    { href: '/privacidad', label: 'Política de Privacidad' },
    { href: '/terminos', label: 'Términos de Servicio' },
  ],
}

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram', icon: '📸' },
  { href: 'https://wa.me/', label: 'WhatsApp', icon: '💬' },
  { href: 'https://facebook.com', label: 'Facebook', icon: '👥' },
  { href: 'https://tiktok.com', label: 'TikTok', icon: '🎵' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer} id="footer">
      {/* Gradient top border */}
      <div className={styles.topBorder} />

      <div className={styles.container}>
        {/* Brand col */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo} id="footer-logo">
            <Image src="/logo.svg" alt="StyleOrder Logo" width={160} height={40} priority style={{ height: 'auto' }} />
          </Link>
          <p className={styles.tagline}>
            Tu moda personalizada, a tu medida. Calidad premium, entrega puntual.
          </p>
          <div className={styles.social}>
            {socialLinks.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={s.label}
                id={`footer-social-${s.label.toLowerCase()}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links columns */}
        <div className={styles.linksGrid}>
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Empresa</h4>
            {footerLinks.empresa.map((l) => (
              <Link key={l.href} href={l.href} className={styles.link}>{l.label}</Link>
            ))}
          </div>
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Cliente</h4>
            {footerLinks.cliente.map((l) => (
              <Link key={l.href} href={l.href} className={styles.link}>{l.label}</Link>
            ))}
          </div>
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Legal</h4>
            {footerLinks.legal.map((l) => (
              <Link key={l.href} href={l.href} className={styles.link}>{l.label}</Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copy}>© {currentYear} StyleOrder. Todos los derechos reservados.</p>
          <p className={styles.copy}>Hecho con ✦ para nuestros clientes</p>
        </div>
      </div>
    </footer>
  )
}

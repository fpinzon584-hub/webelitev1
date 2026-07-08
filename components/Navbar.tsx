'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/pedido', label: 'Hacer Pedido' },
  { href: '/nosotros', label: 'Nosotros' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} id="navbar-logo">
          <Image src="/logo-gold.svg" alt="StyleOrder Logo" width={160} height={40} priority style={{ width: '160px', height: 'auto' }} />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink} id={`nav-${link.label.toLowerCase().replace(/\s/g, '-')}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className={styles.actions}>
          <Link href="/mis-pedidos" className="btn btn--ghost btn--sm" id="nav-mis-pedidos">
            Mis Pedidos
          </Link>
          <Link href="/pedido" className="btn btn--primary btn--sm" id="nav-cotizar">
            Cotizar Ahora
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          id="nav-hamburger"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/mis-pedidos" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
          Mis Pedidos
        </Link>
        <Link href="/pedido" className={`btn btn--primary ${styles.mobileCta}`} onClick={() => setMenuOpen(false)}>
          Cotizar Ahora
        </Link>
      </div>
    </header>
  )
}

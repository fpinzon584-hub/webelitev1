# Sistema de Gestión de Pedidos

Aplicación web completa para gestión de pedidos de clientes, catálogo, facturación y panel de administración.

## Stack Tecnológico

- **Framework:** Next.js 14 (App Router)
- **Estilos:** Vanilla CSS con variables personalizadas
- **Base de datos:** Firebase Firestore
- **Autenticación:** Firebase Auth
- **Almacenamiento:** Firebase Storage
- **Facturación:** jsPDF
- **Deploy:** Vercel (cuando se autorice)

## Estructura del Proyecto

```
/app
  /                 → Landing Page
  /nosotros         → Acerca de nosotros
  /catalogo         → Catálogo de entrega inmediata
  /pedido           → Formulario de pedido/cotización
  /mis-pedidos      → Panel del cliente
  /admin            → Panel de administración (protegido)
    /pedidos        → Gestión de pedidos
    /pagos          → Control de pagos
    /facturas       → Facturación
    /catalogo       → CRUD catálogo
/components         → Componentes reutilizables
/lib                → Firebase, helpers, utilidades
/public             → Imágenes estáticas, logo
```

## Comandos

```bash
# Desarrollo local
npm run dev

# Build de producción (solo cuando se autorice)
npm run build
```

## Variables de entorno

Crear `.env.local` con las claves de Firebase (ver `.env.example`).

> ⚠️ NUNCA publicar `.env.local` al repositorio.

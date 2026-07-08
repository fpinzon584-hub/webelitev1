import type { SVGProps, ReactNode } from 'react'

/**
 * Set de iconos de línea refinados — coherentes con la identidad ÉS.
 * Trazo fino, esquinas redondeadas, heredan el color con `currentColor`.
 */

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function Base({ size = 24, children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export const CameraIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2l1.2-1.8A1 1 0 0 1 8.5 4.5h7a1 1 0 0 1 .8.7L17.5 7h2A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z" />
    <circle cx="12" cy="12.5" r="3.4" />
  </Base>
)

export const RulerIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="2.2" y="7" width="19.6" height="10" rx="1.5" transform="rotate(-0.001 12 12)" />
    <path d="M7 7v3M11 7v4M15 7v3M19 7v4" />
  </Base>
)

export const SearchIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M20 20l-4.8-4.8" />
  </Base>
)

export const CardIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
    <path d="M2.5 9.5h19M6 14.5h4" />
  </Base>
)

export const SparkleIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3c.4 3.9 1.1 4.6 5 5-3.9.4-4.6 1.1-5 5-.4-3.9-1.1-4.6-5-5 3.9-.4 4.6-1.1 5-5z" />
    <path d="M18.5 13.5c.2 1.6.5 1.9 2 2-1.5.2-1.8.5-2 2-.2-1.6-.5-1.9-2-2 1.5-.2 1.8-.5 2-2z" />
  </Base>
)

export const ArrowRightIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </Base>
)

export const ArrowLeftIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M20 12H5M11 6l-6 6 6 6" />
  </Base>
)

export const StarIcon = (p: IconProps) => (
  <Base fill="currentColor" stroke="none" {...p}>
    <path d="M12 3.2l2.5 5.2 5.7.7-4.2 3.9 1.1 5.6L12 16.9 6.9 18.6 8 13l-4.2-3.9 5.7-.7z" />
  </Base>
)

export const TargetIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.2" />
    <circle cx="12" cy="12" r="4.4" />
    <circle cx="12" cy="12" r="0.9" fill="currentColor" />
  </Base>
)

export const DiamondIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 4h12l3.2 5-9.2 11L2.8 9z" />
    <path d="M2.8 9h18.4M9 4l-3 5 6 11 6-11-3-5" />
  </Base>
)

export const HandshakeIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M2.5 8.5l3-1 4 3.4c.8.7.9 1.9.1 2.6-.7.6-1.7.5-2.4-.1L5 12" />
    <path d="M21.5 8.5l-3-1-4.2 3.2c-.7.5-.9 1.4-.5 2.1M12 11.4l2.3 2.2c.7.7.7 1.7 0 2.3-.6.6-1.6.6-2.2 0L11 15" />
    <path d="M11.8 17.1c.6.6.6 1.5 0 2-.6.6-1.5.6-2 0l-.6-.6M9.2 18.3c.6.6.6 1.4 0 2-.5.5-1.4.5-1.9 0M18.5 7.5V13M5.5 7.5V13" />
  </Base>
)

export const SpotlightIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3v2.5M12 18.5V21M4.2 4.2l1.8 1.8M18 18l1.8 1.8M3 12h2.5M18.5 12H21M4.2 19.8L6 18M18 6l1.8-1.8" />
    <circle cx="12" cy="12" r="4" />
  </Base>
)

export const PackageIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3l8 4.2v9.6L12 21l-8-4.2V7.2z" />
    <path d="M4 7.2l8 4.2 8-4.2M12 11.4V21M8 5.1l8 4.2" />
  </Base>
)

export const ClipboardIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="5" y="4.5" width="14" height="16" rx="2" />
    <path d="M9 4.5a3 3 0 0 1 6 0M8.5 11h7M8.5 15h4.5" />
  </Base>
)

export const ChatIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 5.5h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9l-4 3.5V15.5H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z" />
    <path d="M8 9.5h8M8 12.5h5" />
  </Base>
)

export const TruckIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M2.5 6.5h11v9h-11zM13.5 9.5H18l3 3v3h-7.5" />
    <circle cx="7" cy="17.5" r="1.8" />
    <circle cx="17" cy="17.5" r="1.8" />
  </Base>
)

/* ===== Redes sociales ===== */

export const InstagramIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
  </Base>
)

export const WhatsappIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 20l1.2-4A8 8 0 1 1 8 18.8z" />
    <path d="M9 9.2c-.2 1.6 2.2 4.3 3.9 4.4.6 0 1.3-.6 1.5-1.1.1-.3 0-.5-.2-.6l-1.3-.6c-.2-.1-.4 0-.6.2-.4.4-.9.2-1.3-.2s-.7-.9-.3-1.3c.2-.2.3-.4.2-.6L10 8.3c-.1-.2-.3-.3-.6-.2-.3.2-.4.7-.4 1.1z" fill="currentColor" stroke="none" />
  </Base>
)

export const FacebookIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M14.5 8.5h2V5.5h-2.3c-1.8 0-3 1.2-3 3v1.8H9v3h2.2V21h3v-6.7H16l.5-3h-2.3V8.9c0-.3.2-.4.3-.4z" fill="currentColor" stroke="none" />
  </Base>
)

export const TiktokIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M14 3.5c.3 2.2 1.7 3.6 3.8 3.9v2.6c-1.4 0-2.7-.4-3.8-1.2v5.6a4.9 4.9 0 1 1-4.9-4.9c.3 0 .6 0 .9.1v2.7a2.2 2.2 0 1 0 1.5 2.1V3.5z" fill="currentColor" stroke="none" />
  </Base>
)

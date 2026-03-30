interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary"
  className?: string
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-block px-6 py-3 rounded-lg font-semibold text-center transition-colors"
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-brand-orange/90",
    secondary: "bg-brand-navy text-white hover:bg-brand-navy/90",
  }
  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

import { type ReactNode } from "react";

/* ─── Container ─── */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

/* ─── Section Heading ─── */
export function SectionHeading({
  title,
  subtitle,
  children,
  center = true,
  className = "",
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? "text-center" : ""} ${className}`}>
      <h2 className="font-heading text-3xl font-bold tracking-tight uppercase sm:text-4xl lg:text-5xl text-brand-sand">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-base leading-relaxed text-brand-sand/70 sm:text-lg ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}

/* ─── Button ─── */
type ButtonBaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  ...props
}: ButtonAsButton | ButtonAsAnchor) {
  const base =
    "inline-flex items-center justify-center font-heading font-semibold uppercase tracking-wide rounded-lg transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-ember focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black";

  const variants = {
    primary: "gradient-primary text-white shadow-lg hover:shadow-brand-ember/30 hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "border border-brand-ember/40 text-brand-sand hover:bg-brand-ember/10 hover:border-brand-ember active:scale-[0.98]",
    ghost: "text-brand-sand/70 hover:text-brand-sand hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a className={classes} href={href} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

/* ─── Card ─── */
export function Card({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.06] bg-brand-gray/40 p-6 sm:p-8 backdrop-blur-sm ${
        hover
          ? "transition-all duration-300 hover:border-brand-ember/20 hover:shadow-[0_0_30px_rgba(242,76,26,0.08)] hover:-translate-y-1"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

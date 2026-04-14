export default function PageHeader({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orbis-50/60 via-white to-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 -z-10" />
      <div className="container-orbis pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-5 heading-1 text-balance">{title}</h1>
          {subtitle && <p className="mt-6 lead text-balance">{subtitle}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}

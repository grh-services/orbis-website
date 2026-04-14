import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orbis-50/40 to-white px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl font-bold gradient-text">404</p>
        <h1 className="mt-4 text-2xl font-bold text-ink-900">Page introuvable</h1>
        <p className="mt-3 text-ink-600">
          La page que vous cherchez a peut-être été déplacée ou n'existe pas.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

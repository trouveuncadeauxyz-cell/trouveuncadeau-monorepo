import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TrouveUnCadeau.xyz - Trouvez le cadeau parfait',
  description: 'Plateforme québécoise de découverte de cadeaux uniques et de soutien au commerce local',
  keywords: ['cadeaux', 'Québec', 'commerce local', 'artisans', 'boutiques'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-50">
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}

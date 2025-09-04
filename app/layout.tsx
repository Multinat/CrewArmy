import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { KeyboardNavigation } from '@/components/keyboard-navigation';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Interactive Presentation - Mobile Optimized',
  description: 'A modern, mobile-responsive interactive presentation template built with Next.js',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white min-h-screen w-full overflow-x-hidden`}>
        <Suspense fallback={null}>
          <KeyboardNavigation />
        </Suspense>
        {children}
        {/* Mobile navigation hint */}
        <div className="mobile-nav-hint md:hidden">
          Swipe left/right or use arrow keys to navigate
        </div>
      </body>
    </html>
  );
}
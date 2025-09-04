import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { KeyboardNavigation } from '@/components/keyboard-navigation';
import { Suspense } from 'react';
import { AuthWrapper } from '@/components/auth-wrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Crew Army Presentation - Secure Access',
  description: 'A secure, mobile-responsive interactive presentation for Crew Army team members',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen`}>
        <AuthWrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <KeyboardNavigation />
          </Suspense>
          {children}
          
          {/* Mobile navigation hint */}
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden">
            <div className="bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-slate-600">
              Swipe left/right to navigate
            </div>
          </div>
        </AuthWrapper>
      </body>
    </html>
  );
}
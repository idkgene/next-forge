import '@repo/design-system/styles/globals.css';
import { Toaster } from '@repo/design-system/components/ui/sonner';
import { TooltipProvider } from '@repo/design-system/components/ui/tooltip';
import { cn } from '@repo/design-system/lib/utils';
import { DesignSystemProvider } from '@repo/design-system/provider';
import { Analytics } from '@vercel/analytics/react';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { FC, ReactNode } from 'react';
import { Footer } from './components/footer';
import { Header } from './components/header';

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout: FC<RootLayoutProperties> = ({ children }) => (
  <html
    lang="en"
    className={cn(
      GeistSans.variable,
      GeistMono.variable,
      'touch-manipulation font-sans antialiased'
    )}
    suppressHydrationWarning
  >
    <body>
      <DesignSystemProvider>
        <TooltipProvider>
          <Header />
          {children}
          <Footer />
        </TooltipProvider>
      </DesignSystemProvider>
      <Toaster />
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
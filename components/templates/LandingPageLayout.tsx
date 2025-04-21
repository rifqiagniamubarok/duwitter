import * as React from 'react';
import { Navbar } from '../navbar';
import { Link } from '@heroui/link';

export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">{children}</main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link isExternal className="flex items-center gap-1 text-current" href="https://heroui.com?utm_source=next-app-template" title="heroui.com homepage">
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">HeroUI</p>
        </Link>
      </footer>
    </div>
  );
}

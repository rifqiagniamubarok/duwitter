'use client';
import { ThemeSwitch } from '@/components/theme-switch';
import React from 'react';

export default function NavbarProtected() {
  return (
    <div className="w-full bg-[#F8F8F8] dark:bg-[#1E1E2D] h-16 flex  items-center justify-between px-4 border-b-2 dark:border-[#2A2A3B] border-[#E8E8E8]">
      <div>
        <p>Dashboard</p>
      </div>
      <div>
        <ThemeSwitch />
      </div>
    </div>
  );
}

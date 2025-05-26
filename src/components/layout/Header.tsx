"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AppLogo } from '@/components/AppLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { NAV_LINKS_CONFIG } from '@/config/appConfig';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGoPremiumClick = () => {
    scrollToSection('plans');
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <AppLogo />
        <nav className="hidden items-center space-x-6 md:flex">
          {NAV_LINKS_CONFIG.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium hover:text-primary"
            >
              {link.label}
            </Button>
          ))}
        </nav>
        <div className="flex items-center space-x-2 md:space-x-4">
          <Button
            onClick={handleGoPremiumClick}
            className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground"
            size="sm"
          >
            Go Premium
          </Button>
          <ThemeToggle />
          <MobileMenu onGoPremiumClick={handleGoPremiumClick} />
        </div>
      </div>
    </header>
  );
}

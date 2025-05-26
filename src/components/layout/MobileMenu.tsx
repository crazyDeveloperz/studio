"use client";

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { AppLogo } from '@/components/AppLogo';
import { NAV_LINKS_CONFIG } from '@/config/appConfig';
import { useScrollToSection } from '@/hooks/useScrollToSection';

interface MobileMenuProps {
  onGoPremiumClick: () => void;
}

export function MobileMenu({ onGoPremiumClick }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  const handleLinkClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };
  
  const handleGoPremium = () => {
    onGoPremiumClick();
    setIsOpen(false);
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader className="mb-6">
          <SheetTitle>
            <AppLogo />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4">
          {NAV_LINKS_CONFIG.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              onClick={() => handleLinkClick(link.href)}
              className="justify-start text-lg"
            >
              {link.label}
            </Button>
          ))}
          <Button
            onClick={handleGoPremium}
            className="w-full text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
            size="lg"
          >
            Go Premium
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

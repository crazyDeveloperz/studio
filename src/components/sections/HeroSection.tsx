"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useScrollToSection } from '@/hooks/useScrollToSection';

export function HeroSection() {
  const scrollToSection = useScrollToSection();

  return (
    <section id="hero" className="relative py-20 md:py-32 bg-gradient-to-br from-background to-secondary/30">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract background"
          layout="fill"
          objectFit="cover"
          priority
          data-ai-hint="abstract pattern"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Unlock <span className="text-primary">Exclusive</span> Adult Entertainment
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl">
          Experience ad-free streaming, unlimited downloads, and a vast library of premium content.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg"
            onClick={() => scrollToSection('plans')}
          >
            Explore Premium Plans
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 hover:text-primary shadow-lg"
            onClick={() => scrollToSection('free-videos')}
          >
            Watch Free Videos
          </Button>
        </div>
      </div>
    </section>
  );
}

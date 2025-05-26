"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FREE_VIDEOS_BOT_URL_CONFIG } from '@/config/appConfig';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { Send } from 'lucide-react';

export function FreeVideosSection() {
  const scrollToSection = useScrollToSection();

  return (
    <section id="free-videos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="shadow-xl max-w-2xl mx-auto text-center">
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl">
              Daily Free Videos
            </CardTitle>
            <CardDescription className="mt-4 text-lg text-muted-foreground">
              Get a taste of our content! Join our Telegram bot for daily free video clips and updates.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-2">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-md"
            >
              <a href={FREE_VIDEOS_BOT_URL_CONFIG} target="_blank" rel="noopener noreferrer">
                <Send className="mr-2 h-5 w-5" />
                Get Free Videos on Telegram
              </a>
            </Button>
            <p className="mt-6 text-sm">
              <Button variant="link" onClick={() => scrollToSection('plans')} className="text-primary px-0">
                Want more? Check out our Premium Plans!
              </Button>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

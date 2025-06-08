
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DATABASE_CHANNEL_OFFER_CONFIG } from '@/config/appConfig';
import { CheckCircle, Zap } from 'lucide-react';

interface DatabaseOfferSectionProps {
  onGetOffer: (offer: { name: string; price: string }) => void;
}

export function DatabaseOfferSection({ onGetOffer }: DatabaseOfferSectionProps) {
  const offer = DATABASE_CHANNEL_OFFER_CONFIG;

  // Guard clause to check if the offer configuration is loaded and has screenshots
  if (!offer || !offer.screenshots || !Array.isArray(offer.screenshots)) {
    console.error("DatabaseOfferSection: DATABASE_CHANNEL_OFFER_CONFIG is missing, malformed, or screenshots are not an array.", offer);
    return (
      <section id="database-offer" className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-red-600">Error Loading Offer Section</h2>
          <p className="text-muted-foreground">The configuration for this section could not be loaded. Please check the console for more details.</p>
        </div>
      </section>
    );
  }

  const handleGetOfferClick = () => {
    // Ensure offer and its properties are valid before using them
    if (offer && offer.title && offer.price) {
      onGetOffer({ name: offer.title, price: offer.price });
    } else {
      console.error("DatabaseOfferSection: Cannot call onGetOffer because offer title or price is missing.");
      // Optionally, show a user-facing error or disable the button
    }
  };

  return (
    <section id="database-offer" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="shadow-xl overflow-hidden">
          <CardHeader className="text-center bg-gradient-to-r from-primary to-accent/80 p-8 text-primary-foreground">
            <div className="mb-2 flex justify-center">
                <Zap className="h-12 w-12" />
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl drop-shadow-md">
              {offer.title}
            </CardTitle>
            <CardDescription className="mt-2 text-lg text-primary-foreground/90 drop-shadow-sm">
              {offer.subtitle}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <p className="text-center text-muted-foreground mb-8 text-lg">
              {offer.description} For just <span className="font-bold text-primary">{offer.price}</span> get <span className="font-bold text-primary">{offer.duration}</span>.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-center mb-4 text-foreground">Key Features:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
                {offer.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-center mb-6 text-foreground">Channel Preview:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {offer.screenshots.map((screenshot, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-lg border border-border aspect-[16/10]">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={600}
                      height={375}
                      className="w-full h-full object-cover"
                      data-ai-hint={screenshot.dataAiHint}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 shadow-lg"
                onClick={handleGetOfferClick}
              >
                {offer.buttonText}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

import { InfoCard } from '@/components/InfoCard';
import { BILLING_INFO_CONFIG } from '@/config/appConfig';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info } from 'lucide-react';

export function BillingSection() {
  return (
    <section id="billing-info" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Subscription <span className="text-primary">Details</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Clear, transparent, and secure. Know what you're getting.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BILLING_INFO_CONFIG.map((info) => (
            <InfoCard key={info.title} {...info} />
          ))}
        </div>
        <Alert className="mt-12 max-w-2xl mx-auto bg-muted/50">
          <Info className="h-5 w-5 text-primary" />
          <AlertTitle className="font-semibold">Important Note</AlertTitle>
          <AlertDescription>
            All subscriptions are non-refundable. Please ensure you understand the terms before subscribing.
            Access to premium content is for personal use only and account sharing is strictly prohibited.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
}

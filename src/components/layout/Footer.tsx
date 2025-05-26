import Link from 'next/link';
import { APP_TITLE_CONFIG, SUPPORT_EMAIL_CONFIG } from '@/config/appConfig';
import { Separator } from '@/components/ui/separator';
import { CurrentYear } from '@/components/CurrentYear';

export function Footer() {
  return (
    <footer className="border-t bg-background/50">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{APP_TITLE_CONFIG}</h3>
            <p className="text-sm text-muted-foreground">
              Your ultimate destination for exclusive adult entertainment.
            </p>
          </div>
          <div>
            <h4 className="text-md font-medium text-foreground mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-medium text-foreground mb-3">Support</h4>
             <p className="text-sm text-muted-foreground">
              Contact us for any queries:
            </p>
            <a href={`mailto:${SUPPORT_EMAIL_CONFIG}`} className="text-sm text-primary hover:underline">
              {SUPPORT_EMAIL_CONFIG}
            </a>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="text-center text-sm text-muted-foreground space-y-2">
          <p>
            &copy; <CurrentYear /> {APP_TITLE_CONFIG}. All rights reserved.
          </p>
          <p className="text-xs">
            Disclaimer: This website contains adult content. You must be 18 years or older (or the age of majority in your jurisdiction) to enter. Please use responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}


import { TERMS_OF_SERVICE_TEXT } from '@/content/legal';
import { LAST_UPDATED_LEGAL_DATE } from '@/config/appConfig';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { APP_TITLE_CONFIG } from '@/config/appConfig';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Terms of Service - ${APP_TITLE_CONFIG}`,
  description: `Terms of Service for ${APP_TITLE_CONFIG}.`,
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary md:text-4xl">Terms of Service</CardTitle>
          <p className="text-sm text-muted-foreground">Last updated: {LAST_UPDATED_LEGAL_DATE}</p>
        </CardHeader>
        <CardContent>
          <div className="prose prose-base dark:prose-invert max-w-none whitespace-pre-line">
            {TERMS_OF_SERVICE_TEXT}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

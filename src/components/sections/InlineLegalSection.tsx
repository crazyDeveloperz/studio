import { PRIVACY_POLICY_TEXT, TERMS_OF_SERVICE_TEXT } from '@/content/legal';
import { LAST_UPDATED_LEGAL_DATE } from '@/config/appConfig';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

export function InlineLegalSection() {
  return (
    <section id="legal-inline" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6 space-y-12">
        <Card id="privacy-policy-inline" className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Privacy Policy</CardTitle>
            <p className="text-sm text-muted-foreground">Last updated: {LAST_UPDATED_LEGAL_DATE}</p>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] w-full rounded-md border p-4">
              <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-line">
                {PRIVACY_POLICY_TEXT}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card id="terms-of-service-inline" className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Terms of Service</CardTitle>
             <p className="text-sm text-muted-foreground">Last updated: {LAST_UPDATED_LEGAL_DATE}</p>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] w-full rounded-md border p-4">
              <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-line">
                {TERMS_OF_SERVICE_TEXT}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

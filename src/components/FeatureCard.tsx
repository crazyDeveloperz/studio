import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  dataAiHint: string; // Not used directly, but for AI image generation
}

export function FeatureCard({ icon: Icon, title, description }: FeatureProps) {
  return (
    <Card className="flex flex-col items-center text-center shadow-lg hover:shadow-primary/20 transition-shadow duration-300 h-full">
      <CardHeader>
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-8 w-8" />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

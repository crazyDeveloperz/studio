import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  dataAiHint: string;
}

export function InfoCard({ icon: Icon, title, description }: InfoCardProps) {
  return (
    <Card className="text-center shadow-lg">
      <CardHeader>
        <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

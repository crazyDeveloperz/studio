import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export interface ChannelProps {
  icon: LucideIcon;
  name: string;
  description: string;
  url: string;
  dataAiHint: string;
}

export function ChannelCard({ icon: Icon, name, description, url }: ChannelProps) {
  return (
    <Card className="flex flex-col shadow-lg hover:shadow-accent/20 transition-shadow duration-300 h-full">
      <CardHeader>
        <div className="mb-3 flex items-center gap-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-xl font-semibold">{name}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow" /> {/* Pushes footer to bottom */}
      <CardFooter>
        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Join Channel <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}


import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PlanProps {
  name: string;
  price: string;
  originalPrice?: string;
  duration: string;
  features: string[];
  isPopular?: boolean;
  accentColor?: boolean; 
  onGetPlan: () => void;
  icon?: LucideIcon; // Optional: For plan-specific icon like Infinity for Lifetime
}

export function PlanCard({ name, price, originalPrice, duration, features, isPopular, accentColor, onGetPlan, icon: Icon }: PlanProps) {
  return (
    <Card className={cn(
      "flex flex-col shadow-lg transition-all duration-300 hover:scale-105 h-full",
      isPopular ? "border-2 border-primary ring-2 ring-primary/50" : "border",
      accentColor && !isPopular ? "border-accent" : ""
    )}>
      <CardHeader className="items-center text-center pb-4">
        {isPopular && (
          <div className="mb-2 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            Popular
          </div>
        )}
        <div className="flex items-center gap-2">
          {Icon && <Icon className={cn("h-7 w-7", isPopular || accentColor ? "text-accent" : "text-primary")} />}
          <CardTitle className="text-2xl font-bold">{name}</CardTitle>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-4xl font-extrabold text-primary">{price}</span>
          {originalPrice && <span className="text-md line-through text-muted-foreground">{originalPrice}</span>}
        </div>
        <CardDescription className="text-sm text-muted-foreground">{duration}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onGetPlan}
          className={cn(
            "w-full text-lg py-6",
            isPopular ? "bg-accent hover:bg-accent/90 text-accent-foreground ring-2 ring-primary" : (accentColor ? "bg-accent hover:bg-accent/90 text-accent-foreground" : "bg-primary hover:bg-primary/90 text-primary-foreground")
          )}
        >
          Get {name}
        </Button>
      </CardFooter>
    </Card>
  );
}


"use client";

import { PlanCard, type PlanProps as PlanCardData } from '@/components/PlanCard';
import { PLANS_CONFIG } from '@/config/appConfig';
import type { SelectedPlanForModal } from '@/app/page';

interface PlansSectionProps {
  onGetPlan: (planDetails: SelectedPlanForModal) => void;
}

export function PlansSection({ onGetPlan }: PlansSectionProps) {
  const handlePlanSelect = (plan: Pick<PlanCardData, 'name' | 'price'>) => {
    onGetPlan(plan);
  };

  return (
    <section id="plans" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Choose Your <span className="text-primary">Perfect Plan</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Select a subscription that fits your needs and unlock exclusive content.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
          {PLANS_CONFIG.map((plan) => (
            <PlanCard
              key={plan.name}
              {...plan}
              onGetPlan={() => handlePlanSelect({ name: plan.name, price: plan.price })}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


"use client";

import { useState } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { FreeVideosSection } from '@/components/sections/FreeVideosSection';
import { DatabaseOfferSection } from '@/components/sections/DatabaseOfferSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { PlansSection } from '@/components/sections/PlansSection';
import { ChannelsSection } from '@/components/sections/ChannelsSection';
import { BillingSection } from '@/components/sections/BillingSection';
import { InlineLegalSection } from '@/components/sections/InlineLegalSection';
import { TelegramJoinModal } from '@/components/modals/TelegramJoinModal';
import { PaymentModal } from '@/components/modals/PaymentModal';
import type { PlanProps as PlanCardData } from '@/components/PlanCard';


export interface SelectedPlanForModal {
  name: string;
  price: string;
}

export default function HomePage() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<SelectedPlanForModal | null>(null);

  const handleOpenPaymentModal = (planDetails: SelectedPlanForModal) => {
    setSelectedPlanForModal(planDetails);
    setIsPaymentModalOpen(true);
  };

  return (
    <>
      <HeroSection />
      <FreeVideosSection />
      <DatabaseOfferSection onGetOffer={handleOpenPaymentModal} />
      <FeaturesSection />
      <PlansSection onGetPlan={handleOpenPaymentModal} />
      <ChannelsSection />
      <BillingSection />
      <InlineLegalSection />
      <TelegramJoinModal />
      
      {selectedPlanForModal && (
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onOpenChange={setIsPaymentModalOpen}
          selectedPlan={selectedPlanForModal}
        />
      )}
    </>
  );
}

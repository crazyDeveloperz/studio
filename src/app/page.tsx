import { HeroSection } from '@/components/sections/HeroSection';
import { FreeVideosSection } from '@/components/sections/FreeVideosSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { PlansSection } from '@/components/sections/PlansSection';
import { ChannelsSection } from '@/components/sections/ChannelsSection';
import { BillingSection } from '@/components/sections/BillingSection';
import { InlineLegalSection } from '@/components/sections/InlineLegalSection';
import { TelegramJoinModal } from '@/components/modals/TelegramJoinModal';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FreeVideosSection />
      <FeaturesSection />
      <PlansSection />
      <ChannelsSection />
      <BillingSection />
      <InlineLegalSection />
      <TelegramJoinModal />
    </>
  );
}

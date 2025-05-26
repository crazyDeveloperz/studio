import { Film } from 'lucide-react';
import Link from 'next/link';
import { APP_TITLE_CONFIG } from '@/config/appConfig';

export function AppLogo() {
  // Splitting APP_TITLE_CONFIG into "PomStar" and "Premium"
  // Assuming format "Word Premium"
  const parts = APP_TITLE_CONFIG.split(' ');
  const mainTitle = parts.length > 1 ? parts.slice(0, -1).join(' ') : APP_TITLE_CONFIG;
  const premiumText = parts.length > 1 ? parts[parts.length -1] : '';


  return (
    <Link href="/" className="flex items-center gap-2 text-lg sm:text-xl font-bold">
      <Film className="h-7 w-7 text-primary" />
      <span>{mainTitle}</span>
      {premiumText && <span className="text-primary">{premiumText}</span>}
    </Link>
  );
}

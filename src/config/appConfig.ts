import type { FeatureProps } from '@/components/FeatureCard';
import type { PlanProps } from '@/components/PlanCard';
import type { ChannelProps } from '@/components/ChannelCard';
import type { InfoCardProps } from '@/components/InfoCard';
import { ShieldOff, DownloadCloud, Headset, Zap, Star, Send, Package, Film, CreditCard, ShieldCheck, Bot } from 'lucide-react';

export const APP_TITLE_CONFIG = "PomStar Premium";
export const SUPPORT_EMAIL_CONFIG = "support@pomstarpremium.com";
export const UPI_ID_CONFIG = "yourupiid@okhdfcbank"; // Replace with actual UPI ID
export const OWNER_TELEGRAM_USERNAME_CONFIG = "yourtelegramadmin"; // Replace with actual Telegram username
export const QR_CODE_IMAGE_BASE_URL_CONFIG = "https://placehold.co/250x250.png";
export const QR_CODE_TEXT_PREFIX_CONFIG = "Scan for "; // e.g. "Scan for Silver Plan"

export const PREMIUM_CHANNEL_URL_CONFIG = "https://t.me/premiumchannel"; // Replace with actual URL
export const BACKUP_CHANNEL_URL_CONFIG = "https://t.me/backupchannel"; // Replace with actual URL
export const FREE_VIDEOS_BOT_URL_CONFIG = "https://t.me/freevideosbot"; // Replace with actual URL

export const NAV_LINKS_CONFIG = [
  { href: "#free-videos", label: "Free Videos" },
  { href: "#features", label: "Features" },
  { href: "#channels", label: "Channels" },
  { href: "#plans", label: "Plans" },
];

export const FEATURES_CONFIG: FeatureProps[] = [
  {
    icon: ShieldOff,
    title: "Ad-Free Experience",
    description: "Enjoy uninterrupted content without any annoying ads.",
    dataAiHint: "shield lock"
  },
  {
    icon: DownloadCloud,
    title: "Unlimited Downloads",
    description: "Download your favorite videos to watch offline anytime, anywhere.",
    dataAiHint: "cloud download"
  },
  {
    icon: Headset,
    title: "Priority Support",
    description: "Get faster responses and dedicated support from our team.",
    dataAiHint: "support headset"
  },
  {
    icon: Zap,
    title: "Exclusive Content",
    description: "Access a vast library of content not available anywhere else.",
    dataAiHint: "star diamond"
  },
  {
    icon: Star,
    title: "Premium Telegram Access",
    description: "Join our exclusive Telegram channels for members only.",
    dataAiHint: "telegram chat"
  },
  {
    icon: Bot, // Using Bot icon for AI personalized picks
    title: "AI-Personalized Picks",
    description: "Discover content tailored to your taste with our smart recommendations.",
    dataAiHint: "robot ai"
  },
];

export const PLANS_CONFIG: PlanProps[] = [
  {
    name: "Silver",
    price: "₹299",
    originalPrice: "",
    duration: "1 Month Access",
    features: ["Basic Content Library", "SD Quality Streaming", "Email Support"],
    isPopular: false,
    accentColor: false,
  },
  {
    name: "Gold",
    price: "₹499",
    originalPrice: "₹598",
    duration: "2 Months Access",
    features: ["Full Content Library", "HD Quality Streaming", "Priority Email Support", "Archive Access"],
    isPopular: false,
    accentColor: true,
  },
  {
    name: "Diamond",
    price: "₹799",
    originalPrice: "₹897",
    duration: "3 Months Access",
    features: ["All Gold Features", "Full HD/4K Streaming", "VIP Telegram Group", "Personal Requests (Limited)"],
    isPopular: true,
    accentColor: true, // Button will be accent, ring will be primary
  },
];

export const CHANNELS_CONFIG: ChannelProps[] = [
  {
    icon: Star,
    name: "Premium Content Channel",
    description: "Main channel for all exclusive premium content. Daily updates!",
    url: PREMIUM_CHANNEL_URL_CONFIG,
    dataAiHint: "telegram channel"
  },
  {
    icon: Package,
    name: "Backup Content Channel",
    description: "Secondary channel to ensure you never miss out on content.",
    url: BACKUP_CHANNEL_URL_CONFIG,
    dataAiHint: "telegram backup"
  },
  {
    icon: Film, // Using Film icon as Bot is already used for AI feature. Or can use Send icon.
    name: "Free Videos Bot",
    description: "Get daily free video clips and updates via our Telegram bot.",
    url: FREE_VIDEOS_BOT_URL_CONFIG,
    dataAiHint: "telegram bot"
  },
];

export const BILLING_INFO_CONFIG: InfoCardProps[] = [
  {
    icon: Send,
    title: "Premium Telegram Access",
    description: "Instant access to exclusive Telegram channels upon subscription verification.",
    dataAiHint: "telegram message"
  },
  {
    icon: CreditCard,
    title: "Flexible Billing",
    description: "Choose from multiple plans that suit your needs. Secure payments.",
    dataAiHint: "payment card"
  },
  {
    icon: ShieldCheck,
    title: "No Hidden Fees",
    description: "Transparent pricing. What you see is what you pay. No surprises.",
    dataAiHint: "security check"
  },
];

export const LAST_UPDATED_LEGAL_DATE = "July 28, 2024";

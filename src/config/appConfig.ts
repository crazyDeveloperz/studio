
import type { FeatureProps } from '@/components/FeatureCard';
import type { PlanProps } from '@/components/PlanCard';
import type { ChannelProps } from '@/components/ChannelCard';
import type { InfoCardProps } from '@/components/InfoCard';
import { ShieldOff, DownloadCloud, Headset, Zap, Star, Send, Package, Film, CreditCard, ShieldCheck, Bot, FastForward, Camera } from 'lucide-react';

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
    description: "Get faster responses and dedicated support from our team for any requests.",
    dataAiHint: "support headset"
  },
  {
    icon: Zap,
    title: "Exclusive Content",
    description: "Access a vast library of unique content & more videos not available to free users.",
    dataAiHint: "star diamond"
  },
  {
    icon: Star,
    title: "Premium Telegram Access",
    description: "Join our exclusive Telegram channels for members only, with content delivered by our premium bot.",
    dataAiHint: "telegram chat"
  },
  {
    icon: Bot, 
    title: "AI-Personalized Picks",
    description: "Discover content tailored to your taste with our smart recommendations.",
    dataAiHint: "robot ai"
  },
  {
    icon: FastForward,
    title: "No Waiting Time",
    description: "Get instant access to new uploads and content releases, no delays.",
    dataAiHint: "speed fast"
  },
  {
    icon: Camera, // Using Camera icon for Snapchat-style videos
    title: "Snapchat Style Videos",
    description: "Access exclusive Snapchat-style short videos, stories, and intimate content.",
    dataAiHint: "snapchat camera"
  },
];

export const PLANS_CONFIG: PlanProps[] = [
  {
    name: "Silver",
    price: "₹299",
    originalPrice: "",
    duration: "1 Month Access",
    features: [
      "Ad-Free Experience", 
      "Basic Content Library (via Bot)", 
      "SD Quality Streaming", 
      "Email Support"
    ],
    isPopular: false,
    accentColor: false,
  },
  {
    name: "Gold",
    price: "₹499",
    originalPrice: "₹598",
    duration: "2 Months Access",
    features: [
      "All Silver Features",
      "Full Content Library (via Bot)",
      "HD Quality Streaming", 
      "Unlimited Downloads",
      "Priority Email Support", 
      "No Waiting Time"
    ],
    isPopular: false,
    accentColor: true,
  },
  {
    name: "Diamond",
    price: "₹799",
    originalPrice: "₹897",
    duration: "3 Months Access",
    features: [
      "All Gold Features", 
      "Exclusive Content & Snapchat Videos",
      "Full HD/4K Streaming", 
      "VIP Telegram Group Access", 
      "AI-Personalized Picks",
      "Request Support (Priority)"
    ],
    isPopular: true,
    accentColor: true, // Button will be accent, ring will be primary
  },
];

export const CHANNELS_CONFIG: ChannelProps[] = [
  {
    icon: Star,
    name: "Premium Content Channel",
    description: "Main channel for all exclusive premium content. Daily updates via bot!",
    url: PREMIUM_CHANNEL_URL_CONFIG,
    dataAiHint: "telegram channel"
  },
  {
    icon: Package,
    name: "Backup Content Channel",
    description: "Secondary channel to ensure you never miss out on content from the bot.",
    url: BACKUP_CHANNEL_URL_CONFIG,
    dataAiHint: "telegram backup"
  },
  {
    icon: Bot, // Changed from Film to Bot for consistency with Free Videos Bot
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
    description: "Instant access to exclusive Telegram channels & bot upon subscription verification.",
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

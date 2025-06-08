
import type { FeatureProps } from '@/components/FeatureCard';
import type { PlanProps } from '@/components/PlanCard';
import type { ChannelProps } from '@/components/ChannelCard';
import type { InfoCardProps } from '@/components/InfoCard';
import { ShieldOff, DownloadCloud, Headset, Zap, Star, Send, Package, Film, CreditCard, ShieldCheck, Bot, FastForward, Camera, ListVideo, Database, InfinityIcon } from 'lucide-react';

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
  { href: "#database-offer", label: "Database Access" },
  { href: "#features", label: "Features" },
  { href: "#channels", label: "Channels" },
  { href: "#plans", label: "Plans" },
];

export interface DatabaseChannelOfferConfig {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  screenshots: Array<{ src: string; alt: string; dataAiHint: string }>;
  buttonText: string;
  id: string; // For payment modal
  dataAiHintScreenshots?: string; // Optional overall hint for the section
}

export const DATABASE_CHANNEL_OFFER_CONFIG: DatabaseChannelOfferConfig = {
  id: "database_channel_access",
  title: "Exclusive Database Channel Access!",
  subtitle: "Over 100,000+ Videos Waiting For You!",
  description: "Unlock direct access to our massive 100,000+ video database Telegram channel with this exclusive 6-month offer. This is a standalone offer, separate from our bot-based subscription plans.",
  price: "₹199",
  duration: "6 Months Access",
  features: [
    "Access 100,000+ video library",
    "Desi, Videshi, Ullu & more content",
    "Direct Telegram channel access",
    "Regular updates"
  ],
  screenshots: [
    { src: "https://placehold.co/400x250.png", alt: "Screenshot of video database 1", dataAiHint: "database video library" },
    { src: "https://placehold.co/400x250.png", alt: "Screenshot of video database 2", dataAiHint: "telegram channel interface" },
    { src: "https://envs.sh/fp4.jpg", alt: "Screenshot of video database 3", dataAiHint: "video content variety" },
  ],
  buttonText: "Get Database Access - ₹199",
  dataAiHintScreenshots: "video library telegram"
};

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
    description: "Download your favorite videos to watch offline anytime, anywhere (via bot plans).",
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
    description: "Join our exclusive Telegram channels for members only, with content delivered by our premium bot or direct database access.",
    dataAiHint: "telegram chat"
  },
  {
    icon: Bot,
    title: "AI-Personalized Picks",
    description: "Discover content tailored to your taste with our smart recommendations (via bot plans).",
    dataAiHint: "robot ai"
  },
  {
    icon: FastForward,
    title: "No Waiting Time",
    description: "Get instant access to new uploads and content releases, no delays.",
    dataAiHint: "speed fast"
  },
  {
    icon: Camera,
    title: "Snapchat Style Videos",
    description: "Access exclusive Snapchat-style short videos, stories, and intimate content (selected plans).",
    dataAiHint: "snapchat camera"
  },
];

export const PLANS_CONFIG: PlanProps[] = [
  {
    name: "Silver",
    price: "₹299",
    duration: "1 Month Access",
    features: [
      "Ad-Free Experience",
      "Basic Content Library (via Bot)",
      "Content: Desi, Videshi, Ullu & more",
      "Email Support"
    ],
    isPopular: false,
    accentColor: false,
    onGetPlan: () => {}, // Placeholder, will be overridden in PlansSection
  },
  {
    name: "Gold",
    price: "₹499",
    originalPrice: "₹598",
    duration: "2 Months Access",
    features: [
      "All Silver Features",
      "Full Content Library (via Bot)",
      "Varied Content: Desi, Videshi, Ullu etc.",
      "Unlimited Downloads (via Bot)",
      "Priority Email Support",
      "No Waiting Time"
    ],
    isPopular: false,
    accentColor: true,
    onGetPlan: () => {}, // Placeholder
  },
  {
    name: "Diamond",
    price: "₹799",
    originalPrice: "₹897",
    duration: "3 Months Access",
    features: [
      "All Gold Features",
      "Extensive Content Library (via Bot)",
      "Exclusive Content & Snapchat Videos",
      "VIP Telegram Group Access (Bot Users)",
      "AI-Personalized Picks (via Bot)",
      "Request Support (Priority)"
    ],
    isPopular: true,
    accentColor: true, // Button will be accent, ring will be primary
    onGetPlan: () => {}, // Placeholder
  },
  {
    name: "Lifetime Premium",
    price: "₹1999",
    duration: "Lifetime Access (Bot)",
    features: [
      "All Diamond Features",
      "Unlimited Videos via Premium Bot",
      "Permanent Access to All Bot Content",
      "Top Priority Support",
      "Early Access to New Bot Features",
      "Special Lifetime Member Badge"
    ],
    isPopular: false,
    accentColor: false, 
    icon: InfinityIcon, 
    onGetPlan: () => {}, // Placeholder
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
    icon: Bot,
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


import { ChannelCard } from '@/components/ChannelCard';
import { CHANNELS_CONFIG } from '@/config/appConfig';

export function ChannelsSection() {
  return (
    <section id="channels" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our <span className="text-accent">Telegram Channels</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Stay connected and get direct access to our content and updates.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CHANNELS_CONFIG.map((channel) => (
            <ChannelCard key={channel.name} {...channel} />
          ))}
        </div>
      </div>
    </section>
  );
}

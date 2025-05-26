"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { PREMIUM_CHANNEL_URL_CONFIG } from '@/config/appConfig';
import { Send, Check } from 'lucide-react';

const LOCAL_STORAGE_KEY = 'pomstar_telegram_modal_seen';

export function TelegramJoinModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const alreadySeen = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (!alreadySeen) {
        // Delay modal display slightly to allow page to render
        const timer = setTimeout(() => setIsOpen(true), 2000);
        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      // Fallback or do nothing if localStorage is not available
    }
  }, []);

  const handleJoinChannel = () => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, 'true');
    } catch (error) {
      console.error("Error setting localStorage item:", error);
    }
    setIsOpen(false);
    window.open(PREMIUM_CHANNEL_URL_CONFIG, '_blank');
  };

  const handleAlreadyJoined = () => {
     try {
      localStorage.setItem(LOCAL_STORAGE_KEY, 'true');
    } catch (error) {
      console.error("Error setting localStorage item:", error);
    }
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md p-6 rounded-lg shadow-xl">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Send className="h-8 w-8" />
          </div>
          <DialogTitle className="text-2xl font-bold text-foreground">Join Our Telegram Channel!</DialogTitle>
          <DialogDescription className="mt-2 text-muted-foreground">
            Get exclusive content, updates, and direct access to our community. Don't miss out!
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button
            onClick={handleJoinChannel}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Send className="mr-2 h-4 w-4" /> Join Channel
          </Button>
          <Button
            onClick={handleAlreadyJoined}
            variant="outline"
            className="w-full"
          >
             <Check className="mr-2 h-4 w-4" /> Already Joined
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

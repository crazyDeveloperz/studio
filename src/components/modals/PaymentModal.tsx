"use client";

import Image from 'next/image';
import { Copy, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { APP_TITLE_CONFIG, OWNER_TELEGRAM_USERNAME_CONFIG, UPI_ID_CONFIG, QR_CODE_IMAGE_BASE_URL_CONFIG, QR_CODE_TEXT_PREFIX_CONFIG } from '@/config/appConfig';
import type { PlanProps } from '@/components/PlanCard'; // Assuming PlanProps has name and price

interface PaymentModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  selectedPlan: Pick<PlanProps, 'name' | 'price'> | null;
}

export function PaymentModal({ isOpen, onOpenChange, selectedPlan }: PaymentModalProps) {
  const { toast } = useToast();

  if (!selectedPlan) return null;

  const numericPrice = selectedPlan.price.replace(/[^0-9]/g, '');
  const upiLink = `upi://pay?pa=${UPI_ID_CONFIG}&pn=${encodeURIComponent(APP_TITLE_CONFIG)}&am=${numericPrice}&cu=INR&tn=Payment for ${selectedPlan.name}`;
  const qrCodeUrl = `${QR_CODE_IMAGE_BASE_URL_CONFIG}?text=${encodeURIComponent(QR_CODE_TEXT_PREFIX_CONFIG + selectedPlan.name + " " + selectedPlan.price)}`;
  const ownerTelegramLink = `https://t.me/${OWNER_TELEGRAM_USERNAME_CONFIG}`;

  const handleCopyUpiId = () => {
    navigator.clipboard.writeText(UPI_ID_CONFIG);
    toast({ title: "UPI ID Copied!", description: UPI_ID_CONFIG });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md md:max-w-lg lg:max-w-xl p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-primary">
            Subscribe to {selectedPlan.name}
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            Price: <span className="font-semibold text-foreground">{selectedPlan.price}</span>
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-start">
          <div className="flex flex-col items-center space-y-3 p-4 border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">Scan QR Code</h3>
            <div className="w-full max-w-[180px] sm:max-w-[200px] mx-auto">
              <Image
                src={qrCodeUrl}
                alt={`QR Code for ${selectedPlan.name} payment`}
                width={200} 
                height={200}
                className="rounded-md border w-full h-auto"
                data-ai-hint="qr payment"
              />
            </div>
            <div className="flex items-center space-x-2 pt-2">
              <p className="text-sm font-medium">UPI ID: <span className="font-mono text-primary">{UPI_ID_CONFIG}</span></p>
              <Button variant="ghost" size="icon" onClick={handleCopyUpiId} aria-label="Copy UPI ID">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4 p-4">
            <h3 className="text-lg font-semibold">Verification Steps:</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>Complete payment using the QR code or UPI ID.</li>
              <li>Take a screenshot of the successful payment.</li>
              <li>
                Send the screenshot to our admin on Telegram:
                <Button variant="link" asChild className="p-0 h-auto ml-1 text-primary">
                  <a href={ownerTelegramLink} target="_blank" rel="noopener noreferrer">
                    @{OWNER_TELEGRAM_USERNAME_CONFIG} <ExternalLink className="inline-block h-3 w-3 ml-1"/>
                  </a>
                </Button>
              </li>
              <li>Your subscription will be activated upon verification (usually within 1-2 hours).</li>
            </ol>
          </div>
        </div>
        
        <Separator className="my-4" />

        <DialogFooter className="flex flex-col sm:flex-row gap-2">
           <Button asChild variant="outline" className="w-full sm:w-auto">
            <a href={upiLink} target="_blank" rel="noopener noreferrer">
              Pay {selectedPlan.price} via UPI App <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="w-full sm:w-auto">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  imageUrl?: string;
  videoUrl?: string;
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  imageUrl,
  videoUrl,
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  className,
}) => {
  return (
    <section
      className={cn(
        'relative py-24 bg-background',
        'flex flex-col items-center justify-center text-center min-h-screen',
        className
      )}
    >
      {imageUrl && (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={imageUrl}
            alt="Bailey"
            className="object-cover w-full h-full blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/80" />
        </div>
      )}

      {videoUrl && (
        <div className="absolute inset-0 overflow-hidden">
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            className="object-cover w-full h-full blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/80" />
        </div>
      )}

      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
          {title}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
          {description}
        </p>
        <div className="mt-8 space-x-4">
          <Button asChild>
            <a href={primaryButtonLink}>{primaryButtonText}</a>
          </Button>
          {secondaryButtonText && secondaryButtonLink && (
            <Button variant="outline" asChild>
              <a href={secondaryButtonLink}>{secondaryButtonText}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
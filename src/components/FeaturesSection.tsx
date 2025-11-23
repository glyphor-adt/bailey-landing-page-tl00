import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import {
  Smile,
  Heart,
  Dog,
  Users,
  Bone,
  ShieldCheck,
} from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: FeatureItem[] = [
  {
    title: "Friendly",
    description: "Bailey loves meeting new people and making friends.",
    icon: Smile,
  },
  {
    title: "Playful",
    description: "Always up for a game of fetch or a fun adventure.",
    icon: Dog,
  },
  {
    title: "Good with Kids",
    description: "Gentle and patient, Bailey is great with children.",
    icon: Users,
  },
  {
    title: "Affectionate",
    description: "Loves to cuddle and give lots of love.",
    icon: Heart,
  },
  {
    title: "Loves Treats",
    description: "Easily motivated and trained with yummy treats.",
    icon: Bone,
  },
  {
    title: "Loyal Companion",
    description: "Bailey is a true and devoted friend.",
    icon: ShieldCheck,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="container py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <feature.icon className="w-6 h-6 text-primary" />
                <CardTitle className="text-lg font-medium">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
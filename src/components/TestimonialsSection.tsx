import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Testimonial {
  name: string;
  title: string;
  testimonial: string;
  image?: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: 'Fluffy Tail',
    title: 'Squirrel Enthusiast',
    testimonial: 'Bailey is the best! He always shares his favorite nuts with me. A true friend!',
    image: '/squirrel-avatar.png', // Replace with a squirrel image
  },
  {
    name: 'Chirpy Wings',
    title: 'Bird Aficionado',
    testimonial: 'Bailey makes sure I always have a safe place to land in his garden. He’s so thoughtful and keeps the cats away!',
    image: '/bird-avatar.png', // Replace with a bird image
  },
  {
    name: 'Buzzy Stripes',
    title: 'Bee Socialite',
    testimonial: 'Bailey’s flowers are the best in the neighborhood.  He never uses pesticides and always makes sure we have plenty to pollinate! A real champion.',
    image: '/bee-avatar.png', // Replace with a bee image
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Bailey's Friends Say...</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonialsData.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  {testimonial.image ? (
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  ) : (
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.title}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{testimonial.testimonial}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
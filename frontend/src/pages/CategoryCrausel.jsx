import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const CategoryCrausel = () => {
  const categories = [
    'Software Engineer',
    'Product Manager',
    'Data Analyst',
    'HR Manager',
    'Marketing Specialist',
    'Sales Executive',
    'Chief Financial Officer',
    'IT Support Specialist',
    'UX/UI Designer',
    'Business Analyst',
  ];

  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto py-6">
        <CarouselContent>
          {categories.map((category, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Button className="bg-[#6A38c2] hover:bg-[#441597] rounded-full ">
                {category}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCrausel;

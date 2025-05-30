import React from 'react';
import Link from 'next/link';
import { Star, ArrowRight, Bookmark } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter,
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';

interface PoolCardProps {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  indoorOutdoor: 'indoor' | 'outdoor' | 'both';
  amenities?: string[];
  fallbackImage?: string;
  className?: string;
}

const PoolCard = ({
  id,
  name,
  location,
  price,
  rating,
  reviews,
  image,
  indoorOutdoor,
  amenities = [],
  fallbackImage,
  className
}: PoolCardProps) => {

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    toast({
      title: "Quick view",
      description: `Showing quick preview for ${name}`,
    });
  };

  const getBadgeColor = () => {
    switch (indoorOutdoor) {
      case 'indoor':
        return "bg-blue-100 text-blue-800";
      case 'outdoor':
        return "bg-green-100 text-green-800";
      case 'both':
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Link href={`/pools/${id}`} passHref>
      <a
        aria-label={`View details for ${name}`}
        className={cn("block transition-all duration-300 hover:-translate-y-1", className)}
      >
        <Card className="overflow-hidden border h-full group">
          {/* Image */}
          <div className="relative">
            <AspectRatio ratio={4 / 3}>
              <img 
                src={image} 
                alt={name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = fallbackImage || `https://via.placeholder.com/800x600?text=${encodeURIComponent(name)}`;
                }}
              />
            </AspectRatio>
            <div className="absolute top-3 left-3 flex gap-2">
              <Badge className={cn("text-xs font-medium px-2 py-0.5", getBadgeColor())}>
                {indoorOutdoor === 'both' ? 'Indoor & Outdoor' : indoorOutdoor}
              </Badge>
            </div>
            {/* Optional wishlist/bookmark icon */}
            <div className="absolute top-3 right-3">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-pool-primary" onClick={(e) => e.preventDefault()}>
                <Bookmark className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Header */}
          <CardHeader className="p-4 pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg line-clamp-1">{name}</CardTitle>
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400 mr-1" />
                <span className="text-sm font-medium">{rating.toFixed(1)}</span>
                <span className="text-xs text-gray-500 ml-1">({reviews})</span>
              </div>
            </div>
            <CardDescription className="text-sm">{location}</CardDescription>
          </CardHeader>

          {/* Amenities */}
          <CardContent className="p-4 pt-0">
            {amenities.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-1">
                {amenities.slice(0, 3).map((amenity, i) => (
                  <Badge key={i} variant="outline" className="text-xs bg-pool-light text-pool-dark">
                    {amenity}
                  </Badge>
                ))}
                {amenities.length > 3 && (
                  <Badge 
                    variant="outline" 
                    className="text-xs bg-pool-light text-pool-dark"
                    title={amenities.join(', ')}
                  >
                    +{amenities.length - 3} more
                  </Badge>
                )}
              </div>
            )}
          </CardContent>

          {/* Footer */}
          <CardFooter className="p-4 pt-0 flex justify-between items-center">
            <div className="text-pool-primary">
              <span className="font-bold text-lg">£{price}</span>
              <span className="text-sm text-gray-500">/day</span>
            </div>
            <Button 
              variant="outline"
              size="sm"
              className="text-xs bg-pool-light text-pool-primary hover:bg-pool-primary hover:text-white"
              onClick={(e) => e.preventDefault()} // Prevent button from hijacking the link
            >
              View Details
              <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </CardFooter>
        </Card>
      </a>
    </Link>
  );
};

export default PoolCard;

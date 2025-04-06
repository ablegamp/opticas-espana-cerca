
import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface ServiceRatingProps {
  label: string;
  rating: number;
  maxRating?: number;
}

const ServiceRating = ({ label, rating, maxRating = 5 }: ServiceRatingProps) => {
  // Calculate the number of full and half stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className="flex flex-col">
      <span className="text-sm font-medium text-gray-700 mb-1">{label}</span>
      <div className="flex items-center">
        {/* Render full stars */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} className="text-yellow-500 fill-yellow-500" size={18} />
        ))}
        
        {/* Render a half star if needed */}
        {hasHalfStar && <StarHalf className="text-yellow-500 fill-yellow-500" size={18} />}
        
        {/* Render empty stars */}
        {Array.from({ length: maxRating - fullStars - (hasHalfStar ? 1 : 0) }).map((_, i) => (
          <Star key={`empty-${i}`} className="text-gray-300" size={18} />
        ))}
        
        <span className="ml-2 text-sm font-medium text-gray-700">{rating.toFixed(1)}</span>
      </div>
    </div>
  );
};

export default ServiceRating;

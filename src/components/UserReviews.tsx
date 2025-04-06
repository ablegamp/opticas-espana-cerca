
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Review {
  Name: string;
  ProfilePicture: string | null;
  Rating: number;
  Description: string;
  Images: string[] | null;
  When: string;
}

interface UserReviewsProps {
  reviews: Review[];
  averageRating: number;
  reviewCount: number;
}

const UserReviews = ({ reviews, averageRating, reviewCount }: UserReviewsProps) => {
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});
  const [visibleReviews, setVisibleReviews] = useState(3);
  
  const toggleExpand = (index: number) => {
    setExpandedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  const loadMoreReviews = () => {
    setVisibleReviews(prev => Math.min(prev + 3, reviews.length));
  };
  
  return (
    <div className="mt-8">
      <div className="flex items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800 mr-4">Opiniones de clientes</h3>
        <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
          <Star className="text-yellow-500 fill-yellow-500 mr-1" size={18} />
          <span className="font-semibold">{averageRating.toFixed(1)}</span>
          <span className="mx-1 text-gray-500">•</span>
          <span className="text-sm text-gray-600">{reviewCount} opiniones</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {reviews.slice(0, visibleReviews).map((review, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-start">
                {review.ProfilePicture && (
                  <div className="mr-3 flex-shrink-0">
                    <img 
                      src={review.ProfilePicture} 
                      alt={`${review.Name} profile`} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                )}
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-800">{review.Name}</h4>
                    {review.When && (
                      <span className="text-sm text-gray-500">{review.When}</span>
                    )}
                  </div>
                  
                  <div className="flex items-center my-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={i < review.Rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                        size={16} 
                      />
                    ))}
                  </div>
                  
                  <div className="mt-2">
                    {review.Description.length > 150 && !expandedReviews[index] ? (
                      <>
                        <p className="text-gray-700">{review.Description.substring(0, 150)}...</p>
                        <button 
                          onClick={() => toggleExpand(index)}
                          className="text-optica-blue hover:underline text-sm mt-1"
                        >
                          Leer más
                        </button>
                      </>
                    ) : (
                      <>
                        <p className="text-gray-700 whitespace-pre-line">{review.Description}</p>
                        {review.Description.length > 150 && (
                          <button 
                            onClick={() => toggleExpand(index)}
                            className="text-optica-blue hover:underline text-sm mt-1"
                          >
                            Leer menos
                          </button>
                        )}
                      </>
                    )}
                  </div>
                  
                  {review.Images && review.Images.length > 0 && (
                    <div className="mt-3 flex space-x-2 overflow-x-auto pb-2">
                      {review.Images.map((image, idx) => (
                        <img 
                          key={idx} 
                          src={`https://${image.replace(/^(https?:\/\/)/, '')}`}
                          alt="Review image" 
                          className="h-20 w-20 object-cover rounded-md"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {visibleReviews < reviews.length && (
        <div className="mt-4 text-center">
          <Button 
            variant="outline" 
            onClick={loadMoreReviews}
            className="border-optica-blue text-optica-blue hover:bg-optica-blue hover:text-white"
          >
            Ver más opiniones
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserReviews;

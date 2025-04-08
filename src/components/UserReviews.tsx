
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

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

const UserReviews = ({ reviews = [], averageRating = 0, reviewCount = 0 }: UserReviewsProps) => {
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
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/placeholder.svg';
    toast({
      title: "Error al cargar la imagen",
      description: "No se pudo cargar la imagen de la reseña",
      variant: "destructive",
    });
  };
  
  // Safely handle undefined reviews
  const safeReviews = Array.isArray(reviews) ? reviews : [];
  
  return (
    <div className="mt-8">
      <div className="flex items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800 mr-4">Opiniones de clientes</h3>
        <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
          <Star className="text-yellow-500 fill-yellow-500 mr-1" size={18} />
          <span className="font-semibold">{(averageRating || 0).toFixed(1)}</span>
          <span className="mx-1 text-gray-500">•</span>
          <span className="text-sm text-gray-600">{reviewCount || 0} opiniones</span>
        </div>
      </div>
      
      {safeReviews.length === 0 ? (
        <Card className="p-4">
          <CardContent className="text-center p-6">
            <p className="text-gray-500">No hay opiniones disponibles para este establecimiento.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {safeReviews.slice(0, visibleReviews).map((review, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-start">
                  {review.ProfilePicture && (
                    <div className="mr-3 flex-shrink-0">
                      <img 
                        src={review.ProfilePicture} 
                        alt={`${review.Name} profile`} 
                        className="w-12 h-12 rounded-full object-cover"
                        onError={handleImageError}
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
                      {review.Description && review.Description.length > 150 && !expandedReviews[index] ? (
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
                          <p className="text-gray-700 whitespace-pre-line">{review.Description || 'Sin descripción'}</p>
                          {review.Description && review.Description.length > 150 && (
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
                    
                    {review.Images && Array.isArray(review.Images) && review.Images.length > 0 && (
                      <div className="mt-3 flex space-x-2 overflow-x-auto pb-2">
                        {review.Images.map((image, idx) => {
                          if (!image) return null;
                          const imgSrc = image.startsWith('http') 
                            ? image 
                            : `https://${image.replace(/^(https?:\/\/)/, '')}`;
                          
                          return (
                            <img 
                              key={idx} 
                              src={imgSrc}
                              alt="Review image" 
                              className="h-20 w-20 object-cover rounded-md"
                              onError={handleImageError}
                            />
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      
      {safeReviews.length > visibleReviews && (
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

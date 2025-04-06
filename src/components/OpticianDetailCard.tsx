
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Phone, Info, Star, ChevronDown, ChevronUp, Map } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import ServiceRating from './ServiceRating';
import OpeningHours from './OpeningHours';
import UserReviews from './UserReviews';
import OpticianLocation from './OpticianLocation';

interface ServiceRatings {
  atencionCliente: number;
  profesionalidad: number;
  precio: number;
  variedad: number;
}

interface OpenHours {
  [key: string]: string[];
}

interface UserReview {
  Name: string;
  ProfilePicture: string | null;
  Rating: number;
  Description: string;
  Images: string[] | null;
  When: string;
}

interface OpticianDetailCardProps {
  title: string;
  category: string;
  address: string;
  description: string;
  serviceRatings: ServiceRatings;
  open_hours: OpenHours;
  website: string;
  phone: string;
  review_count: number;
  review_rating: number;
  latitude: number;
  longitude: number;
  user_reviews: UserReview[];
}

const OpticianDetailCard = ({
  title,
  category,
  address,
  description,
  serviceRatings,
  open_hours,
  website,
  phone,
  review_count,
  review_rating,
  latitude,
  longitude,
  user_reviews
}: OpticianDetailCardProps) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'info' | 'reviews' | 'location'>('info');
  
  const renderServiceRatings = () => (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <ServiceRating label="Atención al Cliente" rating={serviceRatings.atencionCliente} />
      <ServiceRating label="Profesionalidad" rating={serviceRatings.profesionalidad} />
      <ServiceRating label="Relación Calidad-Precio" rating={serviceRatings.precio} />
      <ServiceRating label="Variedad de Productos" rating={serviceRatings.variedad} />
    </div>
  );
  
  return (
    <Card className="w-full overflow-hidden mb-8 animate-fade-in">
      <CardHeader className="bg-optica-blue text-white p-6">
        <div className="flex justify-between items-start">
          <div>
            <Badge className="bg-optica-orange mb-2">{category}</Badge>
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            <p className="text-blue-100 mt-1">{address}</p>
          </div>
          <div className="flex items-center bg-white text-optica-blue rounded-full px-3 py-1 shadow-md">
            <Star className="text-yellow-500 fill-yellow-500 mr-1" size={18} />
            <span className="font-bold">{review_rating.toFixed(1)}</span>
            <span className="text-sm text-gray-500 ml-1">({review_count})</span>
          </div>
        </div>
      </CardHeader>
      
      <div className="bg-gray-100 px-6 py-3 border-b">
        <div className="flex justify-between">
          <div className="space-x-1 flex">
            <Button
              variant={activeTab === 'info' ? 'default' : 'ghost'}
              className={activeTab === 'info' ? 'bg-optica-blue text-white' : 'text-gray-700'}
              onClick={() => setActiveTab('info')}
              size="sm"
            >
              <Info size={16} className="mr-1" />
              Información
            </Button>
            <Button
              variant={activeTab === 'reviews' ? 'default' : 'ghost'}
              className={activeTab === 'reviews' ? 'bg-optica-blue text-white' : 'text-gray-700'}
              onClick={() => setActiveTab('reviews')}
              size="sm"
            >
              <Star size={16} className="mr-1" />
              Opiniones
            </Button>
            <Button
              variant={activeTab === 'location' ? 'default' : 'ghost'}
              className={activeTab === 'location' ? 'bg-optica-blue text-white' : 'text-gray-700'}
              onClick={() => setActiveTab('location')}
              size="sm"
            >
              <Map size={16} className="mr-1" />
              Ubicación
            </Button>
          </div>
          
          <div className="flex space-x-2">
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <Phone size={16} className="mr-1" />
              {phone}
            </Button>
            {website && (
              <Button 
                size="sm" 
                className="bg-optica-orange hover:bg-optica-light-orange"
                onClick={() => window.open(website, '_blank')}
              >
                <ExternalLink size={16} className="mr-1" />
                Visitar web
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        {activeTab === 'info' && (
          <>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Descripción</h3>
              <div className="text-gray-700">
                {isDescriptionExpanded ? (
                  <>
                    <p className="whitespace-pre-line">{description}</p>
                    <button
                      className="text-optica-blue hover:underline mt-2 flex items-center text-sm"
                      onClick={() => setIsDescriptionExpanded(false)}
                    >
                      Ver menos <ChevronUp size={16} className="ml-1" />
                    </button>
                  </>
                ) : (
                  <>
                    <p>
                      {description.length > 280
                        ? `${description.substring(0, 280)}...`
                        : description}
                    </p>
                    {description.length > 280 && (
                      <button
                        className="text-optica-blue hover:underline mt-2 flex items-center text-sm"
                        onClick={() => setIsDescriptionExpanded(true)}
                      >
                        Ver más <ChevronDown size={16} className="ml-1" />
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
            
            {renderServiceRatings()}
            
            <div className="mt-8">
              <OpeningHours hours={open_hours} />
            </div>
          </>
        )}
        
        {activeTab === 'reviews' && (
          <UserReviews 
            reviews={user_reviews} 
            averageRating={review_rating} 
            reviewCount={review_count} 
          />
        )}
        
        {activeTab === 'location' && (
          <OpticianLocation 
            latitude={latitude} 
            longitude={longitude} 
            address={address}
            title={title}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default OpticianDetailCard;

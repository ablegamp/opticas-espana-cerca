
import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

interface OpticianLocationProps {
  latitude: number;
  longitude: number;
  address: string;
  title: string;
}

const OpticianLocation = ({ latitude, longitude, address, title }: OpticianLocationProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // This is a placeholder for map integration
    // In a real implementation, you would use a mapping library like Leaflet or Google Maps
    if (mapRef.current) {
      const mapContainer = mapRef.current;
      mapContainer.innerHTML = '';
      
      const mapPlaceholder = document.createElement('div');
      mapPlaceholder.className = 'bg-gray-200 rounded-lg h-full w-full flex items-center justify-center relative overflow-hidden';
      
      // Add a simple representation of a map (just for visual purposes)
      mapPlaceholder.innerHTML = `
        <div class="absolute inset-0 bg-opacity-50 bg-gray-200 flex items-center justify-center">
          <div class="text-center px-4">
            <div class="text-optica-blue animate-pulse mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <p class="text-sm text-gray-600">Mapa interactivo disponible próximamente</p>
          </div>
        </div>
        <div class="absolute bottom-3 left-3 right-3 bg-white p-2 rounded-md shadow-md text-sm">
          <div class="font-semibold">${title}</div>
          <div class="text-gray-600 text-xs">${address}</div>
          <div class="text-xs text-gray-500 mt-1">Lat: ${latitude.toFixed(6)}, Lng: ${longitude.toFixed(6)}</div>
        </div>
      `;
      
      mapContainer.appendChild(mapPlaceholder);
    }
  }, [latitude, longitude, address, title]);
  
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border">
      <h3 className="font-semibold text-gray-800 flex items-center mb-4">
        <MapPin size={18} className="mr-2 text-optica-blue" />
        Ubicación
      </h3>
      
      <div className="mb-3">
        <p className="text-gray-700">{address}</p>
      </div>
      
      <div ref={mapRef} className="h-64 rounded-lg overflow-hidden">
        {/* Map will be rendered here */}
      </div>
      
      <div className="mt-3 flex justify-end">
        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-optica-blue hover:underline text-sm flex items-center"
        >
          <MapPin size={14} className="mr-1" />
          Ver en Google Maps
        </a>
      </div>
    </div>
  );
};

export default OpticianLocation;

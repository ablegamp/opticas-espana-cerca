
import React from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { checkIfOpen, formatDayName } from '@/lib/dateUtils';

interface OpeningHoursProps {
  hours: Record<string, string[]>;
}

const OpeningHours = ({ hours }: OpeningHoursProps) => {
  const { isOpen, todayHours, nextOpenDay, nextOpenHours } = checkIfOpen(hours);
  const today = new Date().toLocaleDateString('es-ES', { weekday: 'long' }).toLowerCase();
  
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800 flex items-center">
          <Clock size={18} className="mr-2 text-optica-blue" />
          Horario
        </h3>
        
        <div className={`flex items-center px-2 py-1 rounded ${isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {isOpen ? (
            <>
              <CheckCircle size={16} className="mr-1 text-green-600" />
              <span className="text-sm font-medium">Abierto ahora</span>
            </>
          ) : (
            <>
              <XCircle size={16} className="mr-1 text-red-600" />
              <span className="text-sm font-medium">Cerrado ahora</span>
            </>
          )}
        </div>
      </div>
      
      {!isOpen && nextOpenDay && nextOpenHours && (
        <p className="text-sm text-gray-600 mb-3">
          {nextOpenDay === today 
            ? `Abre hoy a las ${nextOpenHours}` 
            : `Abre el ${formatDayName(nextOpenDay)} a las ${nextOpenHours}`}
        </p>
      )}
      
      <div className="space-y-2">
        {Object.entries(hours).map(([day, timeRanges]) => (
          <div key={day} className="flex justify-between items-center text-sm">
            <span className={`font-medium ${day === today ? 'text-optica-blue' : 'text-gray-700'}`}>
              {formatDayName(day)}
            </span>
            <div className="text-right">
              {timeRanges.length === 0 || timeRanges[0] === "Cerrado" ? (
                <span className="text-red-500">Cerrado</span>
              ) : (
                timeRanges.map((time, idx) => (
                  <div key={idx} className="text-gray-600">{time}</div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpeningHours;

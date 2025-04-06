
/**
 * Utility functions for working with dates and time
 */

/**
 * Parses a time string in format "HH:MM" to get hours and minutes
 */
const parseTimeString = (timeString: string): { hour: number; minute: number } | null => {
  const match = timeString.match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return null;
  
  return {
    hour: parseInt(match[1], 10),
    minute: parseInt(match[2], 10)
  };
};

/**
 * Checks if a business is currently open based on its opening hours
 * @param openHours The business's opening hours structure
 * @returns An object containing isOpen status and the current day's hours
 */
export const checkIfOpen = (openHours: Record<string, string[]>): { 
  isOpen: boolean; 
  todayHours: string[];
  nextOpenDay?: string;
  nextOpenHours?: string;
} => {
  const daysOfWeek = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const now = new Date();
  const currentDay = daysOfWeek[now.getDay()];
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  
  const todayHours = openHours[currentDay] || [];
  
  // If it's closed today
  if (todayHours.length === 0 || todayHours[0] === "Cerrado") {
    // Find next open day
    let nextDayIndex = now.getDay();
    let nextDay = currentDay;
    let nextDayHours: string[] = [];
    
    // Check up to 7 days ahead (full week)
    for (let i = 1; i <= 7; i++) {
      nextDayIndex = (nextDayIndex + 1) % 7;
      nextDay = daysOfWeek[nextDayIndex];
      nextDayHours = openHours[nextDay] || [];
      
      if (nextDayHours.length > 0 && nextDayHours[0] !== "Cerrado") {
        break;
      }
    }
    
    return { 
      isOpen: false, 
      todayHours,
      nextOpenDay: nextDay,
      nextOpenHours: nextDayHours[0]
    };
  }
  
  // Check if current time falls within any of today's opening periods
  for (const timeRange of todayHours) {
    // Skip if it's "Cerrado"
    if (timeRange === "Cerrado") continue;
    
    const [startTime, endTime] = timeRange.split('–');
    const start = parseTimeString(startTime);
    const end = parseTimeString(endTime);
    
    if (!start || !end) continue;
    
    // Check if current time is within range
    if (
      (currentHour > start.hour || (currentHour === start.hour && currentMinute >= start.minute)) &&
      (currentHour < end.hour || (currentHour === end.hour && currentMinute <= end.minute))
    ) {
      return { isOpen: true, todayHours };
    }
  }
  
  // Not currently open, find next opening time today or next day
  let nextOpenTime = "";
  
  // Check for later opening times today
  for (const timeRange of todayHours) {
    if (timeRange === "Cerrado") continue;
    
    const [startTime] = timeRange.split('–');
    const start = parseTimeString(startTime);
    
    if (!start) continue;
    
    if (currentHour < start.hour || (currentHour === start.hour && currentMinute < start.minute)) {
      nextOpenTime = startTime;
      return { 
        isOpen: false, 
        todayHours,
        nextOpenDay: currentDay,
        nextOpenHours: startTime
      };
    }
  }
  
  // Find next open day
  let nextDayIndex = now.getDay();
  let nextDay = "";
  let nextDayHours: string[] = [];
  
  // Check up to 7 days ahead (full week)
  for (let i = 1; i <= 7; i++) {
    nextDayIndex = (nextDayIndex + 1) % 7;
    nextDay = daysOfWeek[nextDayIndex];
    nextDayHours = openHours[nextDay] || [];
    
    if (nextDayHours.length > 0 && nextDayHours[0] !== "Cerrado") {
      break;
    }
  }
  
  return { 
    isOpen: false, 
    todayHours,
    nextOpenDay: nextDay,
    nextOpenHours: nextDayHours[0]
  };
};

/**
 * Formats a day name to capitalize the first letter
 */
export const formatDayName = (day: string): string => {
  return day.charAt(0).toUpperCase() + day.slice(1);
};

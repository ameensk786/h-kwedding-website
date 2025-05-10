/**
 * Format a date to a readable string
 */
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

/**
 * Calculate days remaining until a target date
 */
export const getDaysRemaining = (targetDate: Date): number => {
  const today = new Date();
  const timeDiff = targetDate.getTime() - today.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
};

/**
 * Format a time string (e.g., "4:00 PM")
 */
export const formatTime = (timeStr: string): string => {
  return timeStr;
};

/**
 * Get ordinal suffix for a number (1st, 2nd, 3rd, etc.)
 */
export const getOrdinalSuffix = (n: number): string => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};
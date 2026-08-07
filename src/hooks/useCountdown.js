import { useEffect, useState } from 'react';

/* ==========================================
   useCountdown — returns days / hours /
   minutes / seconds remaining until a
   target ISO date string
   ========================================== */
export default function useCountdown(targetDate) {
  const compute = () => {
    const target = new Date(targetDate).getTime();
    const now = Date.now();
    const diff = Math.max(0, target - now);

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      isPast: diff === 0,
    };
  };

  const [time, setTime] = useState(compute);

  useEffect(() => {
    const interval = setInterval(() => setTime(compute()), 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  return time;
}
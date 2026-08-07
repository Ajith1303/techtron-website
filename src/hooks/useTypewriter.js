import { useEffect, useState } from 'react';

/* ==========================================
   useTypewriter — types & deletes words
   in a continuous loop
   ========================================== */
export default function useTypewriter(words, typeSpeed = 90, deleteSpeed = 45, pause = 1600) {
  const [index, setIndex] = useState(0); // current word index
  const [subIndex, setSubIndex] = useState(0); // current character count
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return undefined;

    const word = words[index];

    // Pause when a word is fully typed
    if (!deleting && subIndex === word.length) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    // Pause briefly when a word is fully deleted
    if (deleting && subIndex === 0) {
      const timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, 300);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => (deleting ? prev - 1 : prev + 1)),
      deleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, typeSpeed, deleteSpeed, pause]);

  return words[index]?.substring(0, subIndex) || '';
}
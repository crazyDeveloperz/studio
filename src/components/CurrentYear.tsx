"use client";

import { useState, useEffect } from 'react';

export function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (year === null) {
    // Return a placeholder or empty string until client-side hydration
    return <span>{new Date().getFullYear()}</span>; // Fallback to build time or server render if needed for SEO, or keep empty
  }

  return <span>{year}</span>;
}

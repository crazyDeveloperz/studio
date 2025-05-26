"use client";

import { useCallback } from 'react';

export function useScrollToSection() {
  const scrollTo = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId.startsWith('#') ? sectionId.substring(1) : sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      console.warn(`Element with ID "${sectionId}" not found.`);
    }
  }, []);

  return scrollTo;
}

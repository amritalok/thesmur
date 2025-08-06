// components/AnalyticsProvider.tsx
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initGA, logPageView } from '@/utils/analytics';

export default function AnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only initialize GA if we have a measurement ID and we're in production
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

    if (measurementId) {
      initGA(measurementId);
    } else {
      console.warn('No GA measurement ID found');
    }
  }, []);

  useEffect(() => {
    if (window.GA_INITIALIZED) {
      // Construct the full URL with search parameters
      const url = searchParams.size > 0 ? `${pathname}?${searchParams.toString()}` : pathname;
      logPageView(url);
    }
  }, [pathname, searchParams]);

  // This component doesn't render anything visible
  return null;
}

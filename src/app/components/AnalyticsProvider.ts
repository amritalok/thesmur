// components/AnalyticsProvider.tsx
'use client';

import { ReactNode, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initGA, logPageView } from '@/utils/analytics';

interface AnalyticsProviderProps {
  children: ReactNode;
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize GA once on mount
    initGA(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string);
  }, []);

  useEffect(() => {
    // Log page views when pathname or search params change
    if (pathname) {
      const queryString = searchParams.toString();
      const path = queryString ? `${pathname}?${queryString}` : pathname;
      logPageView(path);
    }
  }, [pathname, searchParams]);

  return children;
}

import { useRouter } from 'next/router';
import { useMemo } from 'react';

export function useSearchParams() {
  const router = useRouter();

  const searchParams = useMemo(() => {
    const params = new URLSearchParams(router.asPath.split(/\?/)[1]);
    return params;
  }, [router.asPath]);

  return searchParams;
}

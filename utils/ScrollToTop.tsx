import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ScrollToTop(): any {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname]);

  return null;
}

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const usePathnameCheck = (checkPathname) => {
  const { pathname } = useLocation();
  const [response, setResponse] = useState(false);

  useEffect(() => {
    if (pathname === checkPathname) setResponse(true);
    else setResponse(false);
  }, [pathname]);

  return response
};
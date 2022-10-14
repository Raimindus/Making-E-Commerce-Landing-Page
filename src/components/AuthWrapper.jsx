import React, { useEffect } from 'react';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';

function AuthWrapper({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = useLocation();

  const matched = matchPath({ path: '/DetailSewa/:binarId' }, pathname);

  useEffect(() => {
    if (
      pathname !== '/SignIn' &&
      pathname !== '/SignUp' &&
      pathname !== '/' &&
      pathname !== '/CariMobil' &&
      !matched
    ) {
      const authData = JSON.parse(localStorage.getItem('auth'));
      if (!authData?.access_token) {
        navigate(`/SignIn?redirect_url=${location.pathname}`);
      }
    }
  }, [pathname]);

  return <div>{children}</div>;
}

export default AuthWrapper;

import React, { createContext, useContext, useState } from 'react';
import { UserManager, WebStorageStateStore } from 'oidc-client';

const CognitoContext = createContext({});

const userManager = new UserManager({
  client_id: 'm5hcjoi5q7b4rpjgoben8eeic',
  authority: 'https://cognito-idp.eu-west-1.amazonaws.com/eu-west-1_Eg6m7vHvR',
  redirect_uri: 'http://localhost:3000',
  response_type: 'code',
  scope: 'openid',
  userStore: new WebStorageStateStore({ store: window.localStorage }),
});

export const CognitoAuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const handleUserLoaded = (u) => setUser(u);
  const handleUserUnloaded = () => setUser(null);
  userManager.events.addUserLoaded(handleUserLoaded);
  userManager.events.addUserUnloaded(handleUserUnloaded);

  const init = () => {
    if (window.location.search.startsWith('?code=')) {
      userManager.signinRedirectCallback();
      window.history.replaceState({}, '', window.location.pathname);
    } else {
      userManager.getUser().then(handleUserLoaded);
    }
  };
  if (!user) init();

  return <CognitoContext.Provider value={{ userManager, user }}>{children}</CognitoContext.Provider>;
};

export const useCognito = () => useContext(CognitoContext);

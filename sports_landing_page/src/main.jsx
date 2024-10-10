import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import "./index.css";
document.documentElement.classList.add('dark');
const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;

const root = createRoot(document.getElementById('root'));

const auth0ProviderProps = {
  domain: domain,
  clientId: clientId,
  authorizationParams: {
    redirect_uri: window.location.origin
  }
};

root.render(
  <Auth0Provider {...auth0ProviderProps}>
    <App />
  </Auth0Provider>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
      <Auth0Provider 
       domain='dev-mon9m7h4.us.auth0.com' 
       clientId='DkLORV1vUhhhn7SOnlJ3r1LDG2n8sBDQ' 
       redirectUri={window.location.origin}
       >
       <App />
       </Auth0Provider>
    </React.StrictMode>
  
);


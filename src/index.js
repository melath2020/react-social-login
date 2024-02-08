import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GoogleOAuthProvider clientId="557582045327-6s95kgrsmqi7jqqlk369iodsg2d6lhna.apps.googleusercontent.com">
      <App />
  </GoogleOAuthProvider>;

  </React.StrictMode>

  
  
);



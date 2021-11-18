import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { Auth0Provider } from "@auth0/auth0-react";
// this is where i added the bootstrap link
ReactDOM.render(
  // <Auth0Provider
  //   domain="dev-3hgg7hjn.us.auth0.com"
  //   clientId="hLpNVBvD4ckhGZRliwJzyoSoqWBPByVI"
  //   redirectUri={window.location.origin}
  // >

  <App />,
  // </Auth0Provider>,
  document.getElementById("root")
);

// App.js or index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AccountProvider } from './AccountContext';

ReactDOM.render(
  <AccountProvider>
    <App />
  </AccountProvider>,
  document.getElementById('root')
);

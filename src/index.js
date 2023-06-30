import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'components/App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import { Global, ThemeProvider } from '@emotion/react';
import './index.css';
import { GlobalStyles, theme } from 'styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

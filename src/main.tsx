import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './shared/config/i18n/i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n} defaultNS={'ru'}>
      <App/>
    </I18nextProvider>
  </BrowserRouter>
)

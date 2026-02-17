import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import IndexPage from './pages/index';
import DetailsPage from './pages/details';
import SignupRedirect from './pages/signup';
import './styles/global.css';
import './styles/nebula.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/signup" element={<SignupRedirect />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

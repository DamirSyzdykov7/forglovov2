import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './pages/authPage/tokenState.jsx';
import { BrowserRouter } from "react-router";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <StrictMode>
        <App />
      </StrictMode>,
    </AuthProvider>
  </BrowserRouter>

)

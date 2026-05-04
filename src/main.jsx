import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import InteractiveRating from './components/InteractiveRating';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InteractiveRating />
  </StrictMode>
);

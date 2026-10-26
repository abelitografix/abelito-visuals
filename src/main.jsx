import { createRoot } from 'react-dom/client';
import './styles/tokens.css';
import './styles/base.css';
import './styles/sections.css';
import App from './App.jsx';

// Lets the CSS know JavaScript is running (used for the fade-in effects).
document.documentElement.classList.add('js');

createRoot(document.getElementById('root')).render(<App />);

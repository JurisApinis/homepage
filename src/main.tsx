/**
 * Modules
 */
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

/**
 * Components
 */
import App from './App.tsx';

/**
 * Constants
 */
import { LS_LANG_KEY, LS_THEME_KEY } from './constants/localStorage.ts';

// Set theme in local storage
if (!localStorage.getItem(LS_THEME_KEY)) {
    localStorage.setItem(LS_THEME_KEY, (import.meta.env.VITE_DEFAULT_THEME as string) ?? 'dark');
}

// Set language in local storage
if (!localStorage.getItem(LS_LANG_KEY)) {
    localStorage.setItem(LS_LANG_KEY, (import.meta.env.VITE_DEFAULT_LANG as string) ?? 'en');
}

const CONTAINER = document.getElementById('root')!;
const ROOT = createRoot(CONTAINER);

ROOT.render(
    <StrictMode>
        <App />
    </StrictMode>
);

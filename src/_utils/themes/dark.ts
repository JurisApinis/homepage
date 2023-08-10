/**
 * Types
 */
import type { T_ColorsKeys } from '../../types';

export const dark: Record<T_ColorsKeys, string> = {
    primary: '#E31F25',
    secondary: '#C3181E',
    gradient:
        'linear-gradient(180deg, #0B0B0B 0%, #080808 5.21%, rgba(11, 11, 11, 0.6) 17.19%, rgba(11, 11, 11, 0.6) 82.81%, #0B0B0B 93.75%, #0B0B0B 100%)',
    'bg-main': '#0B0B0B',
    'bg-counter-main': '#FFFFFF',
    'bg-main-transparent': 'rgba(11, 11, 11, 0.8)',
    'bg-counter-main-transparent': 'rgba(255, 255, 255, 0.3)',
    'text-main': '#FFFFFF',
    'text-active': '#E31F25',
    'text-active-secondary': '#C3181E',
    'text-main-transparent': 'rgba(255, 255, 255, 0.6)',
    'input-border': 'rgba(255, 255, 255, 0.6)',
    'input-active': '#FFFFFF',
    'input-error': '#E31F25',
    black: '#0B0B0B',
    white: '#FFFFFF',
};

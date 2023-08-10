/**
 * Types
 */
import type { T_ColorsKeys } from '../../types';

export const light: Record<T_ColorsKeys, string> = {
    primary: '#07C631',
    secondary: '#008D1F',
    gradient:
        'linear-gradient(180deg, #CCCCCC 0%, #CCCCCC 5.21%, rgba(204, 204, 204, 0.4) 17.19%, rgba(204, 204, 204, 0.4) 82.81%, #CCCCCC 93.75%, #CCCCCC 100%)',
    'bg-main': '#CCCCCC',
    'bg-counter-main': '#0B0B0B',
    'bg-main-transparent': 'rgba(204, 204, 204, 0.8)',
    'bg-counter-main-transparent': 'rgba(11, 11, 11, 0.2)',
    'text-main': '#0B0B0B',
    'text-active': '#07C631',
    'text-active-secondary': '#008D1F',
    'text-main-transparent': 'rgba(11, 11, 11, 0.6)',
    'input-border': 'rgba(11, 11, 11, 0.3)',
    'input-active': '#0B0B0B',
    'input-error': '#E31F25',
    black: '#0B0B0B',
    white: '#FFFFFF',
};

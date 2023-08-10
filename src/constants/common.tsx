/**
 * Icons
 */
import LangENG from '../common/assets/icons/languages/ENG';
import LangLV from '../common/assets/icons/languages/LV';
import LangRus from '../common/assets/icons/languages/RUS';

/**
 * Types
 */
import type { T_LangObj } from '../types';

export const LANGUAGES: Array<T_LangObj> = [
    { id: 1, langShort: 'en', value: <LangENG /> },
    { id: 2, langShort: 'lv', value: <LangLV /> },
    { id: 3, langShort: 'rus', value: <LangRus /> },
];

export const BREAK_POINTS = {
    xs: { min: 0, max: 600 },
    sm: { min: 600, max: 960 },
    md: { min: 960, max: 1264 },
    lg: { min: 1264, max: 1904 },
    xl: { min: 1904 },
} as const;

export enum IMAGES_NAMES {
    HOMEINTRO = 'homeIntro',
    FOOTERBACKGROUND = 'footerBackground',
    FEATURE1 = 'feature1',
    FEATURE2 = 'feature2',
    FEATURE3 = 'feature3',
    FEATURE4 = 'feature4',
}

export const PAGE_LOADING_TIMEOUT = 2800;

export const EMAIL_OPTIONS = {
    contact: 'contact you',
    classwork: 'schedule theory on',
    feedback: 'leave feedback',
} as const;

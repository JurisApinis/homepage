import {Dispatch} from 'react';
import {BREAK_POINTS} from '../constants/common';
import themes from '../_utils/themes';

export type T_Themes = keyof typeof themes;

export type T_Route = {
    path: string;
    element: React.ReactElement;
    name: string;
};

export type T_LangShort = 'en' | 'rus' | 'lv';

export type T_LangObj = {
    id: number | string;
    langShort: T_LangShort;
    value: React.ReactElement<{}>;
};

export type T_ClassWork = {
    id: string;
    date: `${string}/${string}/${string}`;
    time: `${string}:${string}`;
    place: string;
    category: string;
};

export type T_BreakPoints = typeof BREAK_POINTS;
export type T_BreakPointsKeys = keyof T_BreakPoints;

export type T_ColorsKeys =
    | 'primary'
    | 'secondary'
    | 'gradient'
    | 'bg-main'
    | 'bg-counter-main'
    | 'bg-counter-main-transparent'
    | 'bg-main-transparent'
    | 'text-main'
    | 'black'
    | 'white'
    | 'text-active'
    | 'text-active-secondary'
    | 'text-main-transparent'
    | 'input-border'
    | 'input-active'
    | 'input-error';
export type T_ThemesKeys = 'dark' | 'light';

export type T_AppContext = {
    isTranslationsLoaded: boolean;
    isDark: boolean;
    language: T_LangShort;
    translations: Partial<Record<T_LangShort, T_Translations>>;
    themes: Record<T_Themes, Record<T_ColorsKeys, string>>;
    breakPoint: T_BreakPointsKeys;
    dispatch?: Dispatch<Partial<T_AppContext>>
};

export type T_AppContextReducer = (state: T_AppContext, payload: Partial<T_AppContext>) => T_AppContext;

export type T_IconStar = {state: 'empty' | 'full' | 'half'};

export type T_Rate =  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type T_FeedBack = {
    id: string;
    name: string;
    message: string;
    rate: T_Rate;
};

export type T_Translations = {
    common: {
        name: string;
        email: string;
        phoneNumber: string;
        message: string;
        send: string;
        contactUs: string;
        sended: string;
        rate: string;
        selectDate: string;
    };
    errors: {
        wrongEmail: string;
        requiredField: string;
    };
    header: {
        navigation: { home: string; categories: string; feedbacks: string };
    };
    footer: {
        contacts: { heading: string };
    };
    homepage: {
        banner: { title: string; subHeading: string };
        about: { heading: string; paragraphOne: string; paragraphTwo: string };
        features: Record<number, { text: string; btnValue: string }>;
        categories: {
            heading: string;
            text: string;
            list: Record<number, { heading: string; text: string }>;
        };
    };
    categories: {
        list: Record<
            number,
            {
                category: string;
                transport: string;
                head: string;
                options: Record<number, { option: string }>;
            }
        >;
        theory: {
            heading: string;
            table: {
                head: { category: string; date: string; time: string; place: string };
            };
            enroll: { heading: string; text: string };
        };
    };
    feedbacks: {
        heading: string;
    };
};

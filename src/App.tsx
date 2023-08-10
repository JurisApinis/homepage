/**
 * Modules
 */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useEffect, useReducer } from 'react';
import { DB } from './firebase';

/**
 * Styles
 */
import './_utils/scss/main.scss';

/**
 * Components
 */
import RootTemplate from './pages/PageTemplate';

/**
 * Custom hooks
 */
import useRoutes from './hooks/useRoutes';
import useBreakPoints from './hooks/useBreakPoints';

/**
 * Helpers
 */
import calculateBreakPoint from './helpers/calculateBreakPoint';
import translationsAdapter from './adapters/translationsAdapter';

/**
 * Constants
 */
import { LS_LANG_KEY, LS_THEME_KEY } from './constants/localStorage';
import themes from './_utils/themes';
import { PAGE_LOADING_TIMEOUT } from './constants/common';

/**
 * Types
 */
import type { T_AppContext, T_LangShort, T_AppContextReducer, T_BreakPointsKeys } from './types';

//@ts-ignore
export const AppContext = createContext<T_Context>({});

const INITIAL_CONTEXT: T_AppContext = {
    isTranslationsLoaded: false,
    isDark: localStorage.getItem(LS_THEME_KEY) !== 'light',
    themes: themes,
    language: (localStorage.getItem(LS_LANG_KEY) ?? import.meta.env.VITE_DEFAULT_LANG) as T_LangShort,
    translations: {},
    breakPoint: calculateBreakPoint(),
};

const App: React.FC<{}> = ({}) => {
    const [state, dispatch] = useReducer<T_AppContextReducer, T_AppContext>(
        (prev, next) => ({ ...prev, ...next }),
        INITIAL_CONTEXT,
        (state) => state
    );

    const routes = useRoutes([state.isTranslationsLoaded]);

    const switchTheme = () => {
        localStorage.setItem(LS_THEME_KEY, state.isDark ? 'dark' : 'light');

        Object.entries(state.themes[state.isDark ? 'dark' : 'light']).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--${key}`, value);
        });
    };

    useEffect(() => {
        switchTheme();
    }, [state.isDark]);

    useEffect(() => {
        DB.getData({ collectionName: 'translations', docsMutation: translationsAdapter }).then((res) => {
            if (res) {
                setTimeout(() => {
                    dispatch({ translations: res as T_AppContext['translations'], isTranslationsLoaded: true });
                }, PAGE_LOADING_TIMEOUT);
            }
        });
    }, []);

    useBreakPoints((payload: T_BreakPointsKeys) => dispatch({ breakPoint: payload }));

    return (
        <AppContext.Provider value={{ ...state, dispatch } as T_AppContext}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<RootTemplate />}>
                        {routes.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element} />
                        ))}
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;

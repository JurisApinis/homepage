/**
 * Modules
 */
import {useMemo} from 'react';

/**
 * Custom hooks
 */
import useTranslations from './useTranslations';

/**
 * Components
 */
import HomePage from '../pages/Homepage';
import Categories from '../pages/Categories';
import FeedBacks from '../pages/Feedbacks';


/**
 * Types
 */
import type {T_Route} from '../types';

/**
 * 
 * @param {Array} dependency: useEffect triggers
 * @returns {Array}: App routes.
 */
export default function useRoutes(dependency: Array<any> = []) {
    const {t} = useTranslations();
    const routes = useMemo<Array<T_Route>>(() => {
        return [
            {
                path: '/',
                element: <HomePage />,
                name: t('header.navigation.home'),
            },
            {
                path: '/categories',
                element: <Categories />,
                name: t('header.navigation.categories'),
            },
            {
                path: '/feedbacks',
                element: <FeedBacks />,
                name: t('header.navigation.feedbacks'),
            },
        ];
    }, dependency);

    return routes;
}

/**
 * Modules
 */
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';

/**
 * Components
 */
import Header from './components/Header';
import Footer from './components/Footer';
import PageLoading from './components/PageLoading';

/**
 * Constants
 */
import { AppContext } from '../../App';

/**
 * Types
 */
import type { T_AppContext } from '../../types';


const Page: React.FC = () => {
    const { isTranslationsLoaded } = useContext<T_AppContext>(AppContext);

    return (
        <div className="bg-main">
            {!isTranslationsLoaded ? (
                <PageLoading />
            ) : (
                <>
                    <Header />
                    <Outlet />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Page;

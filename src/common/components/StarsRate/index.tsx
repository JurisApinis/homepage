/**
 * Modules
 */
import { useMemo } from 'react';

/**
 * Icons
 */
import Star from '../../assets/icons/UI/Star';

/**
 * Types
 */
import type { T_IconStar } from '../../../types';

export interface I_StarsRate {
    rate: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

const StarsRate: React.FC<Readonly<I_StarsRate>> = ({ rate }) => {
    const stars = useMemo<Array<React.ReactElement<T_IconStar>>>(() => {
        const stars: Array<React.ReactElement<T_IconStar>> = [];

        let score: number = rate;

        for (let i = 0; i <= 4; i++) {
            let state: T_IconStar['state'] = score === 0 ? 'empty' : score - 2 >= 0 ? 'full' : 'half';

            stars.push(<Star key={i} state={state} />);

            score = score - 2 >= 0 ? (score -= 2) : (score = 0);
        }

        return stars;
    }, [rate]);

    return <div className="flex ai-center">{stars}</div>;
};

export default StarsRate;

/**
 * Modules
 */
import { memo } from 'react';

const Instagram: React.NamedExoticComponent = memo(() => {
    
    return (
        <svg id="Instagram" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                id="Rectangle_5"
                data-name="Rectangle 5"
                fill="none"
                stroke={'#FFFFFF'}
                strokeLinejoin="round"
                strokeWidth="2"
            >
                <rect width="24" height="24" rx="7" stroke="none" />
                <rect x="1" y="1" width="22" height="22" rx="6" fill="none" />
            </g>
            <g
                id="Ellipse_1"
                data-name="Ellipse 1"
                transform="translate(6 6)"
                fill="none"
                stroke={'#FFFFFF'}
                strokeWidth="2"
            >
                <circle cx="6" cy="6" r="6" stroke="none" />
                <circle cx="6" cy="6" r="5" fill="none" />
            </g>
            <circle
                fill={'#FFFFFF'}
                id="Ellipse_2"
                data-name="Ellipse 2"
                cx="1.5"
                cy="1.5"
                r="1.5"
                transform="translate(17 4)"
            />
        </svg>
    );
});

export default Instagram;

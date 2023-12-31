/**
 * Modules
 */
import { useContext, memo } from 'react';

/**
 * Constants
 */
import { AppContext } from '../../../../App';

/**
 * Types
 */
import type { T_AppContext, T_IconStar } from '../../../../types';

const Star: React.NamedExoticComponent<Readonly<T_IconStar>> = memo<Readonly<T_IconStar>>(({ state }) => {
    const { isDark, themes } = useContext<T_AppContext>(AppContext);

    const color = themes[isDark ? 'dark' : 'light'].primary;

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {state === 'empty' ? (
                <g clipPath="url(#clip0_16_845)">
                    <path
                        stroke={color}
                        d="M11.5245 3.08156C11.6741 2.6209 12.3259 2.62091 12.4755 3.08156L13.9941 7.75532C14.1949 8.37336 14.7709 8.7918 15.4207 8.7918H20.335C20.8194 8.7918 21.0207 9.4116 20.6289 9.6963L16.6531 12.5848C16.1274 12.9668 15.9074 13.6439 16.1082 14.2619L17.6268 18.9357C17.7765 19.3963 17.2493 19.7794 16.8574 19.4947L12.8817 16.6061C12.3559 16.2242 11.6441 16.2242 11.1183 16.6061L7.14258 19.4947C6.75073 19.7794 6.22349 19.3963 6.37316 18.9357L7.89176 14.2619C8.09257 13.6439 7.87258 12.9668 7.34685 12.5848L3.37111 9.6963C2.97926 9.4116 3.18064 8.7918 3.66501 8.7918H8.57929C9.22913 8.7918 9.80506 8.37336 10.0059 7.75532L11.5245 3.08156Z"
                    />
                </g>
            ) : state === 'full' ? (
                <g clipPath="url(#clip0_16_853)">
                    <path
                        fill={color}
                        d="M11.0489 2.92705C11.3483 2.00574 12.6517 2.00574 12.9511 2.92705L14.4697 7.60081C14.6035 8.01284 14.9875 8.2918 15.4207 8.2918H20.335C21.3037 8.2918 21.7065 9.53141 20.9228 10.1008L16.947 12.9894C16.5966 13.244 16.4499 13.6954 16.5838 14.1074L18.1024 18.7812C18.4017 19.7025 17.3472 20.4686 16.5635 19.8992L12.5878 17.0106C12.2373 16.756 11.7627 16.756 11.4122 17.0106L7.43648 19.8992C6.65276 20.4686 5.59828 19.7025 5.89763 18.7812L7.41623 14.1074C7.55011 13.6954 7.40345 13.244 7.05296 12.9894L3.07722 10.1008C2.29351 9.53141 2.69628 8.2918 3.66501 8.2918H8.57929C9.01252 8.2918 9.39647 8.01284 9.53035 7.60081L11.0489 2.92705Z"
                    />
                </g>
            ) : (
                <g clipPath="url(#clip0_16_849)">
                    <path
                        stroke={color}
                        d="M11.5245 3.08156C11.6741 2.6209 12.3259 2.62091 12.4755 3.08156L13.9941 7.75532C14.1949 8.37336 14.7709 8.7918 15.4207 8.7918H20.335C20.8194 8.7918 21.0207 9.4116 20.6289 9.6963L16.6531 12.5848C16.1274 12.9668 15.9074 13.6439 16.1082 14.2619L17.6268 18.9357C17.7765 19.3963 17.2493 19.7794 16.8574 19.4947L12.8817 16.6061C12.3559 16.2242 11.6441 16.2242 11.1183 16.6061L7.14258 19.4947C6.75073 19.7794 6.22349 19.3963 6.37316 18.9357L7.89176 14.2619C8.09257 13.6439 7.87258 12.9668 7.34685 12.5848L3.37111 9.6963C2.97926 9.4116 3.18064 8.7918 3.66501 8.7918H8.57929C9.22913 8.7918 9.80506 8.37336 10.0059 7.75532L11.5245 3.08156Z"
                    />
                    <path
                        fill={color}
                        d="M10.9184 3.3287C11.1135 2.72832 12 2.86873 12 3.5L12 11V13.4164L12 16.0741C12 16.3942 11.8467 16.6949 11.5878 16.8831L7.43643 19.8992C6.65272 20.4686 5.59824 19.7025 5.89759 18.7812L7.41619 14.1074C7.55006 13.6954 7.4034 13.244 7.05292 12.9894L3.07718 10.1008C2.29347 9.53141 2.69624 8.2918 3.66496 8.2918H8.57925C9.01247 8.2918 9.39643 8.01284 9.5303 7.60081L10.9184 3.3287Z"
                    />
                </g>
            )}
            <defs>
                <clipPath id="clip0_16_845">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
});

export default Star;

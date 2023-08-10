/**
 * Modules
 */
import { createElement } from 'react';
import cn from 'classnames';

export interface I_Text {
    type: 'line' | 'paragraph';
    text: string;
    textSize?:
        | 'xl'
        | 'md'
        | 'sm'
        | 'xs'
        | 'xxs'
        | 'title-xl'
        | 'title-md'
        | 'title-sm'
        | 'heading-xl'
        | 'heading-md'
        | 'heading-sm';
    textColor?: 'primary' | 'primary-transparent' | 'active' | 'white';
    extraClasses?: string;
    textAlign?: 'right' | 'left' | 'center';
}

const Text: React.FC<Readonly<I_Text>> = ({
    type,
    text,
    textSize = 'sm',
    textColor = 'main',
    extraClasses = '',
    textAlign = 'left',
}) => {
    return createElement(
        type === 'line' ? 'span' : 'p',
        {
            className: cn([
                `text--${textSize}`,
                `text-${textColor}`,
                `text--${textAlign}`,
                { [extraClasses]: extraClasses.length > 0 },
            ]),
        },
        [text]
    );
};

export default Text;

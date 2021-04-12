import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({
    onClick,
    primary,
    secondary,
    children,
    disabled,
    className,
}) => {
    const btnClassName = `app-button${primary || (!primary && !secondary) ? ' app-button--primary' : ''}${secondary ? ' app-button--secondary' : ''} ${className}`
    return (
        <button
            className={btnClassName}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func.isRequired,
    primary: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string
}

Button.defaultProps = {
    primary: false,
    secondary: false,
    disabled: false,
    className: ''
}

export default Button;

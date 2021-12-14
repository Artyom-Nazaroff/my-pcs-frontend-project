import React from 'react';
import stl from './Button.module.css'

const Button = ({children, ...props}) => {
    return (
        <button {...props} className={stl.button}>
            {children}
        </button>
    );
};

export default Button;
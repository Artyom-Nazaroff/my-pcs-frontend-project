import React from 'react';
import stl from './Input.module.css'

const Input = (props) => {
    return (
        <input className={stl.input} {...props}/>
    );
};

export default Input;
import React from 'react';
import stl from './Textarea.module.css'

const Textarea = (props) => {
    return (
        <textarea className={stl.textarea} {...props}/>
    );
};

export default Textarea;
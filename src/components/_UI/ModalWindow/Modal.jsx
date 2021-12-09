import React from 'react';
import classes from './Textarea.module.css'

const Textarea = (props) => {
    return (
        <textarea className={classes.textarea} {...props}/>
    );
};

export default Textarea;
import React from 'react';
import classes from './Modal.module.css'

const Modal = ({children, windowState, setModal}) => {

    let changeClasses;
    windowState ? changeClasses = [classes.window, classes.active] : changeClasses = [classes.window];

    return (
        <div className={changeClasses.join(' ')} onClick={() => setModal(false)}>
            <div className={classes.window__content} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
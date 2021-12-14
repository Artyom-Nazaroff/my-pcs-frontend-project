import React from 'react';
import stl from './Modal.module.css'

const Modal = ({children, windowState, setModal}) => {

    let changeClasses;
    windowState ? changeClasses = [stl.window, stl.active] : changeClasses = [stl.window];

    return (
        <div className={changeClasses.join(' ')} onClick={() => setModal(false)}>
            <div className={stl.window__content} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
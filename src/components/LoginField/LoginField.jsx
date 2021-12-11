import React from 'react';
import Input from "../_UI/Input/Input";

const LoginField = (props) => {
    return (
        <div>
            <label htmlFor={props.id}>{props.children}</label>
            <Input type={props.type} id={props.id} placeholder={props.placeholder}/>
            <div className={`warning ${props.class}`}></div>
        </div>
    );
};

export default LoginField;
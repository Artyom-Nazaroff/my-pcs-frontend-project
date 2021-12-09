import React from 'react';
import classes from './Select.module.css'

const Select = (props) => {
    return (
        <select>
            <option disabled={true}>Сортировать по...</option>
            <option value="">По заголовку</option>
            <option value="">По описанию</option>
        </select>
    );
};

export default Select;
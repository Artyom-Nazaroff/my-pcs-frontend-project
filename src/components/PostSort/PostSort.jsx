import React from 'react';
import stl from './PostSort.module.css'

const PostSort = ({options, value, changeValue}) => {
    return (
        <select
            value={value}
            onChange={event => changeValue(event.target.value)}
        >
            <option disabled value={''}>Сортировать по...</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>)}
        </select>
    );
};

export default PostSort;
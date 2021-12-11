import React from 'react';
import classes from './PostFilter.module.css'
import Input from "../_UI/Input/Input";
import PostSort from "../PostSort/PostSort";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <Input
                type="text"
                placeholder={'Search...'}
                value={filter.query}
                onChange={event => setFilter({...filter, query: event.target.value})}
            />
            <PostSort
                value={filter.sort}
                changeValue={sortType => setFilter({...filter, sort: sortType})}
                options={[
                    {value: 'title', name: "По заголовку"},
                    {value: 'body', name: "По описанию"},
                ]}/>
        </div>
    );
};

export default PostFilter;
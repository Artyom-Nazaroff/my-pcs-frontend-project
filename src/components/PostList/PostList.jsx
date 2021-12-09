import React from 'react';
import classes from './PostItem.module.css'

const PostItem = (props) => {
    return (
        <div className={classes.postItem}>
            <div className={classes.title}>{number}. {title}</div>
            <div className={classes.body}>{body}</div>
        </div>
    );
};

export default PostItem;
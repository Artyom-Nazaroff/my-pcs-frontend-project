import React from 'react';
import classes from './PostList.module.css'
import PostItem from "../PostItem/PostItem";

const PostList = ({posts}) => {

    return (
        <div className={classes.postList}>
            <h2 className={classes.title}>Post List</h2>
            { posts.map(post => <PostItem post={post}/>) }
        </div>
    );
};

export default PostList;
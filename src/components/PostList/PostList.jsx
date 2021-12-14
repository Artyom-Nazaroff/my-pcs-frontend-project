import React from 'react';
import classes from './PostList.module.css'
import PostItem from "../PostItem/PostItem";

const PostList = ({posts, deletePost}) => {

    if (!posts.length) return <div className={'posts-notification'}>Посты отсутствуют</div>

    return (
        <div className={classes.postList}>
            <h2 className={classes.title}>Список постов</h2>
            {posts.map((post, index) => <PostItem
                post={post}
                key={post.id}
                number={index + 1}
                deletePost={deletePost}
            />)}
        </div>
    );
};

export default PostList;
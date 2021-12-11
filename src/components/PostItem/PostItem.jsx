import React from 'react';
import classes from './PostItem.module.css'
import Button from "../_UI/Button/Button";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const navigate = useNavigate();
    return (
        <div className={classes.postItem}>
            <div className={classes.textContent}>
                <div className={classes.title}>{props.number}. {props.post.title}</div>
                <div className={classes.body}>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <Button onClick={() => navigate(`/posts/${props.post.id}`)}>Open</Button>
                <Button onClick={() => {props.deletePost(props.post)}}>Delete</Button>
            </div>
        </div>
    );
};

export default PostItem;
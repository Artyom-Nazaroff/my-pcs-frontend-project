import React from 'react';
import stl from './PostItem.module.css'
import Button from "../_UI/Button/Button";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const navigate = useNavigate();
    return (
        <div className={stl.postItem}>
            <div className={stl.textContent}>
                <div className={stl.title}>{props.number}. {props.post.title}</div>
                <div className={stl.body}>{props.post.body}</div>
            </div>
            <div className={stl.btns}>
                <Button onClick={() => navigate(`/posts/${props.post.id}`)}>Открыть</Button>
                <Button onClick={() => {props.deletePost(props.post)}}>Удалить</Button>
            </div>
        </div>
    );
};

export default PostItem;
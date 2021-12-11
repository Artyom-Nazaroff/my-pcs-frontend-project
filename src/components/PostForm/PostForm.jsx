import React, {useState} from 'react';
import classes from './PostForm.module.css'
import Input from "../_UI/Input/Input";
import Button from "../_UI/Button/Button";
import Textarea from "../_UI/Textarea/Textarea";


const PostForm = ({createPost}) => {

    const [post, setPost] = useState({title: '', body: '',});

    function addNewPost(event) {
        event.preventDefault();
        const newPost = {
            ...post,
            id: Date.now(),
        };
        createPost(newPost);
        setPost({title: '', body: '',});
    }

    return (
        <form className={classes.formContainer}>
            <h2 className={classes.title}>New post</h2>
            <Input
                type="text"
                placeholder={'Your title...'}
                value={post.title}
                onChange={event => setPost({...post, title: event.target.value})}
            />
            <Textarea
                type="text"
                placeholder={'Your text...'}
                value={post.body}
                onChange={event => setPost({...post, body: event.target.value})}
            />
            <Button onClick={addNewPost}>Post text</Button>
        </form>
    );
};

export default PostForm;
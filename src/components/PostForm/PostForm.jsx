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
        if (post.title || post.body) {
            createPost(newPost);
            setPost({title: '', body: '',});
        }
    }

    return (
        <form className={classes.formContainer}>
            <h2 className={classes.title}>Создать пост</h2>
            <Input
                style={{marginBottom: 15}}
                type="text"
                placeholder={'Тема поста...'}
                value={post.title}
                onChange={event => setPost({...post, title: event.target.value})}
            />
            <Textarea
                type="text"
                placeholder={'Текст поста...'}
                value={post.body}
                onChange={event => setPost({...post, body: event.target.value})}
            />
            <Button onClick={addNewPost}>Отправить</Button>
        </form>
    );
};

export default PostForm;
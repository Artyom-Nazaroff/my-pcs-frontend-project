import React, {useEffect, useState} from 'react';
import stl from './PostPage.module.css';
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import Loader from "../../components/_UI/Loader/Loader";

const PostPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])

    const [fetchPostById, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    })
    const [fetchComments, isCommentLoading, commentError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(params.id);
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById();
        fetchComments();
    }, [])

    return (
        <div className={'container'}>
            <div className={stl.postContainer}>
                <div className={'contentContainer'}>
                    <div className={stl.post}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <div className={stl.commentsContainer}>
                        <h3 className={stl.commentsTitle}>Comments:</h3>
                        {isCommentLoading
                            ? <Loader/>
                            : <div>
                                {comments.map(comm =>
                                    <div className={stl.commentItem} key={comm.id}>
                                        <h5>{comm.email}</h5>
                                        <div>{comm.body}</div>
                                    </div>
                                )}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostPage;


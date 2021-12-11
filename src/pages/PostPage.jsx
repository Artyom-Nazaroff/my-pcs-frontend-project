import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/_UI/Loader/Loader";

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
        <div>
            THIS IS POST WITH ID {params.id}
            {postError && <h1>Произошла ошибка ${postError}</h1>}
            {isPostLoading
                ? <Loader/>
                : <div>{post.title}</div>}
            <h1>Comments:</h1>
            {isCommentLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostPage;


import React from "react";
import stl from './Posts.module.css'
import {useEffect, useState} from "react";
import {usePosts} from "../../hooks/usePosts";
import {useFetching} from "../../hooks/useFetching";
import Button from "../../components/_UI/Button/Button";
import Modal from "../../components/_UI/ModalWindow/Modal";
import PostForm from "../../components/PostForm/PostForm";
import PostFilter from "../../components/PostFilter/PostFilter";
import PostList from "../../components/PostList/PostList";
import PostService from "../../API/PostService";
import Loader from "../../components/_UI/Loader/Loader";


function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPosts, setTotalPosts] = useState(0);
    const [page, setPage] = useState(1);
    const [fetching, setFetching] = useState(true);

    const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, postsLoading, postError] = useFetching(async () => {
        try {
            const response = await PostService.getAllPosts(page);
            setPosts([...posts, ...response.data]);
            setPage(prevState => prevState + 1);
            setTotalPosts(response.headers['x-total-count']);
        } finally {
            setFetching(false);
        }
    });

    const scrollHandler = (event) => {
        if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 1) {
            setFetching(true);
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    useEffect(() => {
        fetchPosts();
    }, [fetching]);

    function createPost(newPost) {
        setPosts([newPost, ...posts]);
        setModal(false);
    }

    function deletePost(post) {
        setPosts(posts.filter(p => p.id !== post.id));
    }


    return (
        <div className="container">
            <div className={stl.postsContainer}>
                <div className={stl.postsEdit}>
                    <Button style={{margin: '0 0 15px 30px'}} onClick={() => setModal(true)}>Создать
                        пост</Button>
                    <Modal windowState={modal} setModal={setModal}>
                        <PostForm createPost={createPost}/>
                    </Modal>
                    <PostFilter filter={filter} setFilter={setFilter}/>
                </div>
                <PostList posts={searchedAndSortedPosts} deletePost={deletePost}/>
                {postsLoading && <Loader/>}
            </div>
        </div>
    );
}

export default Posts;

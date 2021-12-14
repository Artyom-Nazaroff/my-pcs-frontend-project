import React, {useEffect, useState} from 'react';
import stl from './FriendProfile.module.css'
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import FriendsService from "../../API/FriendsService";
import PhotosService from "../../API/PhotosService";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";
import PostService from "../../API/PostService";
import Loader from "../../components/_UI/Loader/Loader";

const FriendProfile = () => {
    const params = useParams();
    const [friend, setFriend] = useState({});
    const [photos, setPhotos] = useState([]);
    const [posts, setPosts] = useState([]);

    const [fetchFriendById, isFriendLoading, friendError] = useFetching(async () => {
        const response = await FriendsService.getFriendById(params.id);
        setFriend(response.data);
    });

    const [fetchPhotosById, isPhotosLoading, photosError] = useFetching(async () => {
        const response = await PhotosService.getPhotosById(params.id);
        setPhotos(response.data);
    });

    const [fetchPostsById, isPostsLoading, postsError] = useFetching(async () => {
        const response = await PostService.getFriendPosts(params.id);
        setPosts(response.data);
    });

    useEffect(() => {
        fetchFriendById();
        fetchPhotosById();
        fetchPostsById();
    }, []);

    return (
        <div>
            {isFriendLoading ? <div style={{marginTop: 100}}><Loader/></div> :
                <div className={'container'}>
                    <div className={stl.profileContainer}>
                        <div className={stl.profilePic}>
                            <img src={`/img/friendsPhotos/pic0${friend.id}.jpeg`} alt="avatar"/>
                        </div>
                        <div className={stl.profile}>
                            <div className={'contentContainer'}>
                                <h2 className={'title'}>Информация о пользователе:</h2>
                                <div className={stl.gridContainer}>
                                    <p>Имя:</p>
                                    <div>{friend.name}</div>
                                    <p>Город:</p>
                                    <div>{friend?.address?.city}</div>
                                    <p>Номер телефона:</p>
                                    <div>{friend.phone}</div>
                                    <p>Email:</p>
                                    <div>{friend.email}</div>
                                    <p>Место работы:</p>
                                    <div>{friend?.company?.name}</div>
                                    <p>Веб-сайт:</p>
                                    <div>{friend.website}</div>
                                </div>
                            </div>
                            <div className={'contentContainer'}>
                                <h2 className={'title'}>Фотографии:</h2>
                                <PhotoGallery
                                    photos={photos}
                                />
                            </div>
                            <div className={'contentContainer'}>
                                <h2 className={'title'}>Посты:</h2>
                                {posts.map(post =>
                                    <div className={stl.postItem} key={post.id}>
                                        <h3 className={stl.postTitle}>{post.title}</h3>
                                        <p>{post.body}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default FriendProfile;
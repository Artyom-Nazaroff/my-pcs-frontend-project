import React, {useEffect, useState} from 'react';
import stl from './FriendProfile.module.css'
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import FriendsService from "../../API/FriendsService";
import PhotosService from "../../API/PhotosService";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";

const FriendProfile = () => {
    const params = useParams();
    const [friend, setFriend] = useState({});
    const [photos, setPhotos] = useState([]);

    const [fetchFriendById, isFriendLoading, friendError] = useFetching(async () => {
        const response = await FriendsService.getFriendById(params.id);
        setFriend(response.data);
    });

    const [fetchPhotosById, isPhotosLoading, photosError] = useFetching(async () => {
        const response = await PhotosService.getPhotosById(params.id);
        setPhotos(response.data);
    });

    useEffect(() => {
        fetchFriendById();
        fetchPhotosById();
    }, []);

    return (
        <div className={'container'}>
            <div className={stl.profileContainer}>
                <div className={stl.profilePic}>
                    <img src={`/img/friendsPhotos/pic0${friend.id}.jpeg`} alt="avatar"/>
                </div>
                <div className={stl.profile}>
                    <div className={stl.profileInfo}>
                        <h2 className={stl.profileTitle}>Информация о пользователе:</h2>
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
                    <div className={stl.photos}>
                        <h2 className={stl.photosTitle}>Фотографии:</h2>
                        <PhotoGallery
                            photos={photos}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendProfile;
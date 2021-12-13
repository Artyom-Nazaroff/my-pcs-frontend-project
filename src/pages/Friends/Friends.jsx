import React, {useContext, useEffect, useState} from 'react';
import stl from './Friends.module.css';
import {useFetching} from "../../hooks/useFetching";
import FriendsService from "../../API/FriendsService";
import FriendItem from "../../components/FriendItem/FriendItem";
import {ProfileContext} from "../../context/context";

const Friends = () => {

    const {createProfile, setCreateProfile} = useContext(ProfileContext);
    console.log(createProfile)
    const [friends, setFriends] = useState([]);

    const [fetchFriends, isLoading, postError] = useFetching(async () => {
        const response = await FriendsService.getAllFriends();
        setFriends(response.data);
    });

    useEffect(() => {
        fetchFriends();
    }, []);

    return (
        <div className={'container'}>
            <div className={stl.friendsContainer}>
                <h2 className={stl.title}>Список друзей:</h2>
                {friends.map(friend =>
                    <FriendItem
                        src={`/img/friendsPhotos/pic0${friend.id}.jpeg`}
                        key={friend.id}
                        id={friend.id}
                        name={friend.name}
                        email={friend.email}
                    />
                )}
            </div>
        </div>
    );
};

export default Friends;
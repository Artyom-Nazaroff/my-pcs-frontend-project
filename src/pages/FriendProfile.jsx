import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import FriendsService from "../API/FriendsService";

const FriendProfile = () => {
    const params = useParams();
    const [friend, setFriend] = useState({});

    const [fetchFriendById, isLoading, error] = useFetching(async () => {
        const response = await FriendsService.getFriendById(params.id);
        setFriend(response.data);
    });

    useEffect(() => {
        fetchFriendById();
    }, []);

    return (
        <div>
            <h1>Friend {params.id}</h1>
            <p>{friend.username}</p>
        </div>
    );
};

export default FriendProfile;
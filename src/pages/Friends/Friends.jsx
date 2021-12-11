import React, {useEffect, useState} from 'react';
import {useFetching} from "../../hooks/useFetching";
import FriendsService from "../../API/FriendsService";
import FriendItem from "../../components/FriendItem";

const Friends = () => {
    const [friends, setFriends] = useState([]);

    const [fetchFriends, isLoading, postError] = useFetching(async () => {
        const response = await FriendsService.getAllFriends();
        setFriends(response.data);
    });

    useEffect(() => {
        fetchFriends();
    }, []);

    return (
        <div>
            <h2>Список друзей:</h2>
            {friends.map(friend =>
                <FriendItem
                    key={friend.id}
                    id={friend.id}
                    name={friend.name}
                    email={friend.email}
                />
            )}
        </div>
    );
};

export default Friends;
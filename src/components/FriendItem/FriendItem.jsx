import React from 'react';
import stl from './FriendItem.module.css'
import {Link} from "react-router-dom";

const FriendItem = ({id, name, email, src}) => {

    return (
        <div className={stl.friendContainer}>
            <div className={stl.friendPicture}>
                <img src={src} alt="avatar"/>
            </div>
            <div className={stl.friendName}>
                <div className={stl.nameString}>
                    <Link style={{color: 'inherit'}} to={`/friends/${id}`}><h3>{name}</h3></Link>
                </div>
                <p>E-mail: {email}</p>
            </div>
        </div>
    );
};

export default FriendItem;
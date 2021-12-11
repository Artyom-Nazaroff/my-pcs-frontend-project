import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const FriendItem = ({id, name, email}) => {
    return (
        <div>
            <Link to={`/friends/${id}`}><h3>{name}</h3></Link>
            <p>E-mail: {email}</p>
        </div>
    );
};

export default FriendItem;
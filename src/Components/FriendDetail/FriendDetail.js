import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend=useLoaderData();


    return (
        <div>
            <h1>detail:{friend.name}</h1>
            <p>phone:{friend.phone}</p>
            <h1>every thing you need to know about  this person</h1>
        </div>
    );
};

export default FriendDetail;
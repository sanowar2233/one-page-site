import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend2 from '../Friend2/Friend2';

const Friend = () => {
const friends=useLoaderData()
    return (
        <div>
            <h1>this is Friend page. Yaa : {friends.length}</h1>
            {
                friends.map(friend=><Friend2 key={friend.id} friend={friend}></Friend2>)
            }
        </div>
    );
};

export default Friend;
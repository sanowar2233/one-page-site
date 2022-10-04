import React from 'react';
import { Link } from 'react-router-dom';

const Friend2 = ({friend}) => {
    const {id,name ,email,username}=friend;
    return (
        <div className='border border-rounded bg-success text-light '>
           <p> Name:{name}</p>
           <p>email: {email}</p>
           <p>username:<Link to={`/friend/${id}`}>{username}</Link></p>
           
            
        </div>
    );
};

export default Friend2;
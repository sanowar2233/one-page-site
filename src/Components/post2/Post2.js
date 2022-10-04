import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Post2 = ({post}) => {
    const {id,title, body}=post;

    const navigate=useNavigate()


    const handleNavigate=()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='border border-rounded bg-warning'>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={handleNavigate}>Show Details</button>
        </div>
    );
};

export default Post2;
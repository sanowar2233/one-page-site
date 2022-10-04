import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post2 from '../post2/Post2';

const Post = () => {
    const posts=useLoaderData()
    return (
        <div>
            <h3>A  lot of fb post</h3>
            {
                posts.map(post=><Post2 key={post.id}post={post}></Post2>)
            }
        </div>
    );
};

export default Post;
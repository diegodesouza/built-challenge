import React from 'react';
import { observer } from 'mobx-react-lite';

const PostList = ({ posts, deletePost, handleChange }) => {
    const onHandleEditing = (value) => {
        handleChange('editing', true);
        handleChange('post', value);
    };
    return (
        <div className='post-list'>
            <h2>Past Posts</h2>
            {posts.map((post) => (
                <div className='post' key={post.id}>
                    <div className='header'>
                        <div>{post.timestamp}</div>
                        <div>{post.title}</div>
                    </div>
                    <div className='body'>
                        {post.text}
                        <div className='actions'>
                            <button type='button' onClick={() => onHandleEditing(post)}>
                                Edit
                            </button>
                            <button type='button' onClick={() => deletePost(post.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default observer(PostList);

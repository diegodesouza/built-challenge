import { observer } from 'mobx-react-lite';
import React from 'react';

const EditPost = ({ post, handleChange }) => {
    console.log('post', post);
    return (
        <div className='edit-post'>
            <h2>Editing Post</h2>

            <div className='post'>
                <div className='input'>
                    <div className='label'>Title:</div>
                    <input type='text' onChange={(value) => handleChange('title', value)} value={post.title} />
                </div>
                <div className='input'>
                    <div className='label'>Text:</div>
                    <textarea
                        onChange={(value) => handleChange('text', value)}
                        value={post.text}
                        rows='5'
                        cols='50'
                    ></textarea>
                </div>
            </div>
            <button onClick={() => handleChange('editing', false)}>Cancel</button>
        </div>
    );
};

export default observer(EditPost);

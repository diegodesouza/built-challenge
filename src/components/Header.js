import React from 'react';
import { observer } from 'mobx-react-lite';

const Header = ({ heading = 'My Blog', generateSampleData, createPost }) => {
    return (
        <div className='header'>
            <h1>{heading}</h1>
            <div className='actions'>
                <button type='button' onClick={generateSampleData}>
                    Generate Sample Data
                </button>
                <button type='button' onClick={createPost}>
                    Create Post
                </button>
            </div>
        </div>
    );
};

export default observer(Header);

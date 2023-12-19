import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/BlogStore';
import PostList from './PostList';
import EditPost from './EditPost';

const Posts = () => {
    const store = useStore();
    const { getPosts, deletePost, posts, post, editing, handleChange } = store;
    useEffect(() => {
        getPosts();
    }, []);
    return (
        <>
            {editing ? (
                <EditPost post={post} handleChange={handleChange} />
            ) : (
                <PostList posts={posts} handleChange={handleChange} deletePost={deletePost} />
            )}
        </>
    );
};

export default observer(Posts);

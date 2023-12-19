import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/BlogStore';
import PostList from './PostList';

const Posts = () => {
    const store = useStore();
    const { getPosts } = store;
    useEffect(() => {
        getPosts();
    }, []);
    return <PostList />;
};

export default observer(Posts);

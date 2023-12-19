import React from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Button, Card, CardHeader, CardBody, CardText } from 'reactstrap';
import { useStore } from '../stores/BlogStore';
import parse from 'html-react-parser';

const PostList = () => {
    const store = useStore();
    const { posts, deletePost, handleChange } = store;
    const navigate = useNavigate();

    const handleEdit = (post) => {
        handleChange('post', post);
        handleChange('editing', true);
        navigate(`posts/edit/${post.id}`);
    };

    return (
        <div className='post-list'>
            <h2>Posts</h2>
            {posts.map((post) => (
                <Card
                    className='my-2'
                    color='light'
                    outline
                    style={{
                        width: '25rem',
                    }}
                    key={post.id}
                >
                    <CardHeader>
                        <div>{post.timestamp}</div>
                        <div>{post.title}</div>
                    </CardHeader>
                    <CardBody>
                        <CardText>{parse(post.text)}</CardText>
                        <div className='actions'>
                            <Button size='sm' className='button' tag='a' onClick={() => handleEdit(post)}>
                                Edit
                            </Button>
                            <Button color='secondary' size='sm' onClick={() => deletePost(post.id)}>
                                Delete
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
};

export default observer(PostList);

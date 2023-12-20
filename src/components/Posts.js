import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/BlogStore';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardHeader, CardBody, CardText } from 'reactstrap';
import parse from 'html-react-parser';
import { Pencil, Trash } from 'react-bootstrap-icons';
import moment from "moment";


const Posts = () => {
    const store = useStore();
    const { getPosts, posts, deletePost, handleChange } = store;
    const navigate = useNavigate();

    const handleEdit = (post) => {
        handleChange('post', post);
        handleChange('editing', true);
        navigate(`posts/edit/${post.id}`);
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className='posts'>
            <h2>Posts</h2>
            {posts.map((post) => (
                <Card
                    className='my-2'
                    color='light'
                    outline
                    key={post.id}
                >
                    <CardHeader>
                        <div className="header">
                            <div>{moment(post?.timestamp).format('DD MMM YYYY')}</div>
                            <div>{post.timestamp && '|'}</div>
                            <div>{post?.title}</div>
                        </div>
                        <div className='actions'>
                            <Button aria-label="Edit" color="link" size='sm' onClick={() => handleEdit(post)}>
                                <Pencil />

                            </Button>
                            <Button aria-label="Delete" color="link" size='sm' onClick={() => deletePost(post.id)}>
                                <Trash />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <CardText>{parse(post.text)}</CardText>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
};

export default observer(Posts);

import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useStore } from '../stores/BlogStore';
import { useNavigate } from 'react-router-dom';

const EditPost = () => {
    const store = useStore();
    const navigate = useNavigate();
    const { post, handlePostChange, updatePost, editing, createPost } = store;

    const handleCreatePost = async () => {
        const res = await createPost();
        if (res.status === 200) {
            navigate('/');
        }
    };

    const handleUpdatePost = async (id) => {
        const res = await updatePost(id);
        if (res.status === 200) {
            navigate('/');
        }
    };

    return (
        <div className='edit-post'>
            <h2>{editing ? 'Edit' : 'Create'} Post</h2>

            <div className='post'>
                <Form>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input
                            name='title'
                            onChange={({ target: { value } }) => handlePostChange('title', value)}
                            value={post.title}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='text'>Text</Label>
                        <Input
                            onChange={({ target: { value } }) => handlePostChange('text', value)}
                            id='text'
                            type='textarea'
                            rows='10'
                            cols='40'
                            name='text'
                            value={post.text}
                        />
                    </FormGroup>
                    <Button
                        type='button'
                        color='primary'
                        onClick={() => (editing ? handleUpdatePost(post.id) : handleCreatePost())}
                    >
                        Submit
                    </Button>
                    <Button type='button' color='secondary' onClick={() => navigate('/')}>
                        Cancel
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default observer(EditPost);

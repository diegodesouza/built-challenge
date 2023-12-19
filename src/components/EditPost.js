import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useStore } from '../stores/BlogStore';

const EditPost = () => {
    const store = useStore();
    const { post, handlePostChange, updatePost } = store;

    return (
        <div className='edit-post'>
            <h2>Editing Post</h2>

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
                    <Button type='button' color='primary' onClick={() => updatePost(post.id)}>
                        Submit
                    </Button>
                    <Button type='button' color='secondary'>
                        Cancel
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default observer(EditPost);

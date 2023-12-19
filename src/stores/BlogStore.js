import React, { useContext } from 'react';
import axios from 'axios';
import { makeAutoObservable, runInAction } from 'mobx';

export default class BlogStore {
    baseURL = 'https://us-central1-mbtcandidate.cloudfunctions.net/posts/ddesouza/';

    posts = [];

    post = {};

    editing = false;

    constructor() {
        makeAutoObservable(this);
    }

    // GET /posts/{name}
    getPosts = async () => {
        try {
            const response = await axios.get(this.baseURL);
            console.log(response.data.response);
            runInAction(() => {
                this.posts = response.data.response;
            });
        } catch (error) {
            throw new Error(error);
        } finally {
            console.log('Done');
        }
    };

    // GET /posts/{name}/{id}
    getPost = async (id) => {
        try {
            const response = await axios.get(this.baseURL + id);
            console.log(response.data.response);
            runInAction(() => {
                this.post = response.data.response;
            });
        } catch (error) {
            throw new Error(error);
        } finally {
            console.log('Done');
        }
    };

    // POST /posts/{name}
    createPost = async () => {
        try {
            return await axios.post(this.baseURL, this.post);
        } catch (error) {
            throw new Error(error);
        } finally {
            console.log('Done');
        }
    };

    // PUT /posts/{name}/{id}
    updatePost = async (id) => {
        const post = { title: this.post.title, text: this.post.text };
        try {
            const response = await axios.put(this.baseURL + id, post);
            runInAction(() => {
                this.post = response.data.response;
            });
            return response;
        } catch (error) {
            throw new Error(error);
        } finally {
            console.log('Done');
        }
    };

    // DELETE /posts/{name}
    deletePosts = async () => {
        try {
            const response = await axios.delete(this.baseURL);
            console.log(response.data.response);
            runInAction(() => {
                this.post = response.data.response;
            });
        } catch (error) {
            throw new Error(error);
        } finally {
            console.log('Done');
        }
    };

    // DELETE /posts/{name}/{id}
    deletePost = async (id) => {
        try {
            const response = await axios.delete(this.baseURL + id);
            if (response.status === 200) {
                runInAction(() => {
                    this.posts = this.posts.filter((post) => post.id !== id);
                });
            }
        } catch (error) {
            throw new Error(error);
        } finally {
            console.log('Done');
        }
    };

    // GET /posts/{name}/generateSampleData
    generateSampleData = async () => {
        try {
            await axios.get(this.baseURL + 'generateSampleData');
        } catch (error) {
            throw new Error(error);
        } finally {
            console.log('Done');
        }
    };

    handlePostChange = (key, value) => {
        if (!key || !value) return;

        this.post[key] = value;
    };

    handleChange = (key, value) => {
        if (!key || !value) return;

        this[key] = value;
    };
}

const StoreContext = React.createContext();

export const StoreProvider = ({ children, store }) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);

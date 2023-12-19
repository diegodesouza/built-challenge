import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogStore, { StoreProvider } from './stores/BlogStore';
import Header from './components/Header';
import Posts from './components/Posts';
import EditPost from './components/EditPost';

const store = new BlogStore();

function App() {
    const { generateSampleData, post } = store;
    return (
        <StoreProvider store={store}>
            <div className='App'>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Posts />} />
                    <Route exact path='/posts/edit/:id' element={<EditPost post={post} />} />
                    <Route exact path='/posts/create' element={<EditPost />} />
                </Routes>
            </div>
        </StoreProvider>
    );
}

export default App;

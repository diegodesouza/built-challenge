import './App.css';
import BlogStore, { StoreProvider } from './stores/BlogStore';
import Header from './components/Header';
import Posts from './components/Posts';

const store = new BlogStore();

function App() {
    const { generateSampleData } = store;
    return (
        <StoreProvider store={store}>
            <div className='App'>
                <Header generateSampleData={generateSampleData} />
                <Posts />
            </div>
        </StoreProvider>
    );
}

export default App;

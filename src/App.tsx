import './style/App.scss';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useDetections } from './composables/useDetections';
import DetectionList from './components/DetectionsList';
import SearchBar from './components/SearchBar';

function App() {
    const {
        filteredDetections,
        searchQuery,
        setSearchQuery,
        loading,
        error
    } = useDetections();

    return (
        <div className='app-container'>
            <h1>Security Detections List</h1>
            <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />

            <div className='load-container'>
                {loading && (
                    <div className='spinner'>
                        <AiOutlineLoading3Quarters className='loading-icon' />
                    </div>
                )}
            </div>

            {error && <p className='error'>{error}</p>}
            {!loading && !error && (
                filteredDetections.length > 0 ? (
                    <DetectionList detections={filteredDetections} />
                ) : (
                    <p className='no-results'>No results found</p>
                )
            )}
        </div>
    );
}

export default App;
import { BiSearch } from 'react-icons/bi';

interface SearchBarProps {
    searchQuery: string;
    onSearch: (query: string) => void;
}

const SearchBar = ({ searchQuery, onSearch }: SearchBarProps) => {
    return (
        <div className='search-bar-container'>
            <BiSearch className='search-icon'/>
            <input 
                type='text' 
                className='search-bar' 
                placeholder='Search detections...' 
                value={searchQuery} 
                onChange={(e) => onSearch(e.target.value)} 
            />
        </div>
    );
};

export default SearchBar;
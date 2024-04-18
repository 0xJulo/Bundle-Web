'use client'
import React, { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  }
  return (
    <form className="w-full mb-8 md:mb-5">
      <div className='relative w-full'>
          <input 
            className="w-full h-12 pl-3 pr-10 py-2 rounded border"
            type="text" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder='Search for a bundle'
          />
          <button 
            type="submit" 
            className="absolute right-0 top-1 mt-2 mr-3"
          >
              <SearchIcon />
          </button>
        </div>
    </form>
  );
};

export default SearchBar;


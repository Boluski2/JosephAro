import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SearchBar = ({ searchQuery, onSearchChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions] = useState([
    'Corporate Identity',
    '3D Visualization',
    'Brand Design',
    'Motion Graphics',
    'Generative Art',
    'Logo Design',
    'Design System',
    'Digital Art'
  ]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  const filteredSuggestions = suggestions?.filter(suggestion =>
    suggestion?.toLowerCase()?.includes(searchQuery?.toLowerCase() || '') &&
    suggestion?.toLowerCase() !== (searchQuery?.toLowerCase() || '')
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef?.current && !inputRef?.current?.contains(event?.target)) {
        setShowSuggestions(false);
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const value = e?.target?.value;
    onSearchChange(value);
    setShowSuggestions(value?.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    onSearchChange(suggestion);
    setShowSuggestions(false);
    inputRef?.current?.blur();
  };

  const handleClearSearch = () => {
    onSearchChange('');
    inputRef?.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e?.key === 'Escape') {
      setShowSuggestions(false);
      inputRef?.current?.blur();
    }
  };

  return (
    <div className="relative" ref={inputRef}>
      <div className={`relative transition-all duration-200 ${
        isFocused ? 'transform scale-[1.02]' : ''
      }`}>
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Icon 
            name="Search" 
            size={20} 
            className={`transition-colors duration-200 ${
              isFocused || searchQuery ? 'text-primary' : 'text-muted-foreground'
            }`} 
          />
        </div>
        
        <input
          type="text"
          placeholder="Search by title, technique, or description..."
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => {
            setIsFocused(true);
            if (searchQuery?.length > 0) {
              setShowSuggestions(true);
            }
          }}
          onKeyDown={handleKeyDown}
          className={`w-full pl-12 pr-12 py-4 bg-background border-2 rounded-2xl transition-all duration-200 focus:outline-none text-foreground placeholder-muted-foreground ${
            isFocused 
              ? 'border-primary shadow-lg shadow-primary/10' 
              : 'border-border hover:border-primary/30'
          }`}
        />

        {searchQuery && (
          <button
            onClick={handleClearSearch}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <Icon name="X" size={18} />
          </button>
        )}
      </div>
      {/* Search Suggestions */}
      {showSuggestions && filteredSuggestions?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-xl shadow-lg z-50 py-2 max-h-48 overflow-y-auto"
        >
          <div className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wide border-b border-border">
            Suggestions
          </div>
          {filteredSuggestions?.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full text-left px-4 py-2.5 hover:bg-muted transition-colors text-foreground flex items-center group"
            >
              <Icon name="Search" size={14} className="mr-3 text-muted-foreground group-hover:text-primary transition-colors" />
              <span>{suggestion}</span>
            </button>
          ))}
        </motion.div>
      )}
      {/* Search Stats */}
      {searchQuery && (
        <div className="mt-2 text-sm text-muted-foreground">
          <Icon name="Info" size={14} className="inline mr-1" />
          Search results for "{searchQuery}"
        </div>
      )}
    </div>
  );
};

export default SearchBar;
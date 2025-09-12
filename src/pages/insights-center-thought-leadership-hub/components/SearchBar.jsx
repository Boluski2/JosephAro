import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ onSearch, placeholder = "Search articles, and resources..." }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e?.preventDefault();
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  const popularSearches = [
    "Design Systems",
    "Creative Process",
    "UI/UX Trends",
    "Brand Strategy",
    "Typography",
    "Color Theory"
  ];

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Input
            type="search"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
            onFocus={() => setIsExpanded(true)}
            onBlur={() => setTimeout(() => setIsExpanded(false), 200)}
            className="pl-12 pr-12 h-12 text-base bg-background border-2 border-border focus:border-primary rounded-full"
          />
          
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Icon name="Search" size={20} className="text-muted-foreground" />
          </div>
          
          {searchTerm && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-brand"
            >
              <Icon name="X" size={16} className="text-muted-foreground" />
            </button>
          )}
        </div>
      </form>
      {/* Search Suggestions */}
      {isExpanded && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-xl shadow-brand-lg z-50 overflow-hidden">
          <div className="p-4">
            <p className="text-sm font-medium text-foreground mb-3">Popular Searches</p>
            <div className="flex flex-wrap gap-2">
              {popularSearches?.map((search) => (
                <button
                  key={search}
                  onClick={() => {
                    setSearchTerm(search);
                    onSearch(search);
                    setIsExpanded(false);
                  }}
                  className="text-sm px-3 py-1.5 bg-muted hover:bg-primary/10 hover:text-primary rounded-full transition-brand"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
          
          {searchTerm && (
            <div className="border-t border-border p-4">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-brand">
                <Icon name="Search" size={16} />
                <span>Search for "{searchTerm}"</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
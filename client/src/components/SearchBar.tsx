import React, { useState } from 'react';

interface SearchBarProps {
  data: string[];
}

const Searchbar: React.FC<SearchBarProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<string[]>([]);

  // Handle search term changes
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter data based on search term
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <p>some result</p>
      </ul>
    </div>
  );
};

export default Searchbar;

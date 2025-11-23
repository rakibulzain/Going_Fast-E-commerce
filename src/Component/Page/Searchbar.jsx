import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Searchbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const query = search.toLowerCase().trim();

    if (!query) {
      toast.error("Please enter something!");
      return;
    }

    navigate(`/search?query=${query}`);

    setSearch(""); 
  };

  return (
    <div className="flex rounded-md border border-blue-500 overflow-hidden max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search Something..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full outline-none bg-white text-gray-600 text-sm px-5 py-1"
      />

      <button
        onClick={handleSearch}
        className="flex items-center justify-center bg-[#007bff] px-5"
      >
        🔍
      </button>
    </div>
  );
}

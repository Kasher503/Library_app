'use client'; // Ensure this line is at the top if you are using Next.js

import React, { useState } from 'react';
import axios from 'axios';
import Book from './Book';
import Hero from './Hero';

const Searchbooks = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');  // State to track the search term globally

  const fetchBooks = async (term) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${term}&key=AIzaSyB6s4PRzuJpFDyQyUcJBU50acNxsa_r_LE`
      );
      setBooks(response.data.items || []);
    } catch (error) {
      console.error('Error fetching the books', error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm) {
      fetchBooks(searchTerm);
    }
  };

  // Callback to handle search term change from Hero
  const handleSearchTermChange = (term) => {
    setSearchTerm(term);  // Update the search term globally
  };

  return (
    <div>
      <h1 className="my-16 ml-10 text-2xl font-Lora">
        <span className="underline decoration-yellow-500 underline-offset-8">Search</span> Books
      </h1>

      {/* Pass down the callback to handle the search term */}
      <Hero 
        onSearch={handleSearch}
        onSearchTermChange={handleSearchTermChange}  // Pass the callback for search term change
      />

      {books.length > 0 ? (
        <Book books={books} />
      ) : (
        <p className="ml-10">No books found.</p>
      )}
    </div>
  );
};

export default Searchbooks;

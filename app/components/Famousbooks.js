"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import BorderButton from "./BorderButton"

const FamousBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=bestsellers&key=AIzaSyB6s4PRzuJpFDyQyUcJBU50acNxsa_r_LE"
        );
        setBooks(response.data.items);
      } catch (error) {
        console.error("Error fetching the books", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1 className="my-16 ml-10 text-2xl font-Lora">
        <span className="text-white underline decoration-theme-dark-Blue underline-offset-8">
          Famous
        </span>{" "}
        
      </h1>
      <Book books={books} />
      <BorderButton link="/Famous" />  
    </div>
    
  );
};

export default FamousBooks;

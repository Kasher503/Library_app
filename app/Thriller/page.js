"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Bookpage from "../components/Bookpage";

const Page = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=subject:mystery&key=AIzaSyB6s4PRzuJpFDyQyUcJBU50acNxsa_r_LE"
        );
        setBooks(response.data.items);
      } catch (error) {
        console.error("Error fetching the books", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="bg-DarkColor">
    <Navbar />
      <h1 className="my-16 ml-10 text-2xl text-white font-Lora">
        <span className="underline decoration-theme-dark-Blue underline-offset-8">
          Thriller Books
        </span>{" "}
        
      </h1>
      <Bookpage books={books} />
    </div>
    
  );
};

export default Page;

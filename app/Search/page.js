"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Bookpage from "../components/Bookpage";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader"; // Import the Loader component

const Page = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading status
  const searchParams = useSearchParams();
  const value = searchParams.get("value");

  useEffect(() => {
    const fetchBooks = async () => {
      if (value) {
        setLoading(true); // Set loading to true when starting fetch
        try {
          const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
              value
            )}&key=AIzaSyB6s4PRzuJpFDyQyUcJBU50acNxsa_r_LE`
          );
          setBooks(response.data.items || []);
        } catch (error) {
          console.error("Error fetching the books:", error);
        } finally {
          setLoading(false); // Set loading to false after fetch completes
        }
      }
    };

    fetchBooks();
  }, [value]);

  return (
    <div className="bg-DarkColor">
      <Navbar />
      <h1 className="my-16 ml-10 text-2xl font-Lora ">
        <span className="text-white underline decoration-theme-dark-Blue underline-offset-8">
          Search Results for: "{value}"
        </span>
      </h1>
      {loading ? (
        <Loader /> // Show Loader component while loading
      ) : (
        <Bookpage books={books} /> // Show Bookpage component after loading
      )}
    </div>
  );
};

export default Page;

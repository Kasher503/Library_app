"use client";
import React, { useEffect, useState, Suspense } from "react"; // Import Suspense
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Bookpage from "../components/Bookpage";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

const Page = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const value = searchParams.get("value");

  useEffect(() => {
    const fetchBooks = async () => {
      if (value) {
        setLoading(true);
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
          setLoading(false);
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
      {loading ? <Loader /> : <Bookpage books={books} />}
    </div>
  );
};

// Wrap the Page component in Suspense
const SuspenseWrapper = () => (
  <Suspense fallback={<Loader />}>
    <Page />
  </Suspense>
);

export default SuspenseWrapper;

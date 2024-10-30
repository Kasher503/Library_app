"use client";
import { Button } from "./ui/moving-border";

import Image from "next/image";
import React, { useState } from "react";

const Book = ({ books }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleReadClick = (previewLink) => {
    console.log(previewLink); // Check if previewLink is valid
    if (previewLink) {
      window.open(previewLink, "_blank");
    } else {
      console.error("Preview link is undefined or invalid.");
    }
  };

  const handledownloadClick = (acsTokenLink) => {
    if (acsTokenLink) {
      window.location.href = acsTokenLink; // Redirect to the ACS token link
    } else {
      alert("Book is not available"); // Show an alert if link is unavailable
    }
  };

  const handleOpenModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="grid items-center grid-cols-1 gap-6 px-2 justify-items-center lg:p-2 lg:px-12 md:grid-cols-3 lg:grid-cols-4 bg-DarkColor">
      {books.slice(0, 4).map((book, index) => (
        <div
          key={index}
          className="w-64 pt-4 border shadow-lg border-theme-dark-Blue h-80 card"
        >
          <figure>
            {book.volumeInfo.imageLinks?.thumbnail && (
              <Image
                src={book.volumeInfo.imageLinks.thumbnail}
                height={200}
                width={200}
                className="w-40 h-40 rounded-md"
                alt={book.volumeInfo.title}
              />
            )}
          </figure>
          <div className="p-4">
            <h2 className="text-lg text-white card-title">
              {book.volumeInfo.title.split(" ").slice(0, 3).join(" ")}
            </h2>
            <div className="justify-end mt-5 card-actions">
              <Button
                borderRadius="0.5rem"
                className="p-1 text-white border rounded-md fo:nt-bold lg:p-2 border-theme-dark-Blue hover:bg-theme-dark-Blue bg-DarkColor"
                onClick={() => handleOpenModal(book)} 
              >
                Details
              </Button>
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && selectedBook === book && (
            <div className="modal modal-open ">
              <div className="w-4/5 max-w-3xl border rounded-md modal-box h-4/5 border-theme-dark-Blue bg-DarkColor">
                {" "}
                <div className="flex justify-end">
                  <button
                    className="p-2 text-white border border-red-700 rounded-md hover:bg-red-700"
                    onClick={handleCloseModal}
                  >
                    {icons.close}
                  </button>
                </div>
                <div className="flex flex-col lg:gap-8 lg:flex-row">
                  <div>
                    {selectedBook.volumeInfo.imageLinks?.thumbnail && (
                      <Image
                        src={selectedBook.volumeInfo.imageLinks.thumbnail}
                        height={200}
                        width={200}
                        className="w-40 h-40 mb-4 rounded-md"
                        alt={selectedBook.volumeInfo.title}
                      />
                    )}
                  </div>
                  <div className="text-white">
                    <h3 className="text-lg font-bold text-white">
                      {selectedBook.volumeInfo.title}
                    </h3>
                    <div className="flex flex-col gap-10 mt-5 lg:flex-row">
                      <div className="flex flex-col gap-3">
                        <p className="font-bold text-md">
                          Author:{" "}
                          {selectedBook.volumeInfo.authors
                            ?.slice(0, 1)
                            .join(", ") || "Unknown"}
                        </p>
                        <p className="font-bold text-md">
                          Subtitle:{" "}
                          {selectedBook.volumeInfo.subtitle?.slice(0, 3) ||
                            "No subtitle available"}
                        </p>
                        <div className="flex gap-5 mt-2">
                          <button
                            className="flex items-center gap-1 px-5 py-2 text-black bg-white border border-white rounded-md y-2"
                            onClick={() =>
                              handleReadClick(
                                selectedBook.volumeInfo.previewLink
                              )
                            }
                          >
                            {icons.read}
                            <span className="font-bold">Read</span>
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="font-bold text-md">
                          Publisher:{" "}
                          {selectedBook.volumeInfo.publisher?.slice(0, 6) ||
                            "Unknown publisher"}
                        </p>
                        <p className="font-semibold text-md">
                          Published Date:{" "}
                          {selectedBook.volumeInfo.publishedDate ||
                            "Unknown date"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="py-4 text-white">
                  {selectedBook.volumeInfo.description
                    ? selectedBook.volumeInfo.description
                        .split(" ")
                        .slice(0, 35)
                        .join(" ") + "..."
                    : "No description available."}
                </p>
                <div className="flex justify-start">
                  <div className="flex gap-4">
                    {/* <Button
                      borderRadius="0.25rem"
                      className="p-2 text-lg font-bold text-white rounded-md bg-DarkColor border-theme-dark-Blue hover:bg-theme-dark-Blue dark:border-slate-800"
                    >
                      <i className="fas fa-save"></i> {icons.save}
                    </Button> */}
                    <Button
                      borderRadius="0.5rem"
                      className="p-2 text-lg font-bold text-white rounded-md bg-DarkColor border-theme-dark-Blue hover:bg-theme-dark-Blue dark:border-slate-800"
                      onClick={() =>
                        handledownloadClick(
                          selectedBook.accessInfo.pdf.acsTokenLink
                        )
                      }
                    >
                      <i className="fas fa-download"></i> {icons.download}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Book;

const icons = {
  read: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
    </svg>
  ),
  save: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-bookmarks"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z" />
      <path d="M11 3h5a3 3 0 0 1 3 3v11" />
    </svg>
  ),
  download: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-download"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
      <path d="M7 11l5 5l5 -5" />
      <path d="M12 4l0 12" />
    </svg>
  ),
  close: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-x"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  ),
};

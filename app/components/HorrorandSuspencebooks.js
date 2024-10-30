'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Book from './Book'
import BorderButton from "./BorderButton"

const HorrorandSuspencebooks = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/books/v1/volumes?q=subject:horror&key=AIzaSyB6s4PRzuJpFDyQyUcJBU50acNxsa_r_LE'
        )
        setBooks(response.data.items)
      } catch (error) {
        console.error('Error fetching the books', error)
      }
    }
  
    fetchBooks()
  }, [])
  

  return (
    <div className=''>
      <h1 className="my-16 ml-10 text-2xl text-white font-Lora"><span className="underline decoration-theme-dark-Blue underline-offset-8">Horror and Suspence</span></h1>
      <Book books={books} />
      <BorderButton link="/Horror" />
    </div>
  )
}

export default HorrorandSuspencebooks

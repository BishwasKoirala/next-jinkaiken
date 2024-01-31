"use client";
import { useState, useEffect } from "react";

export const LoadBooks = () => {
  const [books, setBooks] = useState<{ id: string; title: string }[]>([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/api/frontFetch/fetchAllBooks");
      const data = await response.json();
      setBooks(data);
      console.log('data',data)
    };
    fetchBooks();
  }, []);

  return books;
};

"use client";
import { useState, useEffect } from "react";

export const LoadBooks = () => {
  const [books, setBooks] = useState<{ id: string; title: string }[]>([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/api/frontFetch/burrowBookList");
      const data = await response.json();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return books;
};

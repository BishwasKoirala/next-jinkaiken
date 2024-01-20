"use client";
import { useState, useEffect } from "react";

interface Books {
  id: number;
  studentId: string;
  bookId: string;
  returned_at: Date;
}

export const FetchMyRecords = (studenId : string) => {
  const [books, setBooks] = useState<Books[]>([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/api/frontFetch/returnBookList/"+studenId);
      const data = await response.json();
      setBooks(data);
      console.log("data", data);
    };
    fetchBooks();
  }, []);

  return books;
};

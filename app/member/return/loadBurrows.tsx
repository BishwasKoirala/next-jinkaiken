"use client";
import { useState, useEffect } from "react";

interface Books {
  id: number;
  studentId: string;
  bookId: string;
  returned_at: Date;
}

interface Props {
  studentId : string
}

 const LoadBurrows = ({studentId} : Props) => {
  const [books, setBooks] = useState<Books[]>([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        "/api/frontFetch/returnBookList/" + studentId
      );
      const data = await response.json();
      setBooks(data);
      console.log("data", data);
    };
    fetchBooks();
  }, []);

  return (
    <div className="grid place-items-center pb-16 text-gray-500 text-lg">
      {books.map((book) => (
        <p key={book.id}>{book.id}</p>
      ))}
    </div>
  );
};

export default LoadBurrows

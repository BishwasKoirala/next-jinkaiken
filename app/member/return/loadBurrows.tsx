"use client";
import { useState, useEffect } from "react";

interface Books {
  id: number;
  studentId: string;
  bookId: string;
  burrowed_at: Date;
  bookTitle: string;
  // think smth better than any
  returned: any;
}

interface Props {
  studentId: string;
}

const LoadBurrows = ({ studentId }: Props) => {
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

  const handleReturn = async (id: number) => {
    const stringId = id.toString();
    // put req to return
    // sets {returned : true} in BookRecords
    const response = await fetch(`/api/bookTransaction/return/${stringId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      alert("error");
    } else {
      const updatedBooks = books.map((book) =>
        book.id === id ? { ...book, returned: "True" } : book
      );
      setBooks(updatedBooks)
    }
  };

  return (
    <div className="grid place-items-center pb-16 text-gray-500 text-lg">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student ID</th>
            <th>Book ID</th>
            <th>Borrowed At</th>
            <th>Book Title</th>
            <th>returned?</th>
            {/* <th>.....</th> */}
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.studentId}</td>
              <td>{book.bookId}</td>
              <td>{new Date(book.burrowed_at).toLocaleDateString()}</td>
              <td>{book.bookTitle}</td>
              <td>{book.returned}</td>

              <td>
                <button
                  className="btn bg-blue-400"
                  onClick={() => handleReturn(book.id)}
                >
                  return
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoadBurrows;

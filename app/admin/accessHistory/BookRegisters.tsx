import React, { useEffect, useState } from "react";

interface RegisteredBooks {
  id: string;
  isbn13: number;
  isbn10: null;
  title: string;
  author: string;
  rentable: string;
  registered_at: string;
}

const BookRegisters = () => {
  const [registeredBooks, setRegisteredBooks] = useState<RegisteredBooks[]>([]);

  useEffect(() => {
    const fetchRegisteredBooks = async () => {
      const response = await fetch(
        "http://localhost:3000/api/admin/accessHistory/registeredBooks"
      );

      const data = await response.json();
      console.log(data);
      setRegisteredBooks(data);
    };

    fetchRegisteredBooks();
  }, []);

  if (registeredBooks.length === 0) {
    return <div className="text-black">No any Books Registered</div>;
  }

  return
  <div>
    <table>
        <thead className="text-lg">
          <tr>
            <th className="text-black">ID</th>
            <th className="text-black">Title</th>
            <th className="text-black">Burrowed_at</th>
            <th className="text-black">Returned_at</th>
          </tr>
        </thead>
        <tbody className="table-auto table-row-group">
          {history.map((hist) => (
            <tr key={hist.id}>
              <td>{hist.id}</td>
              <td>{hist.bookTitle}</td>
              <td>{new Date(hist.burrowed_at).toLocaleDateString()}</td>
              <td>
                {hist.returned_at ? (
                  new Date(hist.returned_at).toLocaleDateString()
                ) : (
                  <span className="text-red-600">NotReturned</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  </div>;
};

export default BookRegisters;

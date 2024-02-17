import React, { useEffect, useState } from "react";

interface Books {
  id: string;
  isbn13: number;
  isbn10: null;
  title: string;
  authors: string;
  rentable: string;
  registered_at: string;
}

const RegisteredBooks = () => {
  const [registeredBooks, setRegisteredBooks] = useState<Books[]>([]);

  useEffect(() => {
    const fetchRegisteredBooks = async () => {
      const response = await fetch(
        "http://localhost:3000/api/admin/accessHistory/registeredBooks"
      );

      const data = await response.json();
      // console.log(data);
      setRegisteredBooks(data);
      // console.log(registeredBooks);
    };

    fetchRegisteredBooks();
  }, []);
  console.log(registeredBooks);

  if (registeredBooks.length === 0) {
    return <div className="text-black">No any Books Registered</div>;
  }

  return (
    <div>
      <br />
      <div className="text-2xl text-black">書籍登録履歴</div>
      <div className="grid place-items-center pb-16 text-gray-500 text-lg table table-zebra-zebra overflow-x-auto border">
        <table>
          <thead className="text-lg">
            <tr className="border-y-gray-500">
              <th className="text-black">ID</th>
              <th className="text-black">Isbn13</th>
              <th className="text-black">Title</th>
              <th className="text-black">Author</th>
              {/* <th className="text-black">rentable</th> */}
              <th className="text-black">Registered_At</th>
            </tr>
          </thead>
          <tbody className="table-auto table-row-group">
            {registeredBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.isbn13}</td>
                <td>{book.title}</td>
                <td>{book.authors}</td>
                {/* <td>{book.rentable}</td> */}
                <td>{new Date(book.registered_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredBooks;

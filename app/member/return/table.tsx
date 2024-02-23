"use client";
import { getBorrowedBooks, returnBook } from "@/app/api-client/member/books";
import { useMutation, useQuery } from "@tanstack/react-query";

interface Books {
  id: number;
  studentId: string;
  bookId: string;
  burrowed_at: Date;
  bookTitle: string;
  // think smth better than string
  returned: string;
}

interface Props {
  studentId: string;
}

const Table = ({ studentId }: Props) => {
  const { data: borrowedBooks, refetch: refetchBorrowedBooks } = useQuery<
    Books[]
  >({
    queryKey: ["borrowed-books", studentId],
    queryFn: () => getBorrowedBooks(studentId),
  });

  const {
    mutate: returnBookMutation,
    isSuccess: isReturnSuccess,
    isError: isReturnError,
  } = useMutation({
    mutationFn: returnBook,
  });

  const handleReturn = async (id: number) => {
    const bookId = id.toString();
    // put req to return
    // sets {returned : true} in BookRecords
    returnBookMutation(bookId);

    if (isReturnSuccess) {
      refetchBorrowedBooks();
    }

    if (isReturnError) {
      alert("error");
    }
  };
  if (!borrowedBooks || borrowedBooks.length === 0)
    return (
      <div className="alert bg-green-500 text-black ">No Borrowed Books</div>
    );

  return (
    <div className="grid place-items-center pb-16 text-gray-500 text-lg table table-zebra-zebra overflow-x-auto">
      <table>
        <thead className="text-lg">
          <tr>
            <th className="text-black">ID</th>
            {/* <th className="text-black">Student ID</th> */}
            {/* <th>Book ID</th> */}
            <th className="text-black">Borrowed At</th>
            <th className="text-black">Book Title</th>
            <th className="text-black">returned?</th>
            {/* <th>.....</th> */}
          </tr>
        </thead>
        <tbody className="table-auto table-row-group">
          {borrowedBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              {/* <td>{book.studentId}</td> */}
              {/* <td>{book.bookId}</td> */}
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
        {(!borrowedBooks || borrowedBooks.length === 0) && (
          <div className="alert bg-red-300">No Books to Return</div>
        )}
      </table>
    </div>
  );
};

export default Table;

"use client";
import { getBorrowedBooks, returnBook } from "@/app/api-client/member/books";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FaSync, FaSyncAlt } from "react-icons/fa";

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
  const {
    data: borrowedBooks,
    refetch: refetchBorrowedBooks,
    isSuccess,
    isLoading,
  } = useQuery<Books[]>({
    queryKey: ["borrowed-books", studentId],
    queryFn: () => getBorrowedBooks(studentId),
  });

  const { mutate: returnBookMutation } = useMutation({
    mutationFn: returnBook,
    onSuccess: () => {
      refetchBorrowedBooks();
    },
    onError: (error) => {
      console.log("Failed to return book", error);
    },
  });

  const handleReturn = (id: number) => {
    const bookId = id.toString();
    // sets {returned : true} in BookRecords
    returnBookMutation(bookId);
  };

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
          {borrowedBooks &&
            borrowedBooks.map((book) => (
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
      </table>
      {isLoading && <FaSyncAlt className="animate-spin m-3" size={26} />}
      {isSuccess && (!borrowedBooks || borrowedBooks.length === 0) && (
        <div className="alert bg-red-300">No Books to Return</div>
      )}
    </div>
  );
};

export default Table;

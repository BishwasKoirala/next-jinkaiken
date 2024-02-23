"use client";

import { fetchTransactions } from "@/app/api-client/member/books";
import { useQuery } from "@tanstack/react-query";

interface TransactionHistory {
  id: number;
  studentId: string;
  bookId: string;
  burrowed_at: Date;
  returned_at: Date;
  bookTitle: string;
  // think smth better than string
  returned: string;
}

interface Props {
  studentId: string;
}

const GetHistory = ({ studentId }: Props) => {
  const { data: history } = useQuery<TransactionHistory[]>({
    queryKey: ["transactions", studentId],
    queryFn: () => fetchTransactions(studentId),
  });

  return (
    <div className="grid place-items-center pb-16 text-gray-500 text-lg table table-zebra-zebra overflow-x-auto">
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
          {history &&
            history.map((hist) => (
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
      {(!history || history.length === 0) && (
        <div className="alert bg-green-600 text-black">NO history</div>
      )}
    </div>
  );
};

export default GetHistory;

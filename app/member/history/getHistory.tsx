"use client";

import { UnderDevelopmentAlert } from "@/app/components/underDevelopmentAlert";
import { useEffect, useState } from "react";

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
  const [history, setHistory] = useState<TransactionHistory[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const response = await fetch(
        `/api/bookTransaction/userHistory/${studentId}`
      );
      const data = await response.json();
      console.log(data);
      setHistory(data);
    };

    if (studentId) {
      fetchHistory();
    }
    // fetch it in sync to studentId props everytime it changes
  }, [studentId]);

  return (
    <div>
      <UnderDevelopmentAlert />
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
            {history.map((hist) => (
              <tr key={hist.id}>
                <td>{hist.id}</td>
                <td>{hist.bookTitle}</td>
                <td>{new Date(hist.burrowed_at).toLocaleDateString()}</td>
                <td>{new Date(hist.returned_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetHistory;

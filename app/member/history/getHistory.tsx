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
    };
    if (studentId) {
      fetchHistory();
    }
    // fetch it in sync to studentId props everytime it changes
  }, [studentId]);

  return (
    <div>
      <UnderDevelopmentAlert />
    </div>
  );
};

export default GetHistory;

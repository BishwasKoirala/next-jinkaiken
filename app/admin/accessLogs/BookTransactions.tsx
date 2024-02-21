import React, { useEffect, useState } from "react";

interface Transactions {
  id: number;
  studentId: string;
  studentName : string
  book: string;
  returned: boolean;
  burrowed_at: string;
  returned_at: string;
}

const BookTransactions = () => {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch(
        "/api/admin/accessHistory/transactions"
      );

      const data = await response.json();
      setTransactions(data);
    };

    fetchTransactions();
  }, []);
  console.log(transactions);

  if (transactions.length === 0) {
    return <div className="text-balack">No any BookTransactions</div>;
  }

  return (
    <div>
      <br />
      <div className="text-2xl text-black">本の貸借ログ</div>
      <div className="grid place-items-center pb-16 text-gray-500 text-lg table table-zebra-zebra overflow-x-auto border">
        <table>
          <thead className="text-lg">
            <tr className="border-y-gray-500">
              <th className="text-black">ID</th>
              <th className="text-black">Student</th>
              <th className="text-black">Book</th>
              <th className="text-black">Burrowed At</th>
              <th className="text-black">Is Returned</th>
              <th className="text-black">Returned At</th>
            </tr>
          </thead>
          <tbody className="table-auto table-row-group">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.studentName}</td>
                <td>{transaction.book}</td>
                <td>{new Date(transaction.burrowed_at).toLocaleDateString()}</td>
                <td>{transaction.returned ? (<span className="text-blue-600">True</span>) : ( <span className="text-red-600">False</span> ) }</td>
                <td>{new Date(transaction.returned_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookTransactions;

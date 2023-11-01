// pages/book-records.tsx
'use client'
import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

interface BookRecord {
  id: number;
  name: string;
  book: string;
  rentOrReturn: string;
  date: string;
}

const BookRecordsPage: React.FC = () => {
  const [bookRecords, setBookRecords] = useState<BookRecord[]>([]);
  const table = 'rentReturn';

  const fetchData = async () => {
    const supabase = createClient('https://ivoaofipzllrsyzymtha.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2b2FvZmlwemxscnN5enltdGhhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzYyMjcxOCwiZXhwIjoyMDEzMTk4NzE4fQ.ohmO9rBGH5H31wvD9TmHxzln7g9M5COWTQGpCZE1-QY');
    const { data, error } = await supabase.from(table).select('*');
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      setBookRecords(data as BookRecord[]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='m-3.5 font-light '>
      <h1 className=" text-center p-2 text-xl">部内の本の貸借り記録</h1>
      <table className='table table-zebra text-left text-amber-200 '>
        <thead className=' '>
          <tr>
            <th className='text-white'>番号</th>
            <th className='text-white'>名前</th>
            <th className='text-white'>本</th>
            <th className='text-white'>貸し借り</th>
            <th className='text-white'>日付</th>
          </tr>
        </thead>
        <tbody>
          {bookRecords.map((record: BookRecord, index: number) => (
            <tr key={index}>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>{record.book}</td>
              <td>{record.rentOrReturn}</td>
              <td>{record.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookRecordsPage;

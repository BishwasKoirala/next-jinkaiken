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
    const supabase = createClient('https://pfhlnesmvkbnirnizupx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmaGxuZXNtdmtibmlybml6dXB4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTU5ODEzNiwiZXhwIjoyMDE1MTc0MTM2fQ.b137OizlMLvfrC2JFxTeOdzkom7Iqe6hUdPnQ8Em9JI');
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
      <h1 className=" text-center text-cyan-300 p-2 text-xl bg-gray-800">部内の本の貸借り記録</h1>
      <table className='table table-zebra text-left text-amber-200 '>
        <thead className=' text-xl'>
          <tr className=''>
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

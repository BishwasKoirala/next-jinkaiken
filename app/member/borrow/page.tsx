"use client";

import React, { useState, FormEvent, useEffect } from "react";
import { UnderDevelopmentAlert } from "@/app/components/underDevelopmentAlert";

interface FormData {
  studentId: string;
  isbn: string;
  bookName: string;
  rentStatus: string;
}

 // getting booknames and use it in select optn
 const loadBooks = () =>{
  const [books , setBooks] = useState<{id :string , title : string}[]>([])
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('/api/frontFetch/burrowFormBookList')
      const data = await response.json()
      setBooks(data)
    };
      fetchBooks();
    },[] )

  return books
}

const RentReturnForm = () => {
  const [formdata, setFormData] = useState<FormData>({
    studentId: "",
    isbn: "",
    bookName: "",
    rentStatus: "",
  });

  let test = [{id : "asf", title : "jhkadfh"},{id : 'wasdf' , title : 'hakjdshfkaj'}]

  const books = loadBooks()


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/rentReturn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("registration Success !!!", data);
    } else {
      console.log("Failed registration !!!", data);
    }
  };

  // load options
  const options : JSX.Element[] = [];
  books.forEach(book => (
    options.push(<option key={book.id} value={book.id}> {book.title} </option>)
  ))


  return (
    <div className="grid place-items-center pb-16 text-gray-500 text-lg">
      <UnderDevelopmentAlert />
      <form onSubmit={handleSubmit}>
        <div className="py-2">
          <label htmlFor="studentId">学籍番号</label>
          <input
            id="studentId"
            name="studentId"
            type="text"
            className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
          />
        </div>
        <div className="py-2">
          <label htmlFor="bookName">本のタイトル</label>
          <select
            name="bookName"
            id="bookName"
            value={formdata.bookName}
            className="select select-bordered w-full max-w-xs align-middle"
            onChange={handleChange}
          >
            <option>本を選択</option>
            {options}
          </select>

        </div>
        <div className="py-2">
          <label htmlFor="rentStatus">拝借？返却？</label>
          <select
            name="rentStatus"
            id="rentStatus"
            value={formdata.rentStatus}
            className="select select-bordered w-full max-w-xs"
            onChange={handleChange}
          >
            <option value="">借りるか返すか</option>
            <option value="借">借</option>
            <option value="返">返</option>
          </select>
        </div>
        <div className="py-4 grid grid-cols-2 gap-2">
          <button type="reset" className="btn">
            リセット
          </button>
          <button type="submit" className="btn btn-primary">
            送信
          </button>
        </div>
      </form>
    </div>
  );
};

export default RentReturnForm;

"use client";
import React, { useState, FormEvent } from "react";

interface FormData {
  studentId: string;
  isbn: string;
  bookName: string;
  rentStatus: string;
}

const RentReturnForm = () => {
  const [formdata, setFormData] = useState<FormData>({
    studentId: "",
    isbn:"",
    bookName: "",
    rentStatus: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
  return (

    
    <>
      <div className="p-4 text-xl">
        <p>本の貸し借り登録の機能はまだ開発中です</p>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="studentId">学籍番号</label>
          <br />
          <input
            type="text"
            name="studentId"
            id="studentId"
            placeholder="200000000"
            onChange={handleChange}
          />
          <br />

          <label htmlFor="bookName">本のタイトル</label>
          <br />
          <input
            type="text"
            name="bookName"
            id="bookName"
            placeholder="本のタイトルを入力"
            onChange={handleChange}
          />
          <br />

          <label htmlFor="rentStatus">拝借？返却？</label>
          <br />
          <select name="rentStatus" id="rentStatus" value={formdata.rentStatus} onChange={handleChange}>
            <option value="">借りるか返すか</option>
            <option value="借">借</option>
            <option value="返">返</option>
          </select>

          <br />
          <br />
          <button type="reset" className="btn bg-red-600 mr-5 text-black">
            RESET
          </button>
          <button type="submit" className=" text-black btn bg-green-600">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default RentReturnForm;

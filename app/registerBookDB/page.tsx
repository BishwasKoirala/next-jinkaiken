"use client";
import React, { useState, FormEvent } from "react";

interface FormData {
  isbn13: string;

}


const RentReturnForm = () => {
  const [formdata, setFormData] = useState<FormData>({
    isbn13: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/registerBook", {
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
        <p>本をデータベース登録{"(開発中)"}</p>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="isbn13">ISBN13コード</label>
          <br />
          <input
            type="text"
            name="isbn13"
            id="isbn13"
            placeholder="12345678?"
            onChange={handleChange}
          />
          <br />
          <br />
          {/* <button className="btn bg-blue-600 text-black" onClick={fetchIsbn}>検索</button> */}
          <br />
          <br />
          <button type="reset" className="btn bg-red-600 mr-5 text-black">
            RESET
          </button>
          <button type="submit" className=" text-black btn bg-green-600">
            ・登録・
          </button>
        </form>
      </div>

      
    </>
  );
};

export default RentReturnForm;

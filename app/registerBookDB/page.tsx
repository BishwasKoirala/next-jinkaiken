"use client";
import React, { useState, FormEvent } from "react";
import { FilteredData } from "../api/getBooks/[theIsbn]/route";

interface FormData {
  isbn13: string;

}
// interface of the api for get googlebookapi



const RentReturnForm = () => {
  const [registeredData , setRegisteredData] = useState<FilteredData | null>(null);


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
      setRegisteredData(data)
      
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
          <button type="reset" className="btn bg-red-600 mr-5 text-black">
            RESET
          </button>
          <button type="submit" className=" text-black btn bg-green-600">
            ・登録・
          </button>
        </form>
        {registeredData ? 
          
          (<div className="pt-6">
            <h1 className="text-2xl">登録した情報</h1>
            <div>title : <span>{registeredData.title}</span> </div>
            <div>author : {registeredData.authors}</div>
            <div>id : {registeredData.id}</div>
            <div>isbn13 : {registeredData.isbn13}</div>
            <div>isbn10 : {registeredData.isbn10}</div>
          </div>)

          :

          (
            <div className="pt-5">登録が成功したら、内容が表示されます</div>
          )
          
         }

      </div>

      
    </>
  );
};

export default RentReturnForm;

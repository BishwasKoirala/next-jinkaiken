"use client";
import React, { useState, FormEvent } from "react";
import { FilteredData } from "../api/googleGetBookApi/[theIsbn]/route";

interface FormData {
  isbn13: string;
}

const RentReturnForm = () => {
  const [registeredData, setRegisteredData] = useState<FilteredData | null>(null);
  const [formData, setFormData] = useState<FormData>({ isbn13: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/registerBook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        console.error("Failed request", data);
        throw new Error(data.message || "Error registering book");
      }
      setRegisteredData(data);
      console.log("Request successful", data);
    } catch (error) {
      console.error(error);
      // Handle error state here
    }
  };

  const handleReset = () => {
    setFormData({ isbn13: "" });
    setRegisteredData(null);
  };

  return (
    <>
      <div className="p-4 text-xl">
        <p>本をデータベース登録{"(開発中)"}</p>
      </div>
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
        <button type="button" onClick={handleReset} className="btn bg-red-600 mr-5 text-black">
          RESET
        </button>
        <button type="submit" className="text-black btn bg-green-600">
          ・登録・
        </button>
      </form>
      {registeredData && !registeredData.errorcode && (
        <div className="pt-6">
          

          <p>title : <span className="text-red-500">{registeredData.title}</span></p>
          <p>authors : <span className="text-red-500">{registeredData.authors}</span></p>
          <p>id : {registeredData.id} </p>
          <p>isbn13 : {registeredData.isbn13} </p>
          <p>isbn10 : {registeredData.isbn10} </p>

        </div>
      )}
      {registeredData?.errorcode && (
        <div>
        <h3>ERROR : <span className="text-red-500">{registeredData.errorcode}</span></h3>
        <h3>Title : {registeredData.title}</h3>
        </div>
      )}
    </>
  );
};

export default RentReturnForm;
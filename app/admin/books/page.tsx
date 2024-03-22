"use client";
import React, { useState, FormEvent } from "react";

import { FilteredData } from "../../api/googleGetBookApi/[theIsbn]/route";
import { FaExclamationTriangle } from "react-icons/fa";
import { UnderDevelopmentAlert } from "@/app/components/underDevelopmentAlert";
import ManualBookForm from "./ManualBook";

interface FormData {
  isbn13: string;
}

const Books = () => {
  const [registeredData, setRegisteredData] = useState<FilteredData | null>(
    null
  );
  const [formData, setFormData] = useState<FormData>({ isbn13: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/v2/books/register", {
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
    <div className="grid place-items-center pb-16 text-gray-500 text-lg">
      <UnderDevelopmentAlert />
      <form onSubmit={handleSubmit}>
        <div className="py-2">
          <label htmlFor="isbn13">ISBN13コード</label>
          <input
            id="isbn13"
            name="isbn13"
            type="text"
            placeholder="12345678?"
            value={formData.isbn13}
            className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
          />
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
      {registeredData && !registeredData.errorcode && (
        <div className="pt-6">
          <p>
            title : <span className="text-red-500">{registeredData.title}</span>
          </p>
          <p>
            authors :{" "}
            <span className="text-red-500">{registeredData.authors}</span>
          </p>
          <p>id : {registeredData.id} </p>
          <p>isbn13 : {registeredData.isbn13} </p>
          <p>isbn10 : {registeredData.isbn10} </p>
        </div>
      )}
      {registeredData?.errorcode && (
        <div
          role="alert"
          className="flex justify-center alert alert-error text-gray-100"
        >
          <FaExclamationTriangle size={26} />
          <p>
            エラー
            <br />
            {registeredData.errorcode}
          </p>
        </div>
      )}

      <ManualBookForm />
    </div>
  );
};

export default Books;

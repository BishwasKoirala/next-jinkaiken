"use client";

import React, { useState, FormEvent } from "react";
import { UnderDevelopmentAlert } from "@/app/components/underDevelopmentAlert";
import { LoadBooks } from "./loadBooks";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  studentId: z
    .string()
    .min(9)
    .max(9, { message: "student ID must be 9 digits" }),
  bookId: z.string().min(1, { message: "select a book" }),
});

type FormData = z.infer<typeof schema>;

const RentReturnForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [registrationData, setRegistrationData] = useState<FormData | null>(
    null
  );
  // loads for select options booknames
  const books = LoadBooks();

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   setFormData({ ...formdata, [e.target.name]: e.target.value });
  // };

  const onSubmit = async (formData: FieldValues) => {
    const response = await fetch("/api/bookTransaction/burrow/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("registration Success !!!", data);
      setRegistrationData(data);
    } else {
      console.log("Failed registration !!!", data);
    }
  };
  console.log(registrationData);

  // load options to render as select book to rent
  const options: JSX.Element[] = [];
  books.forEach((book) =>
    options.push(
      <option className="w-2" key={book.id} value={book.id}>
        {book.title}
      </option>
    )
  );

  const theBurrowedBook = registrationData
    ? books.find((book) => book.id === registrationData.bookId)
    : null;

  return (
    <div className="grid place-items-center pb-16 text-gray-500 text-lg">
      <UnderDevelopmentAlert />
      {theBurrowedBook && (
        <div className=" justify-center alert my-2 text-gray-600 text-lg bg-green-200">
          <div className="text-blue-600">本を借りました</div>
          <div className="text-black">{theBurrowedBook.title}</div>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-2">
          <label htmlFor="studentId">学籍番号</label>
          <input
            {...register("studentId")}
            id="studentId"
            name="studentId"
            type="text"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.studentId && (
            <p className="text-red-600">{errors.studentId.message}</p>
          )}
        </div>
        <div className="py-2">
          <label htmlFor="bookName">本のタイトル</label>
          <br />
          <select
            {...register("bookId")}
            name="bookId"
            id="BookId"
            className="select select-bordered w-full max-w-xs align-middle"
          >
            <option value="">本を選択</option>
            {options}
          </select>
          {errors.bookId && (
            <p className="text-red-500">{errors.bookId.message}</p>
          )}
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

"use client";

import React from "react";
import { UnderDevelopmentAlert } from "@/app/components/underDevelopmentAlert";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { borrowBook, fetchBooks } from "@/app/api-client/member/books";
import { Book } from "@/app/types/book";

const schema = z.object({
  studentId: z
    .string()
    .min(9, { message: "学籍番号を9桁で入力" })
    .max(9, { message: "学籍番号を9桁で入力" }),
  bookId: z.string().min(1, { message: "本を選択してください" }),
});

type FormData = z.infer<typeof schema>;

const RentReturnForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // GET方法。GETはここですぐに実行
  const { data: availableBooks, refetch: refetchAvailableBooks } = useQuery<
    Book[]
  >({
    queryKey: ["books"],
    queryFn: () => fetchBooks(),
  });

  // POST方法。POSTはここで初期化
  const {
    mutate: borrowBookMutation,
    data: borrowedBook,
    isSuccess: isBorrowSuccess,
    isError: isBorrowError,
  } = useMutation({
    mutationFn: borrowBook,
  });

  const onSubmit = async (formData: FieldValues) => {
    borrowBookMutation(formData); // POSTをここで実行

    if (isBorrowSuccess) {
      console.log("registration Success !!!", borrowedBook);
      refetchAvailableBooks();
    }

    if (isBorrowError) {
      console.log("Failed registration !!!", borrowedBook);
    }
  };

  return (
    <div className="grid place-items-center pb-16 text-gray-500 text-lg">
      <UnderDevelopmentAlert />
      {borrowedBook && (
        <div className=" alert my-2 text-gray-600 text-lg bg-green-200">
          <div className="text-blue-600">本を借りました</div>
          <div className="text-black">{borrowedBook.title}</div>
          {/* FIXME: APIで本タイトル返してね */}
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
            <>
              {availableBooks &&
                availableBooks.forEach((book) => (
                  <option className="w-2" key={book.id} value={book.id}>
                    {book.title}
                  </option>
                ))}
            </>
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

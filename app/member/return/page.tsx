"use client";
import { UnderDevelopmentAlert } from "@/app/components/underDevelopmentAlert";
import Table from "./table";
import { useState } from "react";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// get the rented books of the student from StudentId

// load the books on the screen

// press button and do the returnwork

const schema = z.object({
  studentId: z
    .string()
    .min(9, { message: "学籍番号を9桁で入力" })
    .max(9, { message: "学籍番号を9桁で入力" }),
});

type FormData = z.infer<typeof schema>;

const Return = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [loadBooks, setLoadBooks] = useState<boolean>(false);
  const [studentId, setStudentId] = useState<string>("");

  const onSubmit = (formData: FieldValues) => {
    setStudentId(formData.studentId);
    setLoadBooks(true);
  };

  return (
    <div className="grid place-items-center pb-16 text-gray-500 text-lg">
      <UnderDevelopmentAlert />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="studentId" className="label-text text-xl">
          studentId
        </label>
        <br />
        {errors.studentId && (
          <p className="text-red-500">{errors.studentId.message}</p>
        )}
        <input
          {...register("studentId")}
          className="input input-bordered w-full max-w-xs"
          type="text"
        />

        <button type="submit" className="btn bg-blue-400 m-3">
          Load
        </button>
      </form>

      {loadBooks && <Table studentId={studentId} />}
    </div>
  );
};

export default Return;

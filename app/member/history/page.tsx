"use client";
import React, { FormEvent, useRef, useState } from "react";
import GetHistory from "./getHistory";
import { UnderDevelopmentAlert } from "@/app/components/underDevelopmentAlert";
import { z } from "zod";
import { FieldValues, FormState, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  studentId : z.string().min(9,{message : "mest be 9 digits"}).max(9 , {message : "must be 9 digits"})
})

type FormData = z.infer<typeof schema>

const History = () => {

  const {register , handleSubmit , formState : {errors}} = useForm<FormData>({
    resolver : zodResolver(schema)
  })



  const studentIdRef = useRef<HTMLInputElement>(null);
  const [studentIdInput, setStudentIdInput] = useState<string>("");
  const [loadHistory, setLoadHistory] = useState<boolean>(false);

  const onSubmit = (FormData: FieldValues) => {
    
      setStudentIdInput(FormData.studentId);
      setLoadHistory(true)
    
  };

  return (
    <div className="grid place-items-center pb-16 text-gray-500 text-lg">
      <UnderDevelopmentAlert />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="studenId" className="label-text text-xl">
          studentId
        </label>
        <br />
        {errors.studentId && ( <p className="text-red-500">{errors.studentId.message}</p> )}
        <input
          {...register('studentId')}
          className="input input-bordered w-full max-w-xs"
          type="text"
        />
        <br />
        <button type="submit" className="btn bg-blue-400 m-3">
          Load
        </button>
      </form>
      <GetHistory studentId={studentIdInput} />
    </div>
  );
};

export default History;

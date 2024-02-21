"use client";

import React, { FormEvent, useState } from "react";
// import schema from "@/app/api/registerMember/route";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema =  z.object({
  studentId : z.string().min(9).max(9),
  name: z.string(),
  email:z.string().email().endsWith('@jindai.jp', {message : " @jindai.jp の形にしてください"}),
  gakubu:z.string(),
  gakka:z.string(),
  phoneNum:z.string().min(11).max(11),
  password : z.string().min(5)
}) 

type FormData = z.infer<typeof schema>

export default function Page() {
  const {
    register ,
    handleSubmit,
    formState : {errors} 
  } = useForm<FormData>({resolver : zodResolver(schema)})

  const onSubmit = async (theData : FormData) => {
    const response = await fetch("/api/registerMember", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(theData),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("Registration successful", data);
      alert("Registration successful");
    } else {
      console.log("registration failed", data);
      alert("registration failed");
    }
  };
  return (
    <div className="grid place-items-center pb-16 text-gray-500 text-lg">
      {/* seted placeholder to textmiddle in global cdd */}
      <form 
      onSubmit={handleSubmit(onSubmit)}
      >
        <div className="py-2">
          <label htmlFor="studentId">学籍番号</label>
          <input
          {...register('studentId')}
            id="studentId"
            name="studentId"
            type="text"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.studentId && <p className="text-red-600">{errors.studentId.message}</p> }
        </div>
        <div className="py-2">
          <label htmlFor="name">名前</label>
          <br />
          <input
          {...register('name')}
            id="name"
            name="name"
            type="text"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p> }
        </div>
        <div className="py-2">
          <label htmlFor="email">神大メール</label>
          <input
          {...register('email')}
            id="email"
            name="email"
            type="email"
            placeholder="a112233445gx@jindai.jpの形"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && <p className="text-red-600">{errors.email.message}</p> }
        </div>
        <div className="py-2">
          <label htmlFor="gakubu">学部</label>
          <br />
          <input
          {...register('gakubu')}
            id="gakubu"
            name="gakubu"
            type="text"
            placeholder="〇〇学部"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.gakubu && <p className="text-red-600">{errors.gakubu.message}</p> }
        </div>
        <div className="py-2">
          <label htmlFor="gakka">学科</label>
          <br />
          <input
          {...register('gakka')}
            id="gakka"
            name="gakka"
            type="text"
            placeholder="〇〇学科"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.gakka && <p className="text-red-600">{errors.gakka.message}</p> }
        </div>
        <div className="py-2">
          <label htmlFor="phoneNum">電話番号</label>
          <input
          {...register('phoneNum')}
            id="phoneNum"
            name="phoneNum"
            type="text"
            placeholder="080-xxxx-xxxxの形"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.phoneNum && (
            <p className="text-red-600">{errors.phoneNum.message}</p>
          )}
        </div>
        <div className="py-2">
          <label htmlFor="password">パスワード</label>
          <input
          {...register('password')}
            id="password"
            type="password"
            name="password"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.password && <p className="text-red-600">{errors.password.message}</p> }
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
}

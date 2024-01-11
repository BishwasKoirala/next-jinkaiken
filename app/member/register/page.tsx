"use client";

import React, { FormEvent, useState } from "react";
interface FormData {
  studentId: string;
  name: string;
  email: string;
  password: string;
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    studentId: "",
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/registerMember", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
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
      <form onSubmit={handleSubmit}>
        <div className="py-2">
          <label htmlFor="studentId">学籍番号</label>
          <input
            id="studentId"
            name="studentId"
            type="text"
            className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
          />
        </div>
        <div className="py-2">
          <label htmlFor="name">名前</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="py-2">
          <label htmlFor="email">神大メール</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="a112233445gx@jindai.jpの形"
            className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
          />
        </div>
        <div className="py-2">
          <label htmlFor="gakubu">学部</label>
          <input
            id="gakubu"
            name="gakubu"
            type="text"
            placeholder="〇〇学部"
            className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
          />
        </div>
        <div className="py-2">
          <label htmlFor="gakka">学科</label>
          <input
            id="gakka"
            name="gakka"
            type="text"
            placeholder="〇〇学科"
            className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
          />
        </div>
        <div className="py-2">
          <label htmlFor="phoneNum">電話番号</label>
          <input
            id="phoneNum"
            name="phoneNum"
            type="text"
            placeholder="080-xxxx-xxxxの形"
            className="input input-bordered w-full max-w-xs"
            onChange={handleChange}
          />
        </div>
        <div className="py-2">
          <label htmlFor="password">パスワード</label>
          <input
            id="password"
            type="password"
            name="password"
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
    </div>
  );
}

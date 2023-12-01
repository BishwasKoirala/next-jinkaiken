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
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("Registration successful", data);
    } else {
      console.log("registration failed", data);
    }
  };
  return (
    <div className=" align-middle ">
      {/* seted placeholder to textmiddle in global cdd */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="studentId">学籍番号</label>
        <br />
        <input
          type="text"
          name="studentId"
          id="studentId"
          placeholder="学籍番号を入力"
          onChange={handleChange}
          className=" "
        />
        <br />

        <label htmlFor="name">名前</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="なまえを入力"
          onChange={handleChange}
          className=""
        />
        <br />
        <label htmlFor="email">神大メール</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="a112233445gx@jindai.jpの形"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="gakubu">学部</label>
        <br />
        <input
          type="text"
          name="gakubu"
          id="gakubu"
          placeholder="○○学部"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="gakka">学科</label>
        <br />
        <input
          type="text"
          name="gakka"
          id="gakka"
          placeholder="学科"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="phoneNum">電話番号</label>
        <br />
        <input
          type="text"
          name="phoneNum"
          id="phoneNum"
          placeholder="0x0xxxx xxxx"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="password">パスワード</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />

        <br />
        <br />
        <button type="reset" className="btn bg-red-600 mr-5 text-black">
          RESET
        </button>
        <button type="submit" className=" text-black btn bg-green-600">
          Submit
        </button>
      </form>
    </div>
  );
}

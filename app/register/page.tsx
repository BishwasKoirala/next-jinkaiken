"use client";
import { FormEvent } from "react";

export default function Page() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/register", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    // ...
  }

  return (
    <div className=" align-middle ">
      {/* seted placeholder to textmiddle in global cdd */}
      <form onSubmit={onSubmit}>
        <label htmlFor="studentId">学籍番号</label>
        <br />
        <input
          type="text"
          name="studenId"
          id="studenId"
          placeholder="学籍番号を入力"
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
        />
        <br />
        <label htmlFor="password">パスワード</label>
        <br />
        <input type="password" name="password" id="password" />
        

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

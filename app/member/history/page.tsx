"use client";
import React, { FormEvent, useRef, useState } from "react";
import GetHistory from "./getHistory";
import { UnderDevelopmentAlert } from "@/app/components/underDevelopmentAlert";

const History = () => {
  const studentIdRef = useRef<HTMLInputElement>(null);
  const [studentIdInput, setStudentIdInput] = useState<string>("");
  const [loadHistory, setLoadHistory] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const gotStudentId = studentIdRef.current?.value;
    if (gotStudentId) {
      setStudentIdInput(gotStudentId);
    }
  };

  return (
    <div className="grid place-items-center pb-16 text-gray-500 text-lg">
      <UnderDevelopmentAlert />
      <form onSubmit={handleSubmit}>
        <label htmlFor="studenId" className="label-text text-xl">
          studentId
        </label>
        <br />
        <input
          ref={studentIdRef}
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

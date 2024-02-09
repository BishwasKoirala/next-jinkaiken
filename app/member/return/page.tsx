"use client";
import { UnderDevelopmentAlert } from "@/app/components/underDevelopmentAlert";
import LoadBurrows from "./loadBurrows";
import { FormEvent, useRef, useState } from "react";
// get the rented books of the student from StudentId

// load the books on the screen

// press button and do the returnwork

const Return = () => {
  const studentIdRef = useRef<HTMLInputElement>(null);

  const [studentId, setStudentId] = useState<string>("");

  const [loadBooks, setLoadBooks] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const id = studentIdRef.current?.value;
    if (id) {
      setStudentId(id)
      setLoadBooks(true);
    }

  };

  return (
    <div className="grid place-items-center pb-16 text-gray-500 text-lg">
      <UnderDevelopmentAlert />
      <form onSubmit={handleSubmit}>
        <label htmlFor="studenId">studenId</label>
        <input
          ref={studentIdRef}
          className="input input-bordered w-full max-w-xs"
          type="text"
        />
        <button type="submit" className="btn bg-blue-400">
          Load
        </button>
      </form>

      {loadBooks && <LoadBurrows studentId={studentId} />}
    </div>
  );
};

export default Return;

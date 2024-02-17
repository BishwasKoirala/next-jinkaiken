"use client";
import { UnderDevelopmentAlert } from "@/app/components/underDevelopmentAlert";
import React from "react";
import RegisteredBooks from "./RegisteredBooks";
import RegisteredUsers from "./RegisteredUsers";
import BookTransactions from "./BookTransactions";

const page = () => {
  return (
    <div>
      <UnderDevelopmentAlert />
      < RegisteredBooks/>
      < RegisteredUsers />
      <BookTransactions />
    </div>
  );
};

export default page;

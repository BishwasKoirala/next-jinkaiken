"use client";
import { UnderDevelopmentAlert } from "@/app/components/underDevelopmentAlert";
import React from "react";
import RegisteredBooks from "./RegisteredBooks";
import RegisteredUsers from "./RegisteredUsers";

const page = () => {
  return (
    <div>
      <UnderDevelopmentAlert />
      < RegisteredBooks/>
      < RegisteredUsers />
    </div>
  );
};

export default page;

'use client'
import { UnderDevelopmentAlert } from "@/app/components/underDevelopmentAlert";
import React from "react";
import BookRegisters from "./BookRegisters";

const page = () => {
  return (
    <div>
      <UnderDevelopmentAlert />
      <BookRegisters />
    </div>
  );
};

export default page;

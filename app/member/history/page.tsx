"use client";
import React, { useState } from "react";
import Table from "./table";
import { UnderDevelopmentAlert } from "@/app/components/underDevelopmentAlert";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";

const History = () => {
  const session = useSession()
  

  return (
    <div className="grid place-items-center pb-16 text-gray-500 text-lg">
      <UnderDevelopmentAlert />
      {session.data && <Table studentId={session.data?.user.studentId} />}
      <div>以上</div>
    </div>
  );
};

export default History;

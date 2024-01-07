"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      window.location.href = "/member/borrow";
    }

    if (status === "unauthenticated") {
      window.location.href = "/api/auth/signin";
    }
  }, [status]);

  return <main className="text-center"></main>;
}

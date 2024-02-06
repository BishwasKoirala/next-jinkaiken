"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { status } = useSession();

  /**
   * Redirect to /member/borrow if authenticated
   * Redirect to /api/auth/signin if unauthenticated
   */

  while (status) {
    useEffect(() => {
      if (status === "authenticated") {
        window.location.href = "/member/borrow";
      }
      if (status === "unauthenticated") {
        window.location.href = "/welcome";
      }
    }, [status]);
  
    return <main className="text-center"></main>;
  }
  
}

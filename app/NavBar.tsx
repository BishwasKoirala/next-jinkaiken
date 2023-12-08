// when using reacthook or react components, use client
"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const NavBar = () => {
  
  const { status, data: session } = useSession();
  return (
    <div className=" bg-gray-500 p-3 text-lime-200">
      <Link href="/" className="p-3 mr-3 bg-gray-700">
        Home
      </Link>      

      <>{status === "loading" && <>Loading...</>}</>
      <span className=" ">
        {status === "authenticated" && (
          <>
            <Link href="/api/auth/signout" className="p-3 mr-3 bg-red-500">
              LogOut
            </Link>
            <span className=" p-3  bg-gray-600 font-extrabold">
              {session.user!.name}
            </span>
            
          </>
        )}
      </span>

      <>
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin" className="p-3 mr-1 bg-blue-700">
            Login
          </Link>
        )}
      </>
    </div>
  );
};

export default NavBar;

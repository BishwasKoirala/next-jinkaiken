// when using reacthook or react components, use client
"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import LinkButton from "./components/LinkButton";

const NavBar = () => {
  
  const { status, data: session } = useSession();
  
  return (
    <div className="flex justify-center bg-gray-800">
    <div className="flex justify-center items-center space-x-1 p-2 text-xl">
      <LinkButton href="/" intents="secondary">
        Home
      </LinkButton>  
        {status === "loading" ? 
        (<span>Loading...</span>)
        :  
        status === "authenticated" ? (
        <div className="flex items-center space-x-1">
          <span className="font-extrabold bg-gray-800 flex py-2 rounded-md px-4">
              {session.user!.name}
          </span>
          <LinkButton href="/api/auth/signout" intents="error">
            Logout
          </LinkButton>
        </div>
        )
        :
        (
          <LinkButton href="/api/auth/signin" intents="primary">
            Login
          </LinkButton>
        )
        }
    </div>
    </div>
    
  );
};

export default NavBar;

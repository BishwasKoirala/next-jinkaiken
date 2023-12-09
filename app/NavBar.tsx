// when using reacthook or react components, use client
"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const NavBar = () => {
  
  const { status, data: session } = useSession();




  
  return (
    <div className="flex justify-center bg-gray-500">
    <div className="flex justify-center items-center space-x-1 p-2 text-xl">
      <Link href="/" className="bg-gray-700 text-white py-2 px-4 rounded-md">
        Home
      </Link>      
        
        {status === "loading" ? 
        (<span>Loading...</span>)
        :  
        status === "authenticated" ? (
        <div className="flex items-center space-x-1">
          <span className="font-extrabold bg-gray-800 flex py-2 rounded-md px-4">
              {session.user!.name}
          </span>
            <Link href="/api/auth/signout">
              <div className="bg-red-500 text-white py-2 px-4 rounded-md">
              LogOut
              </div>
            </Link>
        </div>
        )
        : 
        (
        
          <Link href="/api/auth/signin" >
            <div className="bg-blue-700 text-white py-2 px-4 rounded-md">
            Login
            </div>
          </Link>
        )
        }
    </div>
    </div>
    
  );
};

export default NavBar;

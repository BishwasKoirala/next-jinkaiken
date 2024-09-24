"use client";
import React from "react";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession(); // Destructure data and status

  if (status === "loading") {
    return (
      <div className="navbar bg-base-100 text-gray-700 link-primary">
        <div className="flex-1">
          <a href="/" className="text-xl font-semibold">
            神奈川大学会計学研究部{" "}
            <span className="text-sky-800">🏠︎ Home</span>
          </a>
        </div>
        <div className="dropdown dropdown-end ">
          <div tabIndex={0} role="button" className="btn bg-zinc-400">
            <div className="w-full">loading</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar bg-base-100 text-gray-700 link-primary">
      <div className="flex-1">
        <a href="/" className="text-xl font-semibold">
          神奈川大学会計学研究部 <span className="text-sky-800">🏠︎ Home</span>
        </a>
      </div>
      {session ? (
        <div className="dropdown dropdown-end ">
          <div tabIndex={0} role="button" className="btn bg-green-500">
            {session && <div className="w-full">👤:{session.user?.name}</div>}
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li className="text-red-500">
              <a href="/api/auth/signout">Logout</a>
            </li>
          </ul>
        </div>
      ) : (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn bg-blue-500">
            <div className="w-full"><a href="/api/auth/signin">ログイン</a></div>
          </div>
          {/* <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li className="text-red-500">
              <a href="/api/auth/signin">ログイン</a>
            </li>
          </ul> */}
        </div>
      )}
    </div>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Header() {
  return (
    <div className="navbar bg-base-100 text-gray-700 link-primary">
      <div className="flex-1">
        <a href="/" className="text-xl font-semibold">
          神奈川大学会計学研究部 <span className="text-sky-800">🏠︎Home</span>
        </a>
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <Image
              alt="profile picture"
              src="https://picsum.photos/id/237/200"
              width={30}
              height={30}
            />
          </div>
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
    </div>
  );
}

// when using reacthook or react components, use client
"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

import { useSession } from "next-auth/react";
import {
  FaArrowRotateLeft,
  FaBook,
  FaBookOpenReader,
  FaWrench,
} from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const BottomNavbar = () => {
  const { status, data: session } = useSession();

  const searchParams = useSearchParams();

  return (
    <>
      {searchParams.get("tab") !== "admin" && (
        <div className="btm-nav">
          <button className="text-blue-400">
            <FaBookOpenReader />
            <span className="btm-nav-label">本を借りる</span>
          </button>
          <button className="active text-pink-400">
            <FaArrowRotateLeft />
            <span className="btm-nav-label">本を返す</span>
          </button>
          <button className="text-orange-400">
            <FaHistory />
            <span className="btm-nav-label">履歴</span>
          </button>
        </div>
      )}
      {searchParams.get("tab") === "admin" && (
        <div className="btm-nav">
          <button className="text-blue-400">
            <FaBook />
            <span className="btm-nav-label">本を登録</span>
          </button>
          <button className="active text-pink-400">
            <FaWrench />
            <span className="btm-nav-label">設定</span>
          </button>
        </div>
      )}
    </>
  );
};

export default BottomNavbar;

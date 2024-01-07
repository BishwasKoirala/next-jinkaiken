// when using reacthook or react components, use client
"use client";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { useSession } from "next-auth/react";
import {
  FaArrowRotateLeft,
  FaBook,
  FaBookOpenReader,
  FaWrench,
} from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import clsx from "clsx";

const BottomNavbar = () => {
  const { status, data: session } = useSession();

  const searchParams = useSearchParams();

  const pathname = usePathname();

  return (
    <>
      {searchParams.get("tab") !== "admin" && (
        <div className="btm-nav">
          <a
            href="/member/borrow"
            className={clsx("text-gray-500", {
              active: pathname === "/member/borrow",
            })}
          >
            <FaBookOpenReader />
            <span className="btm-nav-label">本を借りる</span>
          </a>
          <a
            href="/member/return"
            className={clsx("text-gray-500", {
              active: pathname === "/member/return",
            })}
          >
            <FaArrowRotateLeft />
            <span className="btm-nav-label">本を返す</span>
          </a>
          <a
            href="/member/history"
            className={clsx("text-gray-500", {
              active: pathname === "/member/history",
            })}
          >
            <FaHistory />
            <span className="btm-nav-label">履歴</span>
          </a>
        </div>
      )}
      {searchParams.get("tab") === "admin" && (
        <div className="btm-nav">
          <a
            href="/admin/books?tab=admin"
            className={clsx("text-gray-500", {
              active: pathname === "/admin/books",
            })}
          >
            <FaBook />
            <span className="btm-nav-label">本の管理</span>
          </a>
          <a
            href="/admin/settings?tab=admin"
            className={clsx("text-gray-500", {
              active: pathname === "/admin/settings",
            })}
          >
            <FaWrench />
            <span className="btm-nav-label">設定</span>
          </a>
        </div>
      )}
    </>
  );
};

export default BottomNavbar;

// when using reacthook or react components, use client
"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import clsx from "clsx";

const NavBar = () => {
  const { status, data: session } = useSession();

  const searchParams = useSearchParams();

  return (
    <>
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-2xl text-gray-600">
          神奈川大学会計学研究部
        </a>
      </div>
      <div role="tablist" className="tabs tabs-lifted tabs-lg">
        <a
          href="/"
          role="tab"
          className={clsx("tab", {
            "tab-active": searchParams.get("tab") !== "admin",
          })}
        >
          メンバー
        </a>
        <a
          href="/?tab=admin"
          role="tab"
          className={clsx("tab", {
            "tab-active": searchParams.get("tab") === "admin",
          })}
        >
          管理者
        </a>
      </div>
    </>
  );
};

export default NavBar;

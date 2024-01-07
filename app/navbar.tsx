// when using reacthook or react components, use client
"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import clsx from "clsx";
import Header from "./header";

const NavBar = () => {
  const { status, data: session } = useSession();

  const searchParams = useSearchParams();

  return (
    <>
      <Header />
      <nav role="tablist" className="tabs tabs-lifted tabs-lg">
        <a
          href="/member/borrow"
          role="tab"
          className={clsx("tab", {
            "tab-active": searchParams.get("tab") !== "admin",
          })}
        >
          メンバー
        </a>
        <a
          href="/admin/books?tab=admin"
          role="tab"
          className={clsx("tab", {
            "tab-active": searchParams.get("tab") === "admin",
          })}
        >
          管理者
        </a>
      </nav>
    </>
  );
};

export default NavBar;

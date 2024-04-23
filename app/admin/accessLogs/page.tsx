// Use 'use client' if you're in a Next.js environment or similar that supports it
'use client';
import React, { useState } from "react";
import { UnderDevelopmentAlert } from "@/app/components/underDevelopmentAlert";
import RegisteredBooks from "./RegisteredBooks";
import RegisteredUsers from "./RegisteredUsers";
import BookTransactions from "./BookTransactions";
import { useSession } from "next-auth/react";
import Link from "next/link";

// Define a type for the active page state
type ActivePage = "bookTransactions" | "registeredBooks" | "registeredUsers" | null;

const Page: React.FC = () => {
// only return those data when users are logged in
  const {status , data : session} = useSession()

  // State to track the current active log page with TypeScript type
  const [activePage, setActivePage] = useState<ActivePage>(null);

  // Function to set the active log page with parameter type annotation
  const handleButtonClick = (page: ActivePage) => {
    setActivePage(page);
  };
  

  return (
    <div className="text-black">
      {status === "authenticated" ? (

        <div>
      <UnderDevelopmentAlert />
      <button className="btn m-1" onClick={() => handleButtonClick("bookTransactions")}>本の貸借ログ</button><br />
      <button className="btn m-1" onClick={() => handleButtonClick("registeredBooks")}>書籍登録ログ</button><br />
      <button className="btn m-1" onClick={() => handleButtonClick("registeredUsers")}>ユーザー登録ログ</button><br />
      
      {/* Render pages based on the activePage state */}
      {activePage === "bookTransactions" && <BookTransactions />}
      {activePage === "registeredBooks" && <RegisteredBooks />}
      {activePage === "registeredUsers" && <RegisteredUsers />}

      </div>
      ) 
       : <div className="text-red-500 text-xl p-4">ここはログインが必要だ , <span className="text-blue-500 text-center" ><Link href="/">HOME</Link></span> ボタンからログインしてください</div>
      }
    </div>
  );
};

export default Page;

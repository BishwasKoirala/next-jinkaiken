'use client'
import React, { useState } from "react";
import Link from "next/link";

const LinkList = () => {
  // const [bookLinks , setBookLinks] = useState(-1) make code better please!!

  return (
    <div className="mt-3 bg-gray-800 p-4 text-white ">
      <ol className="list-none p-0 m-0 text-2xl">
        <li className="mb-2 pl-5 hover:bg-blue-900 bg-gray-700"><Link href="/rentReturn" >本の借/返</Link></li>
        {/* <li className="mb-2 pl-5 hover:bg-blue-700 bg-gray-700"><Link href="/register">会員登録</Link></li> */}
        <li className="mb-2 pl-5 hover:bg-blue-700 bg-gray-700 "><Link href="/bookRecords">本の貸し借り履歴</Link></li>
        <li className="mb-2 pl-5 hover:bg-blue-700 bg-gray-700 "><Link href="/registerBookDB">本をデータベースに登録</Link></li>
      </ol>
    </div>
  );
};

export default LinkList;

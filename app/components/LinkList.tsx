import React from "react";
import Link from "next/link";

const LinkList = () => {
  return (
    <div className="mt-3 bg-gray-800 p-4 text-white ">
      <ol className="list-none p-0 m-0 text-2xl">
        <li className="mb-2 pl-5"><Link href="/rentReturn" >本の借/返</Link></li>
        <li className="mb-2 pl-5">会員登録</li>
        <li className="mb-2 pl-5">本の貸し借り履歴</li>
      </ol>
    </div>
  );
};

export default LinkList;

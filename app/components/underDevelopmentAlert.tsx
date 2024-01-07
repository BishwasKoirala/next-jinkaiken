import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

export const UnderDevelopmentAlert = () => {
  return (
    <div
      role="alert"
      className="flex justify-center alert my-2 text-gray-600 text-lg"
    >
      <FaExclamationCircle size={26} />
      <span>開発中</span>
    </div>
  );
};

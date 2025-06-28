"use client";
import React from "react";

export const DownloadButton = ({ children }: any) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Travis_Adams_Resume.pdf";   // static file path
    link.download = "travis_adams_awesome_resume.pdf";     // filename shown in the save dialog
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <button
      onClick={handleDownload}
      className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-indigo-500 before:duration-500 before:ease-out hover:shadow-indigo-600 hover:before:h-56 hover:before:w-56 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-md whitespace-nowrap"
    >
        <span className="relative z-10">{children}</span>
    </button>
  );
}

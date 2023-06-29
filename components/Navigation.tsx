import React from "react";

export default function Navigation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className=" flex items-center justify-between p-3 bg-white shadow-md">
        <div className="text-gray-800 text-3xl">Personally.</div>
        <div>
          <button className="text-white flex flex-col items-center justify-center h-10 p-3 text-center text-sm font-semibold font-inter rounded-md border border-gray-800 bg-gray-800">
            Contact Me.
          </button>
        </div>
      </div>
      {children}
    </>
  );
}

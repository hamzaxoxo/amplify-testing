import React from "react";
import HeaderText from "../HeaderText";
import Image from "next/image";

export default function Trending() {
  return (
    <div className="gap-4 flex flex-col">
      <HeaderText>Trending -</HeaderText>
      <div className="col-span-2 border border-slate-700 h-full text-slate-800 rounded">
        <Image
          src="https://images.unsplash.com/photo-1719937206667-ac87c15ad3e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Trending Image"
          className="w-full object-cover object-center rounded"
          width={2070}
          height={300}
        />
        <h1 className="p-2 text-xl font-extrabold text-slate-700">
          ‘Kamala is BRAT’: Charli XCX endorses Harris. Why that’s so powerful
        </h1>
      </div>
      <div className="col-span-2 border border-slate-700 h-full text-slate-800 p-2 rounded">
        Sub Column 1
      </div>
    </div>
  );
}

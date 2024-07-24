import React from "react";
import HeaderText from "../HeaderText";

export default function HotTopic() {
  return (
    <div className="gap-4 col-span-2 flex flex-col">
      <HeaderText>Hot Topic -</HeaderText>
      <div className="col-span-2 border border-slate-700 h-full text-slate-800 p-2 rounded">
        Sub Column 2
      </div>
      <div className="col-span-2 border border-slate-700 h-full text-slate-800 p-2 rounded">
        Sub Column 2
      </div>
    </div>
  );
}

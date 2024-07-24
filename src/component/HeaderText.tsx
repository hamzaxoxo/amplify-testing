import React from "react";

interface HeaderTextProps {
  children: React.ReactNode;
  className?: string;
}

const HeaderText: React.FC<HeaderTextProps> = ({ children, className }) => {
  return (
    <h1
      className={`font-bold text-xl border border-slate-700 h-fit p-2 text-slate-800 rounded ${className}`}
    >
      {children}
    </h1>
  );
};

export default HeaderText;

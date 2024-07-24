import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

interface NavLinkTypes {
  id: number;
  name: string;
  url: string;
  active?: boolean;
}
export default function Navbar() {
  const NavLink: NavLinkTypes[] = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Music",
      url: "/about",
    },
    {
      id: 3,
      name: "Fashion",
      url: "/contact",
    },
    {
      id: 3,
      name: "Career",
      url: "/contact",
    },
    {
      id: 3,
      name: "Relationship",
      url: "/contact",
    },
    {
      id: 3,
      name: "Movies",
      url: "/contact",
    },
    {
      id: 3,
      name: "Events",
      url: "/contact",
    },
  ];
  return (
    <div className="flex justify-between items-center font-bold border border-slate-700 h-28 p-4 rounded">
      <h1 className="text-3xl">Blank.co</h1>
      <div className="text-sm">
        {NavLink.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.url}
              className="font-bold text-sm px-4 py-2"
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="text-slate-800 flex gap-4 items-center">
        <div className="flex items-center">
          <Search size={16}/>
          <input
            type="text"
            placeholder="Search"
            className="px-2 w-20 focus:ring-0 focus:outline-none"
          />
        </div>
        <button className="text-sm bg-[#FDDD88] px-4 py-4">
          Join us on Telegram
        </button>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
     <nav className="backdrop-blur-md bg-gray-900/70 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-amber-400 tracking-wide">
          Contact Manager
        </Link>

        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link href="/addcontact" className="hover:text-amber-400 transition">
              Add Contact
            </Link>
          </li>
        </ul>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-gray-800/80 backdrop-blur-md">
          <ul className="flex flex-col items-center space-y-6 py-6 text-lg">
            <li>
              <Link href="/" className="hover:text-amber-400" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/addcontact" className="hover:text-amber-400" onClick={() => setOpen(false)}>
                Add Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

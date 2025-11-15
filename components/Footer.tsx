"use client";

import React from "react";
import { Github, Twitter, Mail } from "lucide-react";

function Footer() {
  return (
   <footer className="bg-gray-900 text-gray-300 py-10 px-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">Ashif</h2>
          <p className="text-sm text-gray-400 mt-1">
            Modern Web Development with Next.js & TypeScript.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">
            <Github size={22} />
          </a>
          <a href="#" className="hover:text-white transition">
            <Twitter size={22} />
          </a>
          <a href="#" className="hover:text-white transition">
            <Mail size={22} />
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ashif — All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;

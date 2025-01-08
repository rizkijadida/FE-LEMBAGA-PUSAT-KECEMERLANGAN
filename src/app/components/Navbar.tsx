"use client";
import React from "react";
import Dropdown, { DropdownItem } from "./Dropdown";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const profileItems: DropdownItem[] = [
    { label: "Profil", url: "/profile" },
    { label: "Informasi", url: "/informasi" },
    { isSeparator: false }, // Separator
    { label: "pengurus", url: "/administrator" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-transparent bg-green-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <h1 onClick={() => router.push("/")} className="cursor-pointer">
            LOGO
          </h1>

          <div className="flex items-center gap-8">
            <Dropdown menutriggered="Tentang Kami" items={profileItems} />

            <h3>Register</h3>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

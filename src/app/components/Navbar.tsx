"use client";
import React, { useEffect, useRef, useState } from "react";
import Dropdown, { DropdownItem } from "./Dropdown";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  // const profileItems: DropdownItem[] = [
  //   { label: "Profil", url: "/profile" },
  //   { label: "Informasi", url: "/informasi" },
  //   { isSeparator: false }, // Separator
  //   { label: "pengurus", url: "/administrator" },
  // ];

  const handleScroll = (id: string) => {
    if (id === "/") {
      // Scroll ke atas halaman
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll ke elemen tertentu berdasarkan ID
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // untuk klik diluar hamburger menu
  // const [isOpen, setIsOpen] = useState(false);
  // const menuRef = useRef<HTMLDivElement>(null);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleClickOutside = (event: MouseEvent) => {
  //   if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
  //     setIsOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("click", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  return (
    <nav className="sticky top-0 z-50  shadow-md backdrop-blur-sm ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <h1 onClick={() => router.push("/")} className="cursor-pointer">
            LOGO
          </h1>
          {/* tes hamburger menu yang kalo di klik diluar hamburger menunya hilang */}
          {/* <div ref={menuRef} className="relative">
      {/* Hamburger Button */}
          {/* <button onClick={toggleMenu} className="hamburger-btn">
        ☰
      </button> */}

          {/* Dropdown Menu */}
          {/* {isOpen && ( */}
          {/* //     <div className="dropdown-menu">
    //       <ul>
    //         <li>Menu 1</li>
    //         <li>Menu 2</li>
    //         <li>Menu 3</li>
    //       </ul>
    //     </div>
    //   )}
    // </div> */}

          {/* 
          <div className="flex items-center gap-8">
            <Dropdown menutriggered="Tentang Kami" items={profileItems} />

            <h3>Register</h3>
          </div> */}
          <div className="flex space-x-5">
            <h1
              className="relative cursor-pointer hover:text-orange-200 transition duration-500"
              onClick={() => handleScroll("home")}
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-200 scale-x-0 transform origin-left transition-transform duration-500 hover:scale-x-100"></span>
            </h1>

            <h1
              className="cursor-pointer"
              onClick={() => handleScroll("about-us")}
            >
              About Us
            </h1>
            <h1
              className="cursor-pointer"
              onClick={() => handleScroll("contact-us")}
            >
              Contact Us
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

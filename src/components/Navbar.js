"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ModeToggle } from "./theme-btn";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [navItem, setNavItem] = useState([
    {
      item: "Home",
      path: "/",
    },
    {
      item: "About",
      path: "/about",
    },
    {
      item: "Videos",
      path: "/videos",
    },
    {
      item: "Images",
      path: "/images",
    },
    {
      item: "Contact",
      path: "/contact",
    },
  ]);
  const [open, setOpen] = useState(false)
  return (
    <div className="max-w-7xl mx-auto">
      <div className=" relative z-10 py-10">
        <nav className=" mx-auto fixed left-0 top-0 right-0 py-4 px-4 lg:px-5 xl:px-7 2xl:px-96 w-full backdrop-blur-sm bg-white/30 dark:bg-black/30  flex justify-between items-center  ">
          <Link className="flex lg:gap-3 gap-2 items-center" href={"/"}>
            <img className="lg:h-10 h-7" src="logo.png" alt="logo" />
            <h6 className="lg:text-2xl text-sm text-blue-600  ">
              Vk Cricket Club
            </h6>
          </Link>

          <div className="hidden lg:block">
            <ul className=" flex items-center gap-5">
              {navItem.map((item, idx) => {
                return (
                  <li key={idx}>
                    <Link href={item.path}>{item.item}</Link>
                  </li>
                );
              })}
              <ModeToggle />
            </ul>
          </div>
          <div className="lg:hidden">
           <div className="flex items-center gap-2 lg:gap-4">
           <ModeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger>
              <RxHamburgerMenu className="text-3xl" />
              </SheetTrigger>
              <SheetContent className={`w-[60vw]`}>
               <ul className="p-5 mt-3">
                {navItem.map((item, idx)=>{
                    return(
                        <li key={idx} onClick={()=> setOpen(false)}>
                            <Link href={item.path}>{item.item}</Link>
                        </li>
                    )
                })}
               </ul>
              </SheetContent>
            </Sheet>
           </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

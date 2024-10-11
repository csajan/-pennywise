"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import { Link } from "lucide-react";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center">
        {/* Insert LOGO*/}
        <Image
          src={"/FinalLogo.webp"}
          alt="Logo"
          width={50}
          height={55}
          priority={false}
        ></Image>
        <span className="text-red-800 font-bold text-xl">PennyWise</span>
      </div>

      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-3 items-center">
          {/* <Link href='/'> */}
          <Button variant="outline" className="rounded-full font-bold">
            Dashboard
          </Button>
          {/* </Link>
            <Link href='/'> */}
          <Button className="rounded-full font-bold">Get started</Button>
          {/* </Link> */}
        </div>
      )}
    </div>
  );
}

export default Header;

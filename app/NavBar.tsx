"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { status, data: session } = useSession();
  if (status == "loading") return null;
  return (
    <div>
      {status == "authenticated" && (
        <div>
          <p>{session.user!.name}</p>
          <Link
            href="api/auth/signout"
            className="bg-teal-500 px-2 py-1 rounded-full"
          >
            Signout
          </Link>
        </div>
      )}
      {status == "unauthenticated" && (
        <Link
          href="/api/auth/signin"
          className="bg-teal-500 px-2 py-1 rounded-full"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;

"use client";

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import { SignedIn } from "@clerk/clerk-react";

const Header = () => {
  const { user } = useUser();
  const createPasskey = async () => {
    try {
        const response = await user?.createPasskey();
        console.log(response);
        
    } catch (error) {
      console.error("Error:", JSON.stringify(error, null, 2));
    }
  };

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      <div className="w-full flex flex-wrap justify-between items-center">
        <Link
          className="text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
          href={"/"}
        >
          shopr
        </Link>
        <Form
          action={"/search"}
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="Search for products"
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none
                   focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-4xl"
          />
        </Form>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
          <Link
            href={"/basket"}
            className="flex-1 relative flex justify-center sm:justify-start sm:flex-none
                   items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <TrolleyIcon className="w-6 h-6" />
            <span>my basket</span>
          </Link>
          <ClerkLoaded>
            <SignedIn>
              <Link
                href={"/orders"}
                className="flex-1 relative flex justify-center sm:justify-start sm:flex-none

                   items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                <PackageIcon className="w-6 h-6" />
                <span>my order</span>
              </Link>
            </SignedIn>

            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />
                <div className="hidden sm:block text-sm">
                  <p className="text-gray-400">welcome back</p>
                  <p className="font-bold">{user.fullName}!</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}

            {user?.passkeys.length === 0 && (
              <button
                onClick={createPasskey}
                className="bg-white hover:bg-blue-700 hover:text-white animate-pulse text-blue-500 font-bold px-4 py-2 rounded border-blue-300 border"
              >
                create passkey
              </button>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};

export default Header;

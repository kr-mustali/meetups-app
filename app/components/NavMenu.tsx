"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Add New Meetup", href: "/new-meetup" },
  {name:"Modify Meetup",href:"/modify-meetup"}
];
function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center">
        <p className="text-xl text-gray-300 font-bold mr-4">
          {session?.user?.name}
        </p>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <div className="flex items-center">
      <p className="text-xl text-gray-300 font-bold mr-4">Not signed in</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
        onClick={() => signIn("google")}
      >
        Sign in with Google
      </button>
    </div>
  );
}
export default function Navbar() {
  return (
    <div className="bg-gray-800">
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="absolute top-0 right-0 p-4">
                  <div>
                    <AuthButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

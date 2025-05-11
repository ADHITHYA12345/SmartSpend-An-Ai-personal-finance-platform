import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import Image from "next/image";

const Header = async () => {
  await checkUser();
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container items-center flex mx-auto px-4 py-4 justify-between"> 
        <Link href="/" className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
        <Image 
        src={"/logo.png"} 
        alt="smartspend logo"
        width ={200} 
        height={60} 
        className="h-12 w-auto object-contain"
        />
        </Link>
           <div className="flex space-x-4">
           <SignedIn>
            <Link href={"/dashboard"}>
             <Button variant="outline">
              <LayoutDashboard size={18}/>
              <span className="hidden md:inline">dashboard</span>
             </Button>
             </Link>
             <Link href={"/transaction/create"}>
             <Button className="flex items-center">
              <PenBox size={18}/>
              <span className="hidden md:inline">Add Transaction</span>
             </Button>
             </Link>

            </SignedIn>
            
            <SignedOut>
            <SignInButton forceRedirectUrl='/dashboard'>
              <Button variant="outline">Login</Button>
            </SignInButton>
            </SignedOut>
            <SignedIn>
            <UserButton appearance={{
              elements : {
                avatarBox : "w-10 h-10",
              },
              }
            }/>
            </SignedIn>
            </div>
            </nav>
    </div>
  )
}

export default Header

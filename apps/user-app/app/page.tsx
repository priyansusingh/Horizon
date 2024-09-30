"use client"

import { signIn, signOut } from "next-auth/react";
import CountRenderer from "./components/CountRendered";
import {Appbar} from "@repo/ui/Appbar"
export default function Home() {
 
  return (
    <div>
      <Appbar onSignin={signIn} onSignout={signOut}/>
    <CountRenderer/>
    </div>
  );
}

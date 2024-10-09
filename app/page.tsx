

import LogIn from "@/components/Form/logIn"
import SignIn from "@/components/Form/signIn"
import Navbar from "@/components/header/Navbar";
import Image from "next/image";

export default function Home() {
  return (<>
    <Navbar/>
    <LogIn/>
    <SignIn/>
  </>
  );
}

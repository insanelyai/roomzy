
import Navbar from "@/components/header/Navbar";
import LogIn from "@/components/froms/logIn"
import SignIn from "@/components/froms/signIn"
import Image from "next/image";

export default function Home() {
  return (<>
    <Navbar/>
    <LogIn/>
    <SignIn/>
  </>
  );
}

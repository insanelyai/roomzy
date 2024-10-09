
import Navbar from "@/components/Header/Navbar";
import LogIn from "@/components/Form/logIn"
import SignIn from "@/components/Form/signIn"
import Image from "next/image";

export default function Home() {
  return (<>
    <Navbar/>
    <LogIn/>
    <SignIn/>
  </>
  );
}

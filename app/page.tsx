import LoginPage from "@/components/froms/logIn";
import Navbar from "@/components/header/Navbar";
import LogIn from "@/components/froms/logIn"
import signIn from "@/components/froms/signIn"
import Image from "next/image";

export default function Home() {
  return (<>
    <Navbar/>
    <LogIn/>
  </>
  );
}

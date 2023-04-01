import MainPage from "@/views/Home";
import Link from "next/link";



export default function Home() {
  return (
    <>

     {/* @ts-expect-error Server Component */}
    <MainPage/> </>
  );
}

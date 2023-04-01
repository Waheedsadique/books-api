import Link from "next/link";



export default function Header() {

    return (
        <header className="w-full flex justify-around items-center bg-black/80 py-2 px-4 border-b border-b-[#0d1a31]">
          <Link href="/" className="font-medium text-white">Book API</Link>
          <Link
            href="/register"
            className="font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
          >
            Register
          </Link>
        </header>
      );
    
}
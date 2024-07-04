import Login from "@/components/Login";
import Link from "next/link";

export default function PokeHome() {
  return <div className="flex flex-col content-center">
    <Login />
    <Link href="/" className="self-center border-2 border-black px-6 py-3 rounded-md"> Back</Link>
  </div>
}

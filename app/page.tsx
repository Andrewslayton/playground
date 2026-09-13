import Link from "next/link";
import { UserList } from "./components/UseList";
export default function Home() {
  return (
    <>
    <nav className="p-4"><Link href="/catalog">Product catalog practice</Link></nav>
    <nav className="p-4"><Link href="/cart">Shopping cart practice</Link></nav>
    <UserList/>
    </>
  );
}



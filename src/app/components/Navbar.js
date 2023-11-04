import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar h-[80px] w-full bg-white bg-opacity-50 flex">
      <Link className="mt-[22px] ml-[1375px]" href="/">
        <div className="text-white font-bold text-2xl">Log Out</div>
      </Link>
    </div>
  );
}

import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="siap">
      <Navbar />
      <h1>Hallo Ini halaman utama</h1>
    </div>
  );
}

import Link from "next/link";
export default function MenuDshMhs() {
  return (
    <div className="container mt-20 ml-28 w-[450px] h-[490px]">
      <div className="irs h-14 w-3/4 rounded-lg bg-white bg-opacity-50 border-2 mb-20 text-center pt-3">
        <Link href="#">
          <h1 className="font-bold text-white text-[21px]">IRS</h1>
        </Link>
      </div>
      <div className="khs h-14 w-3/4 rounded-lg bg-white bg-opacity-50 border-2 mb-20 text-center pt-3">
        <Link href="#">
          <h1 className="font-bold text-white text-[21px]">KHS</h1>
        </Link>
      </div>
      <div className="pkl h-14 w-3/4 rounded-lg bg-white bg-opacity-50 border-2 mb-20 text-center pt-3">
        <Link href="#">
          <h1 className="font-bold text-white text-[21px]">PKL</h1>
        </Link>
      </div>
      <div className="skripsi h-14 w-3/4 rounded-lg bg-white bg-opacity-50 border-2 mb-20 text-center pt-3">
        <Link href="#">
          <h1 className="font-bold text-white text-[21px]">Skripsi</h1>
        </Link>
      </div>
    </div>
  );
}

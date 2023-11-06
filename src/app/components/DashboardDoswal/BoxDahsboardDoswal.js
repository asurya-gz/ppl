import Link from "next/link";
export default function BoxDashboardDoswal() {
  return (
    <div className="boxdashboarddoswal bg-white bg-opacity-25 w-3/4 h-3/4 mt-10 ml-48 rounded-[20px] border-2">
      <div className="container mb-14">
        <div className="flex ml-[500px] mt-[40px] foto-profile h-[135px] w-[135px] rounded-full bg-white">
          <img className="ppdoswal rounded-full" src="img/ppopr.jpg" alt="" />
        </div>

        <div className="namaopr text-center mr-20">
          <div className="nama ml-20">
            <h5 className="font-bold text-2xl mt-7">Nama Dosen wali</h5>
          </div>
          <div className="box-detail mt-5 ml-20">
            <p className="font-bold text-xl">NIP : 123456789012</p>
            <br />
            <p className="font-bold text-xl">Email : Doswnwali@gmail.com</p>
            <br />
          </div>
        </div>

        <div className="menu-button flex mt-7 justify-between">
          <Link href="#">
            <div className="irs ml-5 rounded-[12px] bg-white bg-opacity-50 border-2 w-56 h-12 text-center">
              <h1 className="menu mt-2 font-bold">IRS</h1>
            </div>
          </Link>
          <Link href="#">
            <div className="khs rounded-[12px] bg-white bg-opacity-50 border-2 w-56 h-12 text-center">
              <h1 className="menu mt-2 font-bold">KHS</h1>
            </div>
          </Link>
          <Link href="#">
            <div className="pkl rounded-[12px] bg-white bg-opacity-50 border-2 w-56 h-12 text-center">
              <h1 className="menu mt-2 font-bold">PKL</h1>
            </div>
          </Link>
          <Link href="#">
            <div className="skripsi mr-5 rounded-[12px] bg-white bg-opacity-50 border-2 w-56 h-12 text-center">
              <h1 className="menu mt-2 font-bold">Skripsi</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

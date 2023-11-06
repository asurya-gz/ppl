import Link from "next/link";
export default function SemesterIrsMhs() {
  return (
    <div className="boxdashboarddoswal bg-white bg-opacity-25 w-3/4 h-3/4 mt-10 ml-48 rounded-[20px] border-2">
      <div className="container mb-14">
        <div className="namaopr text-center mr-20">
          <div className="nama ml-20">
            <h5 className="font-bold text-2xl mt-7">Silahkan pilih semester</h5>
          </div>
        </div>

        <div className="menu-button flex mt-7 justify-between">
          <Link href="../SemesterMhs/Sem1Mhs">
            <div className="irs ml-5 rounded-[12px] bg-white bg-opacity-50 border-2 w-56 h-12 text-center">
              <h1 className="menu mt-2 font-bold">1</h1>
            </div>
          </Link>
          <Link href="../SemesterMhs/Sem2Mhs">
            <div className="khs rounded-[12px] bg-white bg-opacity-50 border-2 w-56 h-12 text-center">
              <h1 className="menu mt-2 font-bold">2</h1>
            </div>
          </Link>
          <Link href="../SemesterMhs/Sem3Mhs">
            <div className="pkl rounded-[12px] bg-white bg-opacity-50 border-2 w-56 h-12 text-center">
              <h1 className="menu mt-2 font-bold">3</h1>
            </div>
          </Link>
          <Link href="../SemesterMhs/Sem4Mhs">
            <div className="skripsi mr-5 rounded-[12px] bg-white bg-opacity-50 border-2 w-56 h-12 text-center">
              <h1 className="menu mt-2 font-bold">4</h1>
            </div>
          </Link>
        </div>

        <div className="menu-button flex mt-7 justify-between">
          <Link href="../SemesterMhs/Sem5Mhs">
            <div className="irs ml-5 rounded-[12px] bg-white bg-opacity-50 border-2 w-56 h-12 text-center">
              <h1 className="menu mt-2 font-bold">5</h1>
            </div>
          </Link>
          <Link href="../SemesterMhs/Sem6Mhs">
            <div className="khs rounded-[12px] bg-white bg-opacity-50 border-2 w-56 h-12 text-center">
              <h1 className="menu mt-2 font-bold">6</h1>
            </div>
          </Link>
          <Link href="../SemesterMhs/Sem7Mhs">
            <div className="pkl rounded-[12px] bg-white bg-opacity-50 border-2 w-56 h-12 text-center">
              <h1 className="menu mt-2 font-bold">7</h1>
            </div>
          </Link>
          <Link href="../SemesterMhs/Sem8Mhs">
            <div className="skripsi mr-5 rounded-[12px] bg-white bg-opacity-50 border-2 w-56 h-12 text-center">
              <h1 className="menu mt-2 font-bold">8</h1>
            </div>
          </Link>
        </div>
        <div className="menu-button flex mt-7 justify-between">
          <Link href="../SemesterMhs/Sem9Mhs">
            <div className="irs ml-5 rounded-[12px] bg-white bg-opacity-50 border-2 w-56 h-12 text-center">
              <h1 className="menu mt-2 font-bold">9</h1>
            </div>
          </Link>
          <Link href="../SemesterMhs/Sem10Mhs">
            <div className="khs rounded-[12px] bg-white bg-opacity-50 border-2 w-56 h-12 text-center">
              <h1 className="menu mt-2 font-bold">10</h1>
            </div>
          </Link>
          <Link href="../SemesterMhs/Sem11Mhs">
            <div className="pkl rounded-[12px] bg-white bg-opacity-50 border-2 w-56 h-12 text-center">
              <h1 className="menu mt-2 font-bold">11</h1>
            </div>
          </Link>
          <Link href="../SemesterMhs/Sem12Mhs">
            <div className="skripsi mr-5 rounded-[12px] bg-white bg-opacity-50 border-2 w-56 h-12 text-center">
              <h1 className="menu mt-2 font-bold">12</h1>
            </div>
          </Link>
        </div>
        <div className="menu-button flex mt-7">
          <Link href="../SemesterMhs/Sem13Mhs">
            <div className="irs ml-5 rounded-[12px] bg-white bg-opacity-50 border-2 w-56 h-12 text-center">
              <h1 className="menu mt-2 font-bold">13</h1>
            </div>
          </Link>
          <Link href="../SemesterMhs/Sem14Mhs">
            <div className="khs rounded-[12px] bg-white ml-[72px] bg-opacity-50 border-2 w-56 h-12 text-center">
              <h1 className="menu mt-2 font-bold">14</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

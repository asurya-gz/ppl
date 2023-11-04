import Link from "next/link";
export default function BoxEdit() {
  return (
    <div className="boxedit bg-white bg-opacity-25 w-3/4 h-3/4 mt-10 ml-48 rounded-[20px] border-2">
      <div className="form ml-[125px] mt-24">
        <form>
          <div className="ml-7 bungkus flex">
            <div className="mb-8 ">
              <label className="block text-white text-sm font-medium mb-2">
                Nama :
              </label>
              <input
                type="name"
                className="w-[400px] p-2 rounded-md text-white bg-white bg-opacity-50 border-2 placeholder:text-white"
                placeholder="Agung Surya Permana"
              />
            </div>
            <div className="mb-8 ml-10">
              <label className="block text-white text-sm font-medium mb-2">
                Email :
              </label>
              <input
                type="email"
                className="w-[400px] p-2 rounded-md text-white bg-white bg-opacity-50 border-2 placeholder:text-white"
                placeholder="agungkdp208@gmail.com"
              />
            </div>
          </div>

          <div className="ml-7 bungkus flex">
            <div className="mb-8">
              <label className="block text-white text-sm font-medium mb-2">
                NIM :
              </label>
              <input
                type="nim"
                className="w-[400px] p-2 rounded-md text-white bg-white bg-opacity-50 border-2 placeholder:text-white"
                placeholder="24060121140167"
                disabled={true}
              />
            </div>
            <div className="mb-8 ml-10">
              <label className="block text-white text-sm font-medium mb-2">
                Angkatan :
              </label>
              <input
                type="angkatan"
                className="w-[400px] p-2 rounded-md text-white bg-white bg-opacity-50 border-2 placeholder:text-white"
                placeholder="2021"
                disabled={true}
              />
            </div>
          </div>

          <div className="ml-7 bungkus flex">
            <div className="mb-8">
              <label className="block text-white text-sm font-medium mb-2">
                Password Lama :
              </label>
              <input
                type="password"
                className="w-[400px] p-2 rounded-md text-white bg-white bg-opacity-50 border-2 placeholder:text-white"
                placeholder="Masukan password lama anda"
              />
            </div>
            <div className="mb-8 ml-10">
              <label className="block text-white text-sm font-medium mb-2">
                Password Baru :
              </label>
              <input
                type="password"
                className="w-[400px] p-2 rounded-md text-white bg-white bg-opacity-50 border-2 placeholder:text-white"
                placeholder="Masukan password baru anda"
              />
            </div>
          </div>
          <Link rel="stylesheet" href="/DashboardMhs">
            <button
              type="submit"
              className="w-[200px] h-[40px] ml-[670px] bg-[#BD0C47] text-white p-2 rounded-md hover:bg-blue-600"
            >
              Simpan dan lanjutkan
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

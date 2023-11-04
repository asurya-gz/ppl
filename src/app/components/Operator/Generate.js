export default function Generate() {
  return (
    <div className="container mt-16 ml-20 h-[490px] w-[750px] bg-white rounded-[20px] bg-opacity-50 backdrop-blur-md border-2">
      <div className="wrapper ml-10 mt-7">
        <div className="judul ml-7 mt-3 mb-4">
          <h1 className="font-bold text-2xl tracking-wider">
            Entry Mahasiswa :
          </h1>
        </div>
        <div className="form">
          <form>
            <div className="ml-7 bungkus flex">
              <div className="mb-8">
                <label className="block text-gray-800 text-sm font-medium"></label>
                <input
                  type="name"
                  className="w-full p-2 border rounded-md text-gray-800"
                  placeholder="Nama"
                />
              </div>
              <div className="mb-8">
                <label className="block text-gray-800 text-sm font-medium"></label>
                <input
                  type="angkatan"
                  className="w-[250px] ml-11 p-2 border rounded-md text-gray-800"
                  placeholder="Angkatan"
                />
              </div>
            </div>
            <div className="ml-7 bungkus flex">
              <div className="mb-8">
                <label className="block text-gray-800 text-sm font-medium"></label>
                <input
                  type="nim"
                  className="w-full p-2 border rounded-md text-gray-800"
                  placeholder="NIM"
                />
              </div>
              <div className="mb-8">
                <label
                  placeholder="Status"
                  className="block text-gray-800 text-sm font-medium"
                ></label>
                <select
                  className="w-full ml-11 p-2 border rounded-md text-gray-800"
                  placeholder="Status"
                >
                  <option className="text-gray-800" value="AKTIF">
                    AKTIF
                  </option>
                  <option className="text-gray-800" value="NON-AKTIF">
                    NON-AKTIF
                  </option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-3/4 ml-7 bg-[#BD0C47] text-white p-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
        <div className="upload ml-7 bg-white bg-opacity-25 rounded-lg w-3/4 h-36 mt-9 border-2">
          <img
            className="gambr-up ml-56 mt-7"
            src="img/upload.png"
            alt=""
            height={100}
            width={80}
          />
        </div>
      </div>
    </div>
  );
}

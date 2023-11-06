import Link from "next/link";
export default function Sem1Mhs() {
  return (
    <div className="container h-screen w-full bg-[#0F0C29] bg-no-repeat bg-cover">
      <div className="irsmhs bg-white bg-opacity-25 w-3/4 h-3/4 mt-10 ml-48 rounded-[20px] border-2">
        <div className="container mb-14">
          <div className="namaopr text-center mr-20">
            <div className="nama ml-20">
              <h5 className="font-bold text-2xl mt-7">
                Silahkan masukan jumlah IRS :
              </h5>
            </div>
            <div className="dropdown-container mt-4">
              <select
                className="border rounded-md text-gray-800 py-2 px-4"
                id="jumlahIRS"
              >
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
              </select>
            </div>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4">
              Submit
            </button>
            <h5 className="font-bold text-2xl mt-7">
              Jumlh IRS yang diambil :
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BoxProfileMhs() {
  return (
    <div className="container mt-16 ml-20 rounded-[20px] w-[500px] h-[490px] bg-white bg-opacity-25 backdrop-blur-md border-2">
      <div className="flex ml-[150px] mt-[40px] foto-profile h-[135px] w-[135px] rounded-full bg-white">
        <img className="ppopr rounded-full" src="img/ppopr.jpg" alt="" />
      </div>
      <div className="namaopr">
        <h3 className="font-bold text-2xl mt-7 ml-[100px]">
          Agung Surya Permana
        </h3>
        <h4 className="font-bold text-2xl mt-2 ml-[140px]">Status : AKTIF</h4>
        <div className="box-detail mt-10 ml-20">
          <p className="font-bold text-xl">NIM : 24060121140167</p>
          <br />
          <p className="font-bold text-xl">Email : agungkdp208@gmail.com</p>
          <br />
          <p className="font-bold text-xl">Angkatan : 2021</p>
        </div>
      </div>
    </div>
  );
}

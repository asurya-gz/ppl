export default function BoxProfileOpr() {
  return (
    <div className="container mt-16 ml-20 rounded-[20px] w-[450px] h-[490px] bg-white bg-opacity-25 backdrop-blur-md border-2">
      <div className="flex ml-[150px] mt-[40px] foto-profile h-[135px] w-[135px] rounded-full bg-white">
        <img className="ppopr rounded-full" src="img/ppopr.jpg" alt="" />
      </div>
      <div className="namaopr">
        <h3 className="font-bold text-2xl mt-7 ml-[140px]">Mas perator</h3>
        <div className="box-detail mt-16 ml-20">
          <p className="font-bold text-xl">NIP : 1234567890</p>
          <br />
          <p className="font-bold text-xl">Email : operator@gmail.com</p>
          <br />
          <p className="font-bold text-xl">Fakultas : Sains dan Matematika</p>
        </div>
      </div>
    </div>
  );
}

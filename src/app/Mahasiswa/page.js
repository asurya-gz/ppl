import JudulEdit from "../components/Mahasiswa/JudulEdit";
import BoxEdit from "../components/Mahasiswa/BoxEdit";
export default function Mahasiswa() {
  return (
    <div className="container h-screen w-full bg-[url('/img/belakang.png')] bg-no-repeat bg-cover">
      <JudulEdit />
      <BoxEdit />
    </div>
  );
}

import LogoBackIrsMhs from "../components/IrsMhs/LogoBackIrsMhs";
import SemesterIrsMhs from "../components/IrsMhs/SemesterIrsMhs";

export default function IrsMhs() {
  return (
    <div className="container h-screen w-full bg-[url('/img/belakang.png')] bg-no-repeat bg-cover">
      <LogoBackIrsMhs />
      <SemesterIrsMhs />
    </div>
  );
}

import BoxProfileMhs from "../components/DashboardMhs/BoxProfileMhs";
import MenuDshMhs from "../components/DashboardMhs/MenuDshMhs";
import Navbar from "../components/Navbar";
export default function DashboardMhs() {
  return (
    <div className="container h-screen w-full bg-[url('/img/belakang.png')] bg-no-repeat bg-cover">
      <Navbar />

      <div className="flex ml-24">
        <BoxProfileMhs />
        <MenuDshMhs />
      </div>
    </div>
  );
}

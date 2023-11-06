import Navbar from "../components/Navbar";
import BoxDashboardDoswal from "../components/DashboardDoswal/BoxDahsboardDoswal";
export default function DashboardDoswal() {
  return (
    <div className="container h-screen w-full bg-[url('/img/belakang.png')] bg-no-repeat bg-cover">
      <Navbar />
      <BoxDashboardDoswal />
    </div>
  );
}

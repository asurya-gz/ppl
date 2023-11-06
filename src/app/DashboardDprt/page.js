import Navbar from "../components/Navbar";
import BoxDshDprt from "../components/DashboardDprt/BoxDshDprt";
export default function DashboardDprt() {
  return (
    <div className="container h-screen w-full bg-[url('/img/belakang.png')] bg-no-repeat bg-cover">
      <Navbar />
      <BoxDshDprt />
    </div>
  );
}

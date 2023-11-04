import Navbar from "../components/Navbar";
import BoxProfileOpr from "../components/Operator/BoxProfile";
import Generate from "../components/Operator/Generate";
export default function DashboardOperator() {
  return (
    <div className="container h-screen w-full bg-[url('/img/belakang.png')] bg-no-repeat bg-cover">
      <Navbar />

      <div className="flex ml-12">
        <BoxProfileOpr />
        <Generate />
      </div>
    </div>
  );
}

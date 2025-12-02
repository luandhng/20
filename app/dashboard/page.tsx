import { Staffs } from "@/components/staffs";
import { TimeInfo } from "@/components/time-info";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Staffs />
      <TimeInfo />
    </div>
  );
};

export default Dashboard;

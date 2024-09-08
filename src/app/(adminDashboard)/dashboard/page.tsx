
import LatestUser from "@/components/(adminDashboard)/dashboard/LatestUser";
import Statistic from "@/components/(adminDashboard)/dashboard/Statistic";


const DashboardPage = () => {
    return (
        <div>
            <Statistic></Statistic>
            <div className="mt-10">
            <LatestUser></LatestUser>
            </div>
        </div>
    );
};

export default DashboardPage;
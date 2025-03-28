import { useContext } from "react";
import { DashboardContext } from "@/contexts/Dashboard";

function useDashboard() {
    const context = useContext(DashboardContext);

    if (context === null || context === undefined) {
        throw Error('useDashboard should be used within DashboardProvider');
    }

    return context;
}

export default useDashboard;

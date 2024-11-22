import { Route, Routes } from "react-router-dom";
import SideBar from "./sidebar";
import Dashboard from "./dashboard";
import Invoice from "./invoice";
import Profile from "./profile";
import "../styles/dashbaord.css";
const Hydrocarbon = () => {
  return (
    <>
      <div className="dashboard-container">
        <SideBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default Hydrocarbon;

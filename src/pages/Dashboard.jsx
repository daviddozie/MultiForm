import React from "react";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import MainContent from "../components/MainBody";


const Dashboard = () => {

    return (
        <div className="flex h-full">
            <div className="sideBar w-[15%] md:w-[10%] lg:w-[20%] h-full ">
                <Sidebar />
            </div>
            <div className="main w-[85%] md:w-[90%]  bg-[#b1d5f12a]">
                <Header />
                <MainContent />
            </div>
        </div>
    );
};

export default Dashboard;
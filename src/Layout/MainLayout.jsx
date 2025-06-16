import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./../Components/Header/Header";
import Footer from "./../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;

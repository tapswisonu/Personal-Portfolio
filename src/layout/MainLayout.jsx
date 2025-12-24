import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";

const MainLayout = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans transition-colors duration-300">
      <Header />
      <div className="pt-20 ">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;

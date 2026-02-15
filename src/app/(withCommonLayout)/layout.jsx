import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto">   
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;

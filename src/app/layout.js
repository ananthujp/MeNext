import "../styles/globals.css"
import BottomBar from "@/components/BottomBar";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/hooks/reducerHook";
import OverlayScreen from "@/components/OverlayScreen";
import React from "react";

function RootLayout({ children}) {
  
  return (
    
      <AuthProvider>
        <div className="w-full h-screen flex flex-col justify-between bg-gray-50">
          <div className=" ">
             {true && <OverlayScreen />} 
            <Navbar />
            <div className="mt-20">{children}</div>
          </div>
          <BottomBar />
        </div>
      </AuthProvider>
  
  );
}

export default RootLayout;
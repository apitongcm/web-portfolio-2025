import React from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/ac_logo.png";

function AppLoader() {
    const navigate = useNavigate();

      //return to Home
    const returnHome = () => {
                navigate("/");
                window.location.reload(); }

  //Creates buffer time before displaying the page.
  useEffect(() => {

    //Alloted time buffer for loading the page (3seconds)
    const timer = setTimeout(() => {


      // Navigate to home
      navigate("/home");
    }, 3000); 

    return () => clearTimeout(timer);
  }, [navigate]);


  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen relative min-h-screen bg-[#0a0a0a] py-24 px-6 overflow-hidden ">
      <div className="relative w-34 h-34">
        {/* Cart emoji in center */}
        <div className="absolute inset-3 flex items-center justify-center text-4xl animate-ping">
              <img
                    src={logo}
                    alt="Logo"
                    className="h-25 w-25 bg-white"
                    onClick={returnHome}
                  />
        </div>
      </div>
        <div className="my-20 text-white">
            <h2> Apitongcm.dev</h2>
        </div>

      {/* Loading message */}
      <p className="mt-6 text-gray-300 md:text-lg font-semibold md:tracking-wide animate-pulse xs:mt-4 xs:text-xs ">
            Please wait. Carl's Getting Ready...
      </p>
    </div>
    </>
  )
}

export default AppLoader
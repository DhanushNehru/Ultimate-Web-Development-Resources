import React from "react"
import LoginButton from "../../../components/Login/LoginButton" ;
import LogoutButton from "../../../components/Login/LogoutButton";
import Profile from "../../../components/Login/Profile";


export default function Navbar() {
 
  return (
    <nav
     className={`w-full  flex items-center justify-between py-5 relative top-0 z-20 `}
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto  "> 
      <a href="./homepage"> 
        <h3 className="text-[#2c2c2c] dark:text-white  font-bold uppercase">
          {" "}
          Boundary Bytes Cricket Acadamy 
        </h3>
        </a>
        <ul className={`list-none  flex-row  sm:gap-10  gap-5 mr-4  md:flex hidden ` }>
          <li className="flex items-center gap-9 font-bold font-lora text-md dark:text-slate-200  ">
            <a href="tournament">  Tournment</a>
          </li>

          <li className="flex items-center gap-9 font-bold font-lora text-md dark:text-slate-200 ">                                                                                                                                                                                                
            <a href="events"> Events </a>
          </li>

          <li className="flex  items-center gap-9 font-bold font-lora text-md dark:text-slate-200 ">
            <a href="community"> Community</a>

          </li>
        </ul>
        <span  className="flex justify-center items-center gap-4">   
       
        <LoginButton/>
      <LogoutButton /> 
      <Profile />

</span>

      </div>

   
    </nav>
  );
}

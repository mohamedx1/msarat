import React from "react";

import { Outlet } from "react-router-dom";
import UserSideBar from "../../components/masarat/userSideBar/UserSideBar";
const MainLayout = () => {
  return (
    <>
      <div
        className={
          "max-w-8xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-[16rem_1fr] "
        }
      >
        <UserSideBar />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;

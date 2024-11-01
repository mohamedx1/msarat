import React from "react";
import UserInfo from "./userInfo/UserInfo";
import Subjects from "./subjects/Subjects";

export default function UserSideBar() {
  return (
    <>
      <div className=''>
        <div className='h-screen p-4   '>
          <UserInfo />
          <Subjects />
        </div>
      </div>
    </>
  );
}

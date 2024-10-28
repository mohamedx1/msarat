import React from "react";
import UserInfo from "./userInfo/UserInfo";
import LessonProgresspar from "./lessonProgress/LessonProgresspar";
import Lessons from "./lessonsNavLinks/Lessons";

export default function UserSideBar() {
  return (
    <>
      <div className=''>
        <div className='h-screen p-4  ]'>
          <UserInfo />
          <LessonProgresspar />
          <Lessons />
        </div>
      </div>
    </>
  );
}

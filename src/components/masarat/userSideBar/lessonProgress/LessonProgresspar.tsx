import React from "react";

export default function LessonProgresspar() {
  return (
    <div className='mt-2.5'>
      <p className='text-gray-500'>اللغة العربية</p>
      <div className='w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700'>
        <div
          className='bg-primary-300 h-2 rounded-full mt-1'
          style={{ width: "40%" }}
        ></div>
      </div>
    </div>
  );
}

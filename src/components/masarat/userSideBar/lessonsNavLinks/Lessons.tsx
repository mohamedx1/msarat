import React from "react";
interface IProps {
  id: string;
  description: string;
  title: string;
  status: string;
  subject: string;
  order: string;
}
export default function Lessons({
  id,
  description,
  title,
  status,
  subject,
  order,
}: IProps) {
  return (
    <>
      <>
        <section className='mt-2.5 flex justify-between p-2 rounded-lg'>
          <p className='text-text-sm font-regular my-auto'>
            {order + " : " + title}
          </p>
          {status === "notStarted" ? (
            <span className='inline-flex items-center rounded-lg bg-gray-500 px-2 py-1 font-medium   text-white text-text-sm'>
              لم يبدأ
            </span>
          ) : status === "started" ? (
            <span className='inline-flex items-center rounded-md bg-primary-300 px-2 py-1 font-medium   text-white text-text-sm'>
              شرح
            </span>
          ) : status === "done" ? (
            <span className='inline-flex items-center rounded-md bg-green-500 px-2 py-1 font-medium   text-white text-text-sm'>
              تم
            </span>
          ) : status === "exam" ? (
            <span className='inline-flex items-center rounded-md bg-secondary-200 px-2 py-1 font-medium   text-black text-text-sm'>
              إمتحان
            </span>
          ) : status === "retake" ? (
            <span className='inline-flex items-center rounded-md bg-red-600 px-2 py-1 font-medium   text-white text-text-sm'>
              إعادة
            </span>
          ) : (
            ""
          )}
        </section>
      </>
    </>
  );
}

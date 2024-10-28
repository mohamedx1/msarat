import React from "react";

export default function Lessons() {
  const lessons = [
    {
      lessonNumber: "الدرس الثالث",
      lessonName: "إعراب المبتدأ",
      lessonStatus: "done",
      lessonId: 3,
    },
    {
      lessonNumber: "الدرس الخامس",
      lessonName: "إعراب المبتدأ",
      lessonStatus: "exam",
      lessonId: 4,
    },
    {
      lessonNumber: "الدرس الرابع",
      lessonName: "إعراب المبتدأ",
      lessonStatus: "retake",
      lessonId: 5,
    },
    {
      lessonNumber: "الدرس السادس",
      lessonName: "إعراب المبتدأ",
      lessonStatus: "started",
      lessonId: 6,
    },
    {
      lessonNumber: "الدرس السابع",
      lessonName: "إعراب المبتدأ",
      lessonStatus: "notStarted",
      lessonId: 7,
    },
    {
      lessonNumber: "الدرس السابع",
      lessonName: "إعراب المبتدأ",
      lessonStatus: "notStarted",
      lessonId: 8,
    },
  ];

  return (
    <>
      {lessons.map((lesson) => (
        <>
          <section
            key={lesson.lessonId}
            className='mt-2.5 flex justify-between p-2 rounded-lg'
          >
            <p className='text-text-sm font-regular my-auto'>
              {lesson.lessonNumber}: {lesson.lessonName}
            </p>
            {lesson.lessonStatus === "notStarted" ? (
              <span className='inline-flex items-center rounded-lg bg-gray-500 px-2 py-1 font-medium   text-white text-text-sm'>
                لم يبدأ
              </span>
            ) : lesson.lessonStatus === "started" ? (
              <span className='inline-flex items-center rounded-md bg-primary-300 px-2 py-1 font-medium   text-white text-text-sm'>
                شرح
              </span>
            ) : lesson.lessonStatus === "done" ? (
              <span className='inline-flex items-center rounded-md bg-green-500 px-2 py-1 font-medium   text-white text-text-sm'>
                تم
              </span>
            ) : lesson.lessonStatus === "exam" ? (
              <span className='inline-flex items-center rounded-md bg-secondary-200 px-2 py-1 font-medium   text-black text-text-sm'>
                إمتحان
              </span>
            ) : lesson.lessonStatus === "retake" ? (
              <span className='inline-flex items-center rounded-md bg-red-600 px-2 py-1 font-medium   text-white text-text-sm'>
                إعادة
              </span>
            ) : (
              ""
            )}
          </section>
        </>
      ))}
    </>
  );
}

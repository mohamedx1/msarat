import Lessons from "../lessonsNavLinks/Lessons";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { getSubjects } from "../../../../store/subjects/subjectsSlice";
import React, { useEffect } from "react";
import { RingLoader } from "react-spinners";
import { getLessons } from "../../../../store/lessons/lesssonsSlice";
import { LockKeyhole } from "lucide-react";

export default function Subjects() {
  const dispatch = useAppDispatch();
  const { isLoading, subjects, error } = useAppSelector(
    (state) => state.subjects
  );
  const { lessons } = useAppSelector((state) => state.lessons);

  useEffect(() => {
    dispatch(getSubjects());
    dispatch(getLessons());
  }, [dispatch]);

  const Allsubjects =
    subjects.length > 0 ? (
      subjects.map((sub) => (
        <React.Fragment key={sub.id}>
          {sub.is_active === true ? (
            <div className='mt-2.5'>
              <p className='text-gray-500'>{sub.name}</p>
              <div className='w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700'>
                <div
                  className='bg-primary-300 h-2 rounded-full mt-1'
                  style={{ width: `${sub.progress}%` }}
                ></div>
              </div>

              {lessons.length > 0
                ? lessons.map((less, idx) => (
                    <React.Fragment key={idx}>
                      {less.subject === sub.id ? (
                        <div>
                          <Lessons {...less} />
                        </div>
                      ) : (
                        ""
                      )}
                    </React.Fragment>
                  ))
                : "لا يوجد مواد لعرضها"}
            </div>
          ) : (
            <p className='text-backgroundGray'>{sub.name}</p>
          )}
        </React.Fragment>
      ))
    ) : (
      <div className='mt-10 text-center'>
        لا يوجد دروس لعرضها{" "}
        <span>
          {" "}
          <LockKeyhole />
        </span>
      </div>
    );

  return (
    <>
      {error != null ? (
        <div className='bg-red-300 relative text-center'>
          <span className='w-2 absolute left-0 top-0 h-full bg-red-500'></span>
          {error}
        </div>
      ) : (
        ""
      )}
      {isLoading === "pending" ? <RingLoader /> : Allsubjects}
    </>
  );
}

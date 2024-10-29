import Lessons from "../lessonsNavLinks/Lessons";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { getSubjects } from "../../../../store/subjects/subjectsSlice";
import { useEffect } from "react";

export default function Subjects() {
  const dispatch = useAppDispatch();
  const { isLoading, subjects, error } = useAppSelector(
    (state) => state.subjects
  );

  useEffect(() => {
    dispatch(getSubjects());
  }, [dispatch]);
  return (
    <>
      {subjects.map((sub) => (
        <div key={sub.id} className='mt-2.5'>
          <p className='text-gray-500'>{sub.name}</p>
          <div className='w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700'>
            <div
              className='bg-primary-300 h-2 rounded-full mt-1'
              style={{ width: `${sub.progress}%` }}
            ></div>
          </div>
          <Lessons />
        </div>
      ))}
    </>
  );
}

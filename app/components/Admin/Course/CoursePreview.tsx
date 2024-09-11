import React, { FC } from 'react';
import CoursePlayer from "../../../utils/CoursePlayer";

type Props = {
  active: number;
  setActive: (active: number) => void;
  courseData: any;
  handleCourseCreate: any;
};

const CoursePreview: FC<Props> = ({
  courseData,
  handleCourseCreate,
  setActive,
  active,
}) => {
  return (
    <div className='w-[90%] m-auto py-5 mb-5'>
      <div className='w-full relative'>
        <div className='w-full mt-10'>
          <CoursePlayer
            videoId={courseData?.demoUrl} // Use demoId to match with CoursePlayer
          />
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;

import userImage from "../../../../images/userImage.jpg";

// import AvatarImage from './AvatarImage';

export default function UserInfo() {
  return (
    <div className='  flex items-center gap-4  '>
      <div className='bg-gray-100  p-1 w-14 rounded-full'>
        {/* <AvatarImage/> */}
        <img src={userImage} alt='user' className='w-full rounded-full  ' />
      </div>
      <div className=' flex-1'>
        <h2 className='text-text-lg font-semibold '>باسم صباح سعيد</h2>
        <p className='text-sm text-gray-500  '>
          {" "}
          الثاني الإعدادي - التقييم 56%
        </p>
      </div>
    </div>
  );
}

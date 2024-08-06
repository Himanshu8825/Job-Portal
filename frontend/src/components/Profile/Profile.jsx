import { AppliedJobs, UpdateProfileDilouge } from '@/Index';
import { Mail, PhoneCall } from 'lucide-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

const Profile = () => {
  const isResume = true;
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="bg-white poppins-medium rounded-xl shadow-xl  max-w-3xl mx-auto p-6">
        <div className="flex flex-col items-center ">
          <Avatar className="w-24 h-24 rounded-full border-2 border-white">
            <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
          </Avatar>

          <h2 className="text-lg font-semibold mt-4">{user?.fullName}</h2>

          <p className="text-center text-gray-700 mt-2">{user?.profile?.bio}</p>

          <div className="w-full max-w-2xl">
            <h1 className=" mt-4 text-lg font-bold text-[#F83002] ">Skills</h1>
            {user?.profile?.skills.length !== 0
              ? user?.profile?.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    className="text-sm m-2 bg-[#6A38C2] hover:bg-[#5b30a6] "
                  >
                    {skill}
                  </Badge>
                ))
              : 'NA'}
          </div>

          <div className="grid w-full    mt-2 gap-1.5 max-w-2xl  ">
            <Label className="text-lg  font-bold text-[#F83002]">Resume</Label>

            {isResume ? (
              <a
                target="blank"
                href={user?.profile?.resume}
                className="  font-medium w-full  hover:underline cursor-pointer"
              >
                {user.profile.resumeOriginalName}
              </a>
            ) : (
              'NA'
            )}
          </div>

          <div className="flex items-center gap-8 mt-6">
            <div className="flex justify-center items-center gap-1">
              <Mail className="text-[#6A38C2]" />
              <span className="font-medium"> {user?.email} </span>
            </div>
            <div className="flex justify-center items-center gap-1">
              <PhoneCall className="text-[#6A38C2]" />
              <span className=" font-medium ">+91 {user?.phoneNumber}</span>
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <Button
              onClick={toggle}
              className=" bg-[#6A38C2] hover:bg-[#5b30a6]  text-white px-4 py-2 rounded-md "
            >
              Edit Profile
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto bg-white rounded-2xl mt-4 p-4 shadow-md">
        <h1 className=" font-bold text-lg">Applied Jobs</h1>
        <AppliedJobs />
      </div>

      <UpdateProfileDilouge open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;

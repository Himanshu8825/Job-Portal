import { Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunc = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="p-4 poppins-medium rounded-xl  shadow-md bg-white border border-gray-200 cursor-pointer transition-all  duration-300 poppins-medium">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">
          {daysAgoFunc(job?.createdAt) === 0
            ? 'Today'
            : `${daysAgoFunc(job?.createdAt)} days ago`}
        </p>
        <Button variant="outline" className=" rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button variant="outline" className="p-6" size="icon">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>
        <div className="">
          <h1 className=" font-medium text-lg">{job?.company?.name}</h1>
          <div className="flex gap-4 items-center">
            <p className=" text-sm text-gray-500">India</p>
            <p className=" text-sm ">{job?.location}</p>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="font-semibold text-lg py-1">{job?.title}</h1>
        <p className=" text-sm text-gray-600">{job?.description}</p>
      </div>

      <div className="grid grid-cols-3 place-items-center gap-2 mt-4 ">
        {job?.requirements.map((item, index) => {
          return (
            <Badge
              key={index}
              variant={'ghost'}
              className={'hover:text-[#7209b7]  '}
            >
             <p className=' inline-block p-1 text-center'>  {item} </p>
            </Badge>
          );
        })}
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Badge className={'text-blue-700'} variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className={'text-[#F83002]'} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={'text-[#7209b7]'} variant="ghost">
          {job?.salary} INR
        </Badge>
      </div>

      <div className="flex items-center justify-between  mt-6">
        <Button
          onClick={() => navigate(`/details/${job?._id}`)}
          variant="outline"
          className="h-8"
        >
          Details
        </Button>
        <Button className="bg-[#7209b7] hover:bg-[#5f049b] h-8">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;

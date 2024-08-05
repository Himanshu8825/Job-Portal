import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Job = () => {
  return (
    <div className="p-6 poppins-medium rounded-xl  shadow-md bg-white border border-gray-200 cursor-pointer transition-all  duration-300 poppins-medium">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className=" rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button variant="outline" className="p-6" size="icon">
          <Avatar>
            <AvatarImage src=" https://www.netsolutions.com/insights/wp-content/uploads/2022/06/how-to-become-a-software-developer.webp " />
          </Avatar>
        </Button>
        <div className="">
          <h1 className=" font-medium text-lg">Company Name</h1>
          <p className=" text-sm text-gray-500">India</p>
        </div>
      </div>

      <div className="">
        <h1 className="font-bold text-lg py-2">Title</h1>
        <p className=" text-sm text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          quam praesentium placeat ex culpa ad numquam ut minima quia saepe.
        </p>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Badge className={'text-blue-700'} variant="ghost">
          12 Postion
        </Badge>
        <Badge className={'text-[#F83002]'} variant="ghost">
          Part Time
        </Badge>
        <Badge className={'text-[#7209b7]'} variant="ghost">
          12LPA
        </Badge>
      </div>

      <div className="flex items-center justify-between  mt-6">
        <Button variant="outline" className="h-8">
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

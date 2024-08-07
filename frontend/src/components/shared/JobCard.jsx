import { Badge } from '../ui/badge';

const JobCard = ({ job }) => {
  return (
    <div>
      <div className="p-6 poppins-medium rounded-xl  hover:shadow-xl bg-white border border-gray-200 cursor-pointer transition-all  duration-300">
        <h1 className=" font-medium text-lg">{job?.company?.name}</h1>

        <div className="flex gap-4 items-center">
          <p className=" text-sm text-gray-500">India</p>
          <p className=" text-sm ">{job?.location}</p>
        </div>

        <div>
          <h1 className=" font-bold text-lg my-1">{job?.title}</h1>
          <p className=" text-sm text-gray-600">{job?.description}</p>
        </div>

        <div className="flex items-center gap-2 mt-4">
          {job?.requirements.map((item, index) => {
            return (
              <Badge key={index} variant={'ghost'} >
                {item}
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
            {job?.salary} LPA
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

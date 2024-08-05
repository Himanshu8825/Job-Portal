import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const DetailsPage = () => {
  const isApplied = true;
  return (
    <div className="xl:px-16 lg:px-10 md:px-6 px-4   py-2 poppins-medium">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Title</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className={'text-blue-700 font-bold'} variant="ghost">
              12 Positions
            </Badge>
            <Badge className={'text-[#F83002] font-bold'} variant="ghost">
              Full Time
            </Badge>
            <Badge className={'text-[#7209b7] font-bold'} variant="ghost">
              22 LPA
            </Badge>
          </div>
        </div>
        <Button
          className={`rounded-lg h-8 ${
            isApplied
              ? ' bg-teal-600 hover:bg-teal-800 cursor-not-allowed'
              : 'bg-[#7209b7] hover:bg-[#5f32ad]'
          }`}
        >
          {isApplied ? 'Already Applied' : 'Apply Now'}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
        Job Description
      </h1>
      <div className="my-4">
        <h1 className="font-bold my-1">
          Role:{' '}
          <span className="pl-4 font-normal text-gray-800">
            Frontend Developer
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Location:{' '}
          <span className="pl-4 font-normal text-gray-800">Noida</span>
        </h1>
        <h1 className="font-bold my-1">
          Description:{' '}
          <span className="pl-4 font-normal text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui
            aliquid similique quam sed sapiente minus nihil impedit tempore
            animi.
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Experience:{' '}
          <span className="pl-4 font-normal text-gray-800">5 yrs</span>
        </h1>
        <h1 className="font-bold my-1">
          Salary: <span className="pl-4 font-normal text-gray-800">22 LPA</span>
        </h1>
        <h1 className="font-bold my-1">
          Total Applicants:{' '}
          <span className="pl-4 font-normal text-gray-800">22</span>
        </h1>
        <h1 className="font-bold my-1">
          Posted Date:{' '}
          <span className="pl-4 font-normal text-gray-800">
            {/* {singleJob?.createdAt.split('T')[0]} */}
            today
          </span>
        </h1>
      </div>
    </div>
  );
};

export default DetailsPage;

import { Badge } from '../ui/badge';

const JobCard = () => {
  const jobPositions = [
    {
      id: 5,
      category: 'Marketing Specialist',
      description: 'Develops and implements marketing strategies.',
      companyName: 'Creative Agency',
      country: 'India',
      employmentType: 'Full-Time',
      position: 'Marketing Specialist',
      ctc: '15,00,000 INR',
      numberOfPositions: 5,
    },
  ];

  return (
    <div>
      {jobPositions.map((job, index) => {
        return (
          <div className="p-6 poppins-medium rounded-xl  hover:shadow-xl bg-white border border-gray-200 cursor-pointer transition-all  duration-300">
            <div>
              <h1 className=" font-medium text-lg">{job.companyName}</h1>
              <p className=" text-sm text-gray-500">{job.country}</p>
            </div>

            <div>
              <h1 className=" font-bold text-lg my-2">{job.category}</h1>
              <p className=" text-sm text-gray-600">{job.description}</p>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <Badge className={'text-blue-700'} variant="ghost">
                {job.numberOfPositions}
              </Badge>
              <Badge className={'text-[#F83002]'} variant="ghost">
                {job.employmentType}
              </Badge>
              <Badge className={'text-[#7209b7]'} variant="ghost">
                {job.ctc}
              </Badge>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JobCard;

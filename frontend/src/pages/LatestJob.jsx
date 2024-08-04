import { JobCard } from '@/Index';

const LatestJob = () => {
  const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="px-16 py-12 w-full mx-auto poppins-medium">
      <h1 className="text-4xl font-bold ">
        <span className="text-[#6A38C2]">Latest and Top </span>
        Job Openings
      </h1>

      <div className="grid grid-cols-3 gap-4 mt-8 ">
        {randomJobs.slice(0, 6).map((job, index) => (
          <JobCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default LatestJob;

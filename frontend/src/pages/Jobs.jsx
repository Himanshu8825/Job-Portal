import GetAllJobs from '@/hooks/GetAllJobs';
import { FilterCard, Job } from '@/Index';
import { useSelector } from 'react-redux';

const Jobs = () => {
  GetAllJobs();
  const { allJobs } = useSelector((state) => state.job);

  return (
    <div className=" w-full flex  xl:px-14 lg:px-10 md:px-6 px-4 xl:py-8 lg:py-4 py-2 gap-2 ">
      <div className="w-[20%]">
        <FilterCard />
      </div>

      {allJobs.length <= 0 ? (
        <div className='loader mx-auto mt-32'></div>
      ) : (
        <div className="flex-1 overflow-y-auto  pb-5">
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
            {allJobs.map((job) => (
              <div key={job._id}>
                <Job job={job} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;

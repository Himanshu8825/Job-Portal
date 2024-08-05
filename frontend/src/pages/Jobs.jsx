import { FilterCard, Job } from '@/Index';

const Jobs = () => {
  const jobArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <div className=" w-full flex  xl:px-14 lg:px-10 md:px-6 px-4 xl:py-8 lg:py-4 py-2 gap-2 ">
      <div className="w-[20%]">
        <FilterCard />
      </div>

      {jobArray.length <= 0 ? (
        <span>Job Not Found</span>
      ) : (
        <div className="flex-1 overflow-y-auto  pb-5">
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
            {jobArray.map((item, index) => (
              <div key={index}>
                <Job />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;

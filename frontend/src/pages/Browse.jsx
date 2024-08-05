import { Job } from '@/Index';

const Browse = () => {
  const randomJobs = [1, 2, 3, 4, 5, 6];
  return (
    <div className="xl:px-16 lg:px-10 md:px-6 px-4   py-2 poppins-medium">
      <h1 className=" font-bold text-xl my-6">
        Search Results{' '}
        <span className="text-[#7209b7]">({randomJobs.length})</span>
      </h1>

      <div className="grid grid-cols-3 gap-4 ">
        {randomJobs.map(() => {
          return <Job />;
        })}
      </div>
    </div>
  );
};

export default Browse;

import GetAllJobs from '@/hooks/GetAllJobs';
import { FilterCard, Job } from '@/Index';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Jobs = () => {
  GetAllJobs();
  const { allJobs, searchedQuery } = useSelector((state) => state.job);
  const [filterJobs, setFilterJobs] = useState([]);

  useEffect(() => {
    console.log('All Jobs:', allJobs); // Debugging line
    console.log('Searched Query:', searchedQuery); // Debugging line

    if (allJobs && allJobs.length > 0) {
      if (searchedQuery) {
        const filteredJobs = allJobs.filter((job) => {
          return (
            job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
            job.description
              .toLowerCase()
              .includes(searchedQuery.toLowerCase()) ||
            job.location.toLowerCase().includes(searchedQuery.toLowerCase())
          );
        });
        setFilterJobs(filteredJobs);
      } else {
        setFilterJobs(allJobs);
      }
    }
  }, [allJobs, searchedQuery]);

  return (
    <div className="w-full flex xl:px-14 lg:px-10 md:px-6 px-4 xl:py-8 lg:py-4 py-2 gap-2">
      <div className="w-[20%]">
        <FilterCard />
      </div>

      {filterJobs.length === 0 ? (
        <div className="loader mx-auto mt-32">JOB NOT FOUND</div>
      ) : (
        <div className="flex-1 overflow-y-auto pb-5">
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
            {filterJobs.map((job) => (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                key={job._id}
              >
                <Job job={job} />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;

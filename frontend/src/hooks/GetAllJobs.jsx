import { JOB_API } from '@/assets/constant';
import { setAllJobs } from '@/Redux/Slices/jobSlice';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const GetAllJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API}/alljobs `, {
          withCredentials: true,
        });


        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllJobs();
  }, []);
};

export default GetAllJobs;

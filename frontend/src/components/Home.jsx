import GetAllJobs from '@/hooks/GetAllJobs';
import { CategoryCrausel, HeroSection, LatestJob } from '@/Index';

const Home = () => {
  GetAllJobs();
  return (
    <div>
      <HeroSection />
      <CategoryCrausel />
      <LatestJob />
    </div>
  );
};

export default Home;

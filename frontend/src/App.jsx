import { Route, Routes } from 'react-router-dom';
import {
  AdminJobs,
  Applicants,
  Browse,
  Companies,
  CompanySetup,
  CreateCompany,
  DetailsPage,
  Footer,
  Home,
  Jobs,
  Login,
  Navbar,
  PostJob,
  Profile,
  Signup,
} from './Index';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile" element={<Profile />} />

        {/* Admin Route Started */}

        <Route path="/admin/companies" element={<Companies />} />
        <Route path="/admin/companies/create" element={<CreateCompany />} />
        <Route path="/admin/companies/:id" element={<CompanySetup />} />
        <Route path="/admin/jobs" element={<AdminJobs />} />
        <Route path="/admin/jobs/create" element={<PostJob />} />
        <Route path="/admin/jobs/:id/applicants" element={<Applicants />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

import { Route, Routes } from 'react-router-dom';
import {
  Browse,
  DetailsPage,
  Footer,
  Home,
  Jobs,
  Login,
  Navbar,
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
        <Route path='/details/:id' element={<DetailsPage />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

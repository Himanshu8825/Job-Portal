import { Route, Routes } from 'react-router-dom';
import { Browse, Footer, Home, Jobs, Login, Navbar, Signup } from './Index';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

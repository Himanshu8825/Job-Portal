import { Route, Routes } from 'react-router-dom';
import { Home, Login, Navbar, Signup } from './Index';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;

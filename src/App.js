import React from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Explore from './Components/Explore/Explore';
import Footer from './Components/Footer/Footer';
//import Form from './Components/Form/Form';
import Admin from './Components/Admin/Admin';
import SingleCar from './Components/Form/SingleCar/SingleCar';
import UserDashboard from './Components/Dashboard/UserDashboard';
import MyOrder from './Components/Dashboard/MyOrder';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/car/:id" element={<SingleCar />} />
          <Route path="/myorder" element={<UserDashboard />} />
          <Route path="/manageorder" element={<MyOrder />} />




        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
};

export default App;
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRoadStatuses } from "./state/slices/slice";
import UDPAge from "./Pages/UDPAge/UDPAge";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pageNum, perPage, searchQuery, filters, sortOrder, priorityQuery, addFormStatus, accessToken } = useSelector((state) => state.roads);
  useEffect(() => {
    console.log("entering useeffect");
    const timer = setTimeout(() => {
      dispatch(fetchRoadStatuses({ pageNum, perPage, searchQuery, filters, sortOrder, priorityQuery, accessToken }));
    }, 1000);
    return () => clearInterval(timer);
  }, [pageNum, searchQuery, sortOrder, priorityQuery, location, addFormStatus, accessToken]);
  // const isLandingPage =location.pathname==='/'
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/:id" element={<UDPAge />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import { useEffect } from "react";
import Dashboard from "./Pages/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "./Redux/Slices/DashBoardSlice.js";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.Project.status);

  useEffect(() => {
    dispatch(getAllProjects());
    if (status === "rejected") {
      toast.error("Check Your Internet Connection");
    }else{
      toast.success("Fetched Data Successfully");
    }
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;

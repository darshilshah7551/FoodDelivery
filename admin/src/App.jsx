import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import Cat from "./pages/Cat/Addcat";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import Catlist from "./pages/Cat/Catlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="app">
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/Catlist" element={<Catlist />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

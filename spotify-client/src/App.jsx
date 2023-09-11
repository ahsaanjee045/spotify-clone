import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Search from "./pages/Search";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="h-full bg-black text-white p-[10px] flex gap-[10px]">
      {/* <Register /> */}
      <div className="w-1/5 ">
        <Sidebar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

// App.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <div className="">
      <ToastContainer />
      <Header />
      <div className="mx-auto w-80">
        <Outlet />
      </div>
    </div>
  );
};

export default App;

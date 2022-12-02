import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmpCreate from "./EmpCreate";
import EmployeeListing from "./EmployeeListing";
import Detail from "./Detail";
import Edit from "./Edit";

function App() {
  return (
    <>
      <h3 className="text-center mt-5">React js CRUD operation</h3>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeListing />} />
          <Route path="/create-employee" element={<EmpCreate />} />
          <Route path="/detail/:empid" element={<Detail />} />
          <Route path="/edit/:empid" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

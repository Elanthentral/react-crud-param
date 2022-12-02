import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function EmpCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    empname: "",
    email: "",
    phone: "",
    isactive: true,
  });
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevformdata) => ({
      ...prevformdata,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/employee", formData)
      .then(() => {
        alert("saved sucessfully");
        setFormData("");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-4">
        <div className="col col-lg-6 ">
          <div className="card ">
            <div className="card-title">
              <h3 className="text-center mt-2">Create New Employee</h3>
            </div>
            <div className="card-body ">
              <form className="" onSubmit={handleSubmit}>
                <div className=" mb-3">
                  <lable className="form-label">Name</lable>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    name="empname"
                    value={formData.empname}
                    onChange={handleChange}
                  />
                </div>
                <div className=" mb-3">
                  <lable className="form-label">Email</lable>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className=" mb-3">
                  <lable className="form-label">Phone</lable>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {/* <div className=" mb-3">
                  <lable className="form-label">Name</lable>
                  <input
                    className="form-control"
                    placeholder="Enter Name"
                    name="name"
                    checked="formData.isactive"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div> */}
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    id="checktext"
                    checked={formData.isactive}
                    onChange={handleChange}
                    name="isactive"
                    className="form-check-input"
                  />
                  <lable htmlFor="checktext" className="form-check-label">
                    Is Active
                  </lable>
                </div>
                <div>
                  <button className="btn btn-primary" type="submit">
                    Save
                  </button>
                  <Link to="/">
                    <button className="btn btn-danger ms-3" type="submit">
                      Back
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmpCreate;

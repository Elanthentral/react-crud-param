import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const { empid } = useParams();
  const [formData, setFormdata] = useState({
    id: "",
    empname: "",
    phone: "",
    email: "",
  });
  const loaddata = async () => {
    const load = await axios.get("http://localhost:8000/employee/" + empid);
    setFormdata(load.data);
  };
  useEffect(() => {
    loaddata();
  }, []);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormdata((prevformdata) => ({
      ...prevformdata,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/employee/" + empid, formData)
      .then(() => {
        alert("saved sucessfully");

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
              <h3 className="text-center mt-2">Edit Employee</h3>
            </div>
            <div className="card-body ">
              <form className="" onSubmit={handleSubmit}>
                <div className=" mb-3">
                  <lable className="form-label">Id</lable>
                  <input
                    className="form-control"
                    placeholder="Enter Name"
                    name="name"
                    disabled
                    checked="formData.isactive"
                    value={formData.id}
                    onChange={handleChange}
                  />
                </div>
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
                    Update
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
export default Edit;

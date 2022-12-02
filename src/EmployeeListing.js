import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function EmployeeListing() {
  const [empdata, setEmpdata] = useState([]);
  const navigate = useNavigate();
  const loademapdetail = (id) => {
    navigate("/detail/" + id);
  };
  const updateemp = (id) => {
    navigate("/edit/" + id);
  };
  const deleteemp = (id) => {
    if (window.confirm("Do you want to confirm")) {
      axios
        .delete("http://localhost:8000/employee/" + id)
        .then((res) => {
          alert("Removed sucessfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    loadEmpData();
  }, []);
  const loadEmpData = async () => {
    const empData = await axios.get("http://localhost:8000/employee");
    setEmpdata(empData.data);
    console.log(empData.data);
  };
  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title text-center">
          <h3 className="text-center mt-2">Employee Listing</h3>
        </div>
        <div className="card-body">
          <div>
            <Link className="btn btn-success mb-2" to="/create-employee">
              Add New (+){" "}
            </Link>
          </div>
          <table className="table table-border">
            <thead className="bg-dark text-white">
              <tr>
                <td>id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata.map((item, id) => (
                <>
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.empname}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <a
                        className="btn btn-success"
                        onClick={() => updateemp(item.id)}
                      >
                        Edit
                      </a>
                      <a
                        className="btn btn-primary ms-2"
                        onClick={() => deleteemp(item.id)}
                      >
                        Delete
                      </a>

                      <a
                        className="btn btn-danger ms-2"
                        onClick={() => {
                          loademapdetail(item.id);
                        }}
                      >
                        Detail
                      </a>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default EmployeeListing;

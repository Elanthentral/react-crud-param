import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const { empid } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    loaddetail();
  }, []);
  const loaddetail = async () => {
    const details = await axios.get("http://localhost:8000/employee/" + empid);
    setDetail(details.data);
    console.log(details.data, "pass");
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-4">
        <div className="col-lg-6 col">
          <div className="card">
            <h3 className="card-title text-center mt-2">Employee Details</h3>
            <div className="card-body text-center">
              {detail && (
                <>
                  <h4>
                    {detail.empname} ({detail.id})
                  </h4>
                  <p className="mb-0">{detail.phone}</p>
                  <p>{detail.email}</p>
                  <Link to="/" className="btn btn-success">
                    Back
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;

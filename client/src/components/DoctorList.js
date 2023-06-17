import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card m-2"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
      >
        <div className="card-header">
         {doctor.firstName}, {doctor.lastName}
        </div>
        <div className="card-body">
          <p>
            <b>Vaccine Name</b> {doctor.specialization}
          </p>
          <p>
            <b>Available Vaccine</b> {doctor.experience}
          </p>
          <p>
            <b>Fees</b> {doctor.feesPerCunsaltation}
          </p>
          <p>
            <b>Timings</b> {doctor.timings[0]} - {doctor.timings[1]}
          </p>
          <p>
            <b>Address</b> {doctor.address}
          </p>
        </div>
      </div>
    </>
  );
};

export default DoctorList;

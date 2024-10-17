import React from "react";

const ShowFormData = ({ showData }) => {
  return (
    <>
      <div>
        <h2>Submitted Data:</h2>
        <p>First Name: {showData.firstName}</p>
        <p>Last Name: {showData.lastName}</p>
        <p>Email: {showData.email}</p>
        <p>Password: {showData.password}</p>
        <p>Phone Number: {showData.phNumber}</p>
        <p>Country: {showData.country}</p>
        <p>Birth Date: {showData.birthDate}</p>
        <p>Married: {showData.marriageStatus ? "Yes" : "No"}</p>
        <p>Gender: {showData.gender}</p>
        <p>Avatar: {showData.avatar ? data.avatar.name : "No file selected"}</p>
      </div>
    </>
  );
};

export default ShowFormData;

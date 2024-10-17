import React, { useState } from "react";
import ShowFormData from "./ShowFormData";

let initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phNumber: "",
  country: "",
  birthDate: "",
  avatar: "",
  marriageStatus: false, // default
  gender: "",
};

const Form = ({ handleForm }) => {
  const [formState, setFormState] = useState(initialValue);
  const [data, setData] = useState(false);
  const handleChange = (event) => {
    console.log(event.target);
    const { name, value, checked, type, files } = event.target;

    if (type === "checkbox") {
      setFormState({ ...formState, [name]: checked });
    }
    if (type === "file") {
      setFormState({ ...formState, avatar: files[0] });
    } else {
      setFormState({ ...formState, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    setData(true);
    handleForm(formState);
    setFormState(initialValue);
  };
  //   setData(initialValue);
  return (
    <>
      <div>
        <form action="post" onSubmit={handleSubmit}>
          <h1>React Form Assignment</h1>
          <div>
            <label htmlFor="">FirstName</label>
            <input
              type="text"
              placeholder="FirstName"
              onChange={handleChange}
              name="firstName"
              value={formState.firstName}
            />
          </div>
          <div>
            <label htmlFor="">LastName</label>
            <input
              type="text"
              placeholder="LastName"
              onChange={handleChange}
              name="lastName"
              value={formState.lastName}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formState.email}
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="password"
              onChange={handleChange}
              name="password"
              value={formState.password}
            />
          </div>
          <div>
            <label htmlFor="">PhoneNumber</label>
            <input
              type="number"
              placeholder="PhoneNumber"
              onChange={handleChange}
              name="phNumber"
              value={formState.phNumber}
            />
          </div>
          <div>
            <label htmlFor="">Country</label>
            <select
              id=""
              onChange={handleChange}
              name="country"
              value={formState.country}
            >
              <option value="">select country</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="India">India</option>
              <option value="Canada">Canada</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Japan">Japan</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
              <option value="Russia">Russia</option>
              <option value="Brazil">Brazil</option>
              <option value="China">China</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Malaysia">Malaysia</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Birth Date</label>
            <input
              type="date"
              onChange={handleChange}
              name="birthDate"
              value={formState.birthDate}
            />
          </div>
          <div>
            <label htmlFor="">Choose Avatar</label>
            <input type="file" onChange={handleChange} name="avatar" />
          </div>
          <div>
            <label htmlFor="">Select if Married</label>
            <input
              type="checkbox"
              onChange={handleChange}
              value="true"
              name="marriageStatus"
              checked={formState.marriageStatus === "true"}
            />
            Marriage Status
          </div>
          <div>
            <label htmlFor="">Choose gender...</label>
            <input
              type="radio"
              onChange={handleChange}
              value="male"
              name="gender"
              checked={formState.gender === "male"}
            />
            Male
            <input
              type="radio"
              onChange={handleChange}
              value="female"
              name="gender"
              checked={formState.gender === "female"}
            />
            Female
            <input
              type="radio"
              onChange={handleChange}
              value="other"
              name="gender"
              checked={formState.gender === "other"}
            />
            Other
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;

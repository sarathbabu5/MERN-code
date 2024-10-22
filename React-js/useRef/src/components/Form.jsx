import React, { useRef } from "react";

const Form = ({ handleForm }) => {
  //   const [data, setData] = useState(false);
  const formRef = useRef({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    phNumber: null,
    country: null,
    birthDate: null,
    avatar: null,
    marriageStatus: null,
    gender: null,
  });
  //   console.log(formRef);
  //   const handleChange = (event) => {
  //     console.log(event.target);
  //     const { name, value, checked, type, files } = event.target;

  //     if (type === "checkbox") {
  //       setFormState({ ...formState, [name]: checked });
  //     }
  //     if (type === "file") {
  //       setFormState({ ...formState, avatar: files[0] });
  //     } else {
  //       setFormState({ ...formState, [name]: value });
  //     }
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formState);
    // setData(true);
    // handleForm(formState);
    // setFormState(initialValue);
    const formData = {
      firstName: formRef.current.firstName.value,
      lastName: formRef.current.lastName.value,
      email: formRef.current.email.value,
      password: formRef.current.password.value,
      phNumber: formRef.current.phNumber.value,
      country: formRef.current.country.value,
      birthDate: formRef.current.birthDate.value,
      avatar: formRef.current.avatar.files[0],
      marriageStatus: formRef.current.marriageStatus.checked,
      gender: formRef.current.gender.value,
    };
    handleForm(formData);
    console.log(formData);
    Object.keys(formRef.current).forEach((key) => {
      if (formRef.current[key].type === "file") {
        formRef.current[key].value = null; // Reset file input
      } else if (formRef.current[key].type === "checkbox") {
        formRef.current[key].checked = false; // Reset checkbox
      } else {
        formRef.current[key].value = null; // Reset other inputs
      }
    });
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
              name="firstName"
              ref={(element) => (formRef.current.firstName = element)}
            />
          </div>
          <div>
            <label htmlFor="">LastName</label>
            <input
              type="text"
              placeholder="LastName"
              name="lastName"
              ref={(element) => (formRef.current.lastName = element)}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              ref={(element) => (formRef.current.email = element)}
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              ref={(element) => (formRef.current.password = element)}
            />
          </div>
          <div>
            <label htmlFor="">PhoneNumber</label>
            <input
              type="number"
              placeholder="PhoneNumber"
              name="phNumber"
              ref={(element) => (formRef.current.phNumber = element)}
            />
          </div>
          <div>
            <label htmlFor="">Country</label>
            <select
              id=""
              name="country"
              ref={(element) => (formRef.current.country = element)}
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
              name="birthDate"
              ref={(element) => (formRef.current.birthDate = element)}
            />
          </div>
          <div>
            <label htmlFor="">Choose Avatar</label>
            <input
              type="file"
              ref={(element) => (formRef.current.avatar = element)}
              name="avatar"
            />
          </div>
          <div>
            <label htmlFor="">Select if Married</label>
            <input
              type="checkbox"
              ref={(element) => (formRef.current.marriageStatus = element)}
              name="marriageStatus"
            />
            Marriage Status
          </div>
          <div>
            <label htmlFor="">Choose gender...</label>
            <input
              type="radio"
              value="male"
              name="gender"
              ref={(element) => (formRef.current.gender = element)}
            />
            Male
            <input
              type="radio"
              value="female"
              name="gender"
              ref={(element) => (formRef.current.gender = element)}
            />
            Female
            <input
              type="radio"
              value="other"
              name="gender"
              ref={(element) => (formRef.current.gender = element)}
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

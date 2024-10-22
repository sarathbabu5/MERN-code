import React, { useState } from "react";
import Form from "./components/Form";
import ShowFormData from "./components/ShowFormData";

const App = () => {
  const [formData, setFormData] = useState(null);
  const handleForm = (data) => {
    setFormData(data);
  };
  return (
    <div>
      <Form handleForm={handleForm} />
      {formData && <ShowFormData showData={formData} />}
    </div>
  );
};

export default App;

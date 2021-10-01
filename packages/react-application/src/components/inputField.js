import { useDispatch } from "react-redux";
import React, { useState } from "react";

import setName from "../redux/actions/formstateActions";

const InputFieldApp = () => {
  const [name, updateName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(setName(name));
    updateName("");
  };
  return (
    <div>
      InputField Application
      <br />
      <input
        type="text"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => updateName(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default InputFieldApp;

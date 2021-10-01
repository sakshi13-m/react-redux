import { useDispatch, connect } from "reactRedux";
import React, { useState } from "react";

import setName from "./redux/actions";

const InputField = ({ children }) => {
  const [name, updateName] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(setName(name));
    updateName("");
  };
  return (
    <div>
      {children}
      <br />
      InputField library
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

export default connect(null)(InputField);

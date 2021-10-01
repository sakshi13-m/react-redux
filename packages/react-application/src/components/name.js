import React, { useState } from "react";
import { store } from "../redux/store";

const NameComponent = () => {
  const [updatedName, setUpdatedName] = useState("User");
  const handleChange = () => {
    const currentState = store.getState().formState.name;
    setUpdatedName(currentState);
};
store.subscribe(handleChange)
console.log(store.getState());
  return <div className='nameDiv'>{`Hello ${updatedName}`}</div>;
};
export default NameComponent;

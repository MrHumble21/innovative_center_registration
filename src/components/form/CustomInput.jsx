import React from "react";

const CustomInput = ({ label, type, value, handleChange }) => {
  return (
    <div className="form-group">
      <label for="exampleInputEmail1" className="form-label mt-2 ">
        {label}
      </label>
      <input
        type={type}
        value={value}
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        onChange={handleChange}
      />
    </div>
  );
};

export default CustomInput;

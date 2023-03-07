import React, { useState } from "react";
import CustomInput from "../form/CustomInput";
import Lottie from "react-lottie";
import datepicker from "./date_picker.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: datepicker,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const CreateExam = () => {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  return (
    <div d-flex>
      <div className="col-md-6 col-sm-12 col-lg-6 d-flex justify-content-center align-items-center">
        <Lottie options={defaultOptions} height={250} width={250} />
      </div>
      <CustomInput
        type={"text"}
        label={"Exam Title"}
        value={title}
        htmlfor={"exampleInputEmail1"}
        aria_describedly={"emailHelp"}
        labelClass={"form-label mt-2"}
        className={"form-control"}
        id={"exampleInputEmail1"}
        handlechange={(e) => {
          console.log(e.target.value);
          setTitle(e.target.value);
        }}
      />
      <label>Start date </label>
      <input
        type="datetime-local"
        className="date-picker-input m-2"
        name=""
        id=""
        value={start}
        onChange={(event) => {
          console.log(event.target.value);
          setStart(event.target.value);
        }}
      />
      <label>End date </label>
      <input
        type="datetime-local"
        className="date-picker-input m-2"
        name=""
        id=""
        value={end}
        onChange={(event) => {
          console.log(event.target.value);
          setEnd(event.target.value);
        }}
      />
    </div>
  );
};

export default CreateExam;

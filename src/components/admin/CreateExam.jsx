import React, { useState } from "react";
import CustomInput from "../form/CustomInput";
import Lottie from "react-lottie";
import datepicker from "./cal.json";
import { ExamNames } from "../../constants/exams";
import axios from "axios";

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
  const [price, setPrice] = useState(0);
  const [end, setEnd] = useState("");

  const create_exam = async () => {
    await axios
      .post("/api/exam", {
        exam_type: title,
        start_date: start,
        price: price,
        end_date: end,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container  min-vh-100 d-flex align-items-center justify-content-between py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-content-center flex-column ">
            <div className="container">
              <h1 className="text-center">Create Exam</h1>
              <Lottie options={defaultOptions} height={300} width={300} />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6  ">
            <div className="container">
              <label htmlFor="type">Exam type </label>

              <select
                id="type"
                onChange={(e) => {
                  setTitle(e.target.value);
                  console.log(e.target.value);
                }}
                className="form-select my-2"
                aria-label="Default select example"
              >
                {ExamNames.map((name, i) => (
                  <option key={i} value={name.name}>
                    {name.name}
                  </option>
                ))}
              </select>
              <label htmlFor="start">Start date </label>
              <input
                type="date"
                className="date-picker- my-2 form-control-feedback form-control p-2"
                name=""
                id="start"
                value={start}
                onChange={(event) => {
                  console.log(event.target.value);
                  setStart(event.target.value);
                }}
              />
              <label>End date </label>
              <input
                type="date"
                className="date-picker- my-2 form-control-feedback form-control p-2"
                name=""
                id=""
                value={end}
                onChange={(event) => {
                  console.log(event.target.value);
                  setEnd(event.target.value);
                }}
              />

              <label>Price (UZS)</label>
              <input
                type="number"
                className="date-picker- my-2 form-control-feedback form-control p-2"
                name=""
                id=""
                value={price}
                onChange={(event) => {
                  console.log(event.target.value);
                  setPrice(event.target.value);
                }}
              />
              <div className="d-grid my-3 gap-2">
                <button
                  style={{
                    borderRadius: "10px",
                  }}
                  className="btn btn-primary"
                  type="button"
                  onClick={create_exam}
                >
                  Create Exam +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateExam;

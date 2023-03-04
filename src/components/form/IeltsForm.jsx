import React, { useState } from "react";
import Lottie from "react-lottie";
import { regions } from "../../constants/regions";
import form_animation from "./form_animation.json";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { BiImageAdd } from "react-icons/bi";
import { app_colors } from "../../utils/colors";
import CustomInput from "./CustomInput";
import CustomRadioButton from "./CustomRadioButton";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: form_animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function IeltsForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
    };
    console.log(data);

    setFirstName("");
    setLastName("");
    setPhone("");
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "#F9F8FB",
          minHeight: "100vh",
        }}
        className="container-fluid p-5 d-inline-flex justify-content-center align-items-center"
      >
        <div
          className="container bg-white custom-shadow d-inline-flex justify-content-center align-items-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div className="container p-3">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-lg-6 d-flex justify-content-center align-items-center">
                <Lottie options={defaultOptions} height={350} width={350} />
              </div>
              <div className="col-md-6 col-sm-12 col-lg-6">
                <h2
                  style={{
                    fontWeight: "bolder",
                  }}
                >
                  Register for IELTS Mock
                </h2>
                <CustomInput
                  type={"text"}
                  label={"First Name (per PASSPORT)"}
                  value={firstName}
                  htmlfor={"exampleInputEmail1"}
                  aria_describedly={"emailHelp"}
                  labelClass={"form-label mt-2"}
                  className={"form-control"}
                  id={"exampleInputEmail1"}
                  handlechange={(e) => {
                    console.log(firstName);
                    setFirstName(e.target.value);
                  }}
                />
                <CustomInput
                  type={"text"}
                  label={"Last Name (per PASSPORT)"}
                  value={lastName}
                  htmlfor={"exampleInputEmail1"}
                  aria_describedly={"emailHelp"}
                  labelClass={"form-label mt-2"}
                  className={"form-control"}
                  id={"exampleInputEmail1"}
                  handlechange={(e) => {
                    console.log(lastName);
                    setLastName(e.target.value);
                  }}
                />

                <div className="form-group">
                  <label htmlFor="exampleSelect1" className="form-label mt-2 ">
                    Phone Number
                  </label>
                  <PhoneInput
                    className="form-control"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={setPhone}
                  />
                </div>
                <div className=" d-flex justify-content-start mt-2">
                  <button
                    type="button"
                    className="custom-btn text-white my-2 "
                    style={{
                      backgroundColor: app_colors.violet,
                      borderRadius: "10px",
                    }}
                    onClick={handleSubmit}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IeltsForm;

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
import { useParams } from "react-router";
import IeltsForm from "./IeltsForm";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: form_animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function CustomForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passport, setPassport] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const { exam } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termsAndConditions) {
      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        passport: passport,
        dateOfBirth: dateOfBirth,
        phone: phone,
        image: image,
        gender: gender,
      };
      console.log(data);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassport("");
      setDateOfBirth("");
      setPhone("");
      setImage("");
      setGender();
    } else {
      alert("Please read and accept Terms & Conditions");
    }
  };

  return (
    <>
      {exam !== "14" ? (
        <div
          style={{
            backgroundColor: "#F9F8FB",
          }}
          className="container-fluid p-5"
        >
          <div className="container bg-white custom-shadow  ">
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
                    Register for an exam
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
                  <CustomRadioButton
                    label={"Gender"}
                    handlechange={(e) => {
                      console.log(gender);
                      setGender(e.target.value);
                    }}
                  />

                  <CustomInput
                    type={"text"}
                    label={"Passport or ID Number (e.g. AA1234567)"}
                    value={passport}
                    htmlfor={"exampleInputEmail1"}
                    aria_describedly={"emailHelp"}
                    labelClass={"form-label mt-2"}
                    className={"form-control"}
                    id={"exampleInputEmail1"}
                    handlechange={(e) => {
                      console.log(passport);
                      setPassport(e.target.value);
                    }}
                  />

                  <CustomInput
                    type={"date"}
                    label={"Date of birth"}
                    value={dateOfBirth}
                    htmlfor={"exampleInputEmail1"}
                    aria_describedly={"emailHelp"}
                    labelClass={"form-label mt-2"}
                    className={"form-control"}
                    id={"exampleInputEmail1"}
                    handlechange={(e) => {
                      console.log(dateOfBirth);
                      setDateOfBirth(e.target.value);
                    }}
                  />

                  <div className="form-group">
                    <label
                      htmlFor="exampleSelect1"
                      className="form-label mt-2 "
                    >
                      Select Region
                    </label>
                    <select
                      className="form-select"
                      id="exampleSelect1"
                      onChange={() => {}}
                    >
                      <option></option>

                      {regions.map((region, i) => (
                        <option key={i} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="exampleSelect1"
                      className="form-label mt-2 "
                    >
                      Phone Number
                    </label>
                    <PhoneInput
                      className="form-control"
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={setPhone}
                    />
                  </div>
                  <CustomInput
                    type={"email"}
                    label={"Email"}
                    value={email}
                    htmlfor={"exampleInputEmail1"}
                    aria_describedly={"emailHelp"}
                    labelClass={"form-label mt-2"}
                    className={"form-control"}
                    id={"exampleInputEmail1"}
                    handlechange={(e) => {
                      console.log(email);
                      setEmail(e.target.value);
                    }}
                  />
                  <h6 className="mt-2 ">Attach passport</h6>
                  <CustomInput
                    htmlfor={"image_upload"}
                    type={"file"}
                    className={"visually-hidden"}
                    id={"image_upload"}
                    handlechange={(e) => {
                      setImage(e.target.value);
                    }}
                    value={image}
                    label={<BiImageAdd size={80} color={app_colors.violet} />}
                  />
                  <div className="container">
                    <fieldset className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          onChange={(e) => {
                            setTermsAndConditions(e.target.checked);
                            console.log(termsAndConditions);
                          }}
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          I have read and agreed on <b>Term and Contions</b>
                        </label>
                      </div>
                    </fieldset>
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
      ) : (
        <IeltsForm />
      )}
    </>
  );
}

export default CustomForm;

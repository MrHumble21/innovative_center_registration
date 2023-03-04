import React from "react";
import { Link } from "react-router-dom";
import { app_colors } from "../../utils/colors";
const ExamCard = ({ title, description, image, borderColor, link }) => {
  return (
    <Link to={`/${link}`}>
      <div
        style={{
          borderTop: "4px solid" + borderColor,
          borderRadius: "5px 5px 0 0",
          minHeight: "220px",
          paddingTop: "20px",
          paddingBottom: "10px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
        className="my-3 grow bg-white px-2 d-flex flex-column justify-content-between "
      >
        <div className="">
          <h2 style={{ color: borderColor }}>{title}</h2>
          <p style={{ color: app_colors.text }}>{description}</p>
        </div>
        <div className="m-0 container d-flex justify-content-end">
          <img src={image} alt="" />
        </div>
      </div>
    </Link>
  );
};

export default ExamCard;
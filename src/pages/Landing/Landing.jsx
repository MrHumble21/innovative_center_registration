import React from "react";
import ExamCard from "../../components/exam box/ExamCard";
import { ExamNames } from "../../constants/exams";
import { border_colors } from "../../constants/border_colors";
import { image_links } from "../../constants/imageLinks";
import innovative from "./innovativ.webp";
const Landing = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
      className="container-fluid gradient-bg"
    >
      <div className="container d-flex justify-content-center">
        <img className="innovative-logo" src={innovative} alt="" />
      </div>

      <div className="container py-4">
        <div className="row">
          {ExamNames.map((e, i) => {
            var color =
              border_colors[Math.floor(Math.random() * border_colors.length)];
            var randomImage =
              image_links[Math.floor(Math.random() * image_links.length)];

            return (
              <div key={i} className="col-sm-12 col-md-4 col-lg-4">
                <ExamCard
                  title={e.name}
                  image={randomImage}
                  link={e.id}
                  info={e.info}
                  id={e.id}
                  description={"description..."}
                  borderColor={color}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Landing;

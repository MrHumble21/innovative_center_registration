import React from "react";
import ExamCard from "../../components/exam box/ExamCard";
import { ExamNames } from "../../constants/exams";
import { border_colors } from "../../constants/border_colors";
import { image_links } from "../../constants/imageLinks";

const Landing = () => {
  return (
    <div
      style={{
        backgroundColor: "#F9F8FB",
        minHeight: "100vh",
      }}
      className="container-fluid"
    >
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

import React from "react";
import { Section } from "./Testmonial.elements";
import { ColorData, Tdata } from "../../App2";

const Testimonial = () => {
  return (
    <div>
    <Section id="testimonials">
      <div className="container">
        <div className="title">
          <h1>
            <span
            style={{ color: ColorData.textDark}}
            >{Tdata.title}</span>
          </h1>
        </div>
        <div className="testimonials">
		{Tdata.blocks.map((el, index) => (
          <div className="testimonial" key={index}>
            <div className="image">
              <img src= {el.imgURL} alt = "" />	 
            </div>
            <h3 
            style={{ color: ColorData.textDark}}
            >
              {el.heading}
            </h3>
            <p
            style={{ color: ColorData.textDark}}
            >
              {el.description}
            </p>
          </div>
		  ))}
        </div>
      </div>
    </Section>
    </div>
  );
};

export default Testimonial;


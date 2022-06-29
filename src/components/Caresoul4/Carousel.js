import React from "react";
import { Cdata, ColorData } from "../../App2";
import { Section } from "./Carousel.elements";

export default function Products() {
  return (
    <div
    style={{background: ColorData.secondary}}
    >
    <Section id="products"
    >
      <div className="title">
        <h1
        style={{color: ColorData.textDark}}
        >
         {Cdata.title}
        </h1>
      </div>
      <div className="products">
        {Cdata.blocks.map((product ,index) => (
            <div className="product" key= {index}>
              <div className="image">
                <img src={product.imgURL} alt="" />
              </div>
              <h2
              style={{color: ColorData.textDark}}
              >{product.heading}</h2>
              <h3
              style={{color: ColorData.tertiaryOne}}
              >{product.subHeading}</h3>
              <p
              style={{color: ColorData.textDark}}
              >{product.description}</p>
              <button onClick={() => window.location.href=`https://${product.button.btnURL}`}
              style={{ background: ColorData.tertiaryOne,color: ColorData.textLight}}
              >{product.button.text}</button>
            </div>
        ))}
      </div>
    </Section>
    </div>
  );
}


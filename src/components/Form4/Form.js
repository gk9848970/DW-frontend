import React from "react";
import { ColorData, FormData } from "../../App2";
import { ContactSection, Title ,Form , Row } from "./Form.elements"; 

const Contact = () => {
  return (
    <ContactSection id="contact"
    style={{background: ColorData.tertiaryTwo}}	
    >
      <Title
      style={{color: ColorData.textLight}}	
      >{FormData.title}</Title>
      <Form>
        <Row>
          <input name="name" type="text" placeholder="your name" />
          <input
            name="email"
            type="email"
            placeholder="email id"
          />
        </Row>
        <Row>
          {FormData.blocks.map((el, index) => (
          <div key={index}>
             <input name={el.value} type={el.type} placeholder={el.placeholderText}  style={{ width: '445px' }} />
          </div>
          ))}
        </Row>
        <textarea
          name=""
          id=""
          cols="30"
          rows="2"
          placeholder={FormData.placeholder}
        ></textarea>
        <div style={{ margin: "0 auto" }}>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            style={{ background: ColorData.secondary,color: ColorData.textDark}}	
          >
            {FormData.buttonText}
          </button>
        </div>
      </Form>
    </ContactSection>
  );
};

export default Contact;
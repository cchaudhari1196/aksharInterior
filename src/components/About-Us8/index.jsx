/* eslint-disable @next/next/no-img-element */
import React from "react";
import aboutData from "../../data/about-us1.json"

 const AboutUs8 = () => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 exp">
            <div className="mb-50">
              <h6 className="fw-100 text-u ls10 main-color mb-10">About Us</h6>
              <h3 className="fw-400 text-u ls4">Our Comapny</h3>
            </div>
            <div className="box">
              <h4 className="fz-80 fw-600 ls1 mb-20">
                {aboutData.title.first}
              </h4>
              <p>
                {aboutData.content}
              </p>
            </div>
          </div>
          <div className="col-lg-7 img">
            <img src={aboutData.image} alt="" />

            <div className="feat mt-30">
              {aboutData.numbers.map(a => {
                <div className="item" key={a.number}>
                  <div>
                    <h5>{a.number}</h5>
                    <h6>{a.name}</h6>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs8;
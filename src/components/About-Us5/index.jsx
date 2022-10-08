import React from "react";
import Split from "../Split";
import aboutData from "../../data/about-us1.json";

const AboutUs5 = () => {
  return (
    <section className="about2 section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="main-tit">
              <Split>
                <h2 className="wow words chars splitting" data-splitting>
                  {aboutData.title.first}
                </h2>
              </Split>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                {aboutData.content}
                </p>
              </Split>
              <div className="exp">
                <h3 className="">{aboutData.exp.nmb}</h3>
                <h5 className=" valign">
                  <Split>
                    <span className="wow words chars splitting" data-splitting>
                      years <br /> Of Experiences
                    </span>
                  </Split>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid office">
        <div className="row">
          <div className="col-lg-3 lg-padding">
            <div
              className="item bg-img wow imago"
              style={{ backgroundImage: "url(/assets/img/b0.jpg)" }}
            ></div>
          </div>
          <div className="col-lg-6 lg-padding">
            <div
              className="item bg-img wow imago"
              style={{ backgroundImage: "url(/assets/img/b00.jpg)" }}
            ></div>
          </div>
          <div className="col-lg-3 lg-padding">
            <div
              className="item bg-img wow imago"
              style={{ backgroundImage: "url(/assets/img/b000.jpg)" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs5;

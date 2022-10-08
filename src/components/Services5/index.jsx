import React from "react";
import Link from "next/link";
import serviceData from "../../data/services2.json"

const Services5 = () => {
  return (
    <section className="services-col section-padding">
      <div className="container">
        <div className="main-header text-center">
          <h3>Best Features.</h3>
          <div className="tex-bg">Services</div>
        </div>
        <div className="row bord-box wow fadeInUp">
          {serviceData.map(ser => (
             <div key={ser.id} className="col-lg-4 col-md-6 item-bx">
                <span className={ser.icon ? "icon "+ser.icon : "icon flaticon-home"}></span>
                <h6 className="mb-20">{ser.title}</h6>
                <p>
                  {ser.content}
                </p>
                <Link href="/about">
                  <a className="more mt-30">Read More</a>
                </Link>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services5;

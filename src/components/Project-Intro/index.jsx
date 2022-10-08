import React from "react";
import Link from "next/link";

const ProjectIntro = ({projectDetails}) => {
  const {description,client,date,categories,tags} = projectDetails
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>introduction</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
            <div className="text">
              <p>
                {description}
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Client</h6>
              <p>
                <Link href="#">{client}</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>{date}</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>
                {categories.map(cat=>(<Link key={cat} href="#"><a> {cat},&nbsp;</a></Link>))}
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
                {tags.map(cat=>(<Link key={cat} href="#"><a> {cat},&nbsp; </a></Link>))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;

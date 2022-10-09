/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import projects from '../../data/project-details.json'


const WorkWithoutFilter = ({ vis }) => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-md-6 items mt-0">
              <div className="main-header mb-0">
                <h3>Works.</h3>
              </div>
            </div>
            {projects.map(project => (
              <div className="col-md-6 items" key={project.pid}>
                <div className="item">
                  <div className="img">
                    <img src={project.headerImage} alt="" />
                  </div>
                  <div className={`cont ${vis ? "vis" : ""}`}>
                    {project.tags.map(tag=>(
                      <span key={tag}>{tag}</span>
                    ))}
                    <h5>
                      <Link href={`/project-details/${project.pid}`}>{project.title}</Link>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkWithoutFilter;

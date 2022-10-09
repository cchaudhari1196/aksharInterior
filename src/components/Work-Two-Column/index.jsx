/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import projects from '../../data/project-details.json'

export const WorkTwoColumn = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works filter-img section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-lg-6 items mt-0 interior commercial residential">
              <div className="section-head mb-0">
                <h3>Works</h3>

                <div className="filtering mt-30">
                  <div className="filter">
                    <span data-filter="*" className="active">
                      All
                    </span>
                    <span data-filter=".interior">Interior</span>
                    <span data-filter=".commercial">Commercial</span>
                    <span data-filter=".residential">Residential</span>
                  </div>
                </div>
              </div>
            </div>
            {projects.map(project=>(
              <div className={"col-lg-6 items " + project.categories.join(" ")} key={project.pid}>
                <div className="item">
                  <div className="img">
                    <img src={project.headerImage} alt="" />
                  </div>
                  <div className="cont vis">
                    <h5>
                      <Link href={"/project-details/"+project.pid}>{project.title}</Link>
                    </h5>
                    {project.tags.map(tag=>(
                      <span key={tag}>{tag}</span>
                    ))}
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

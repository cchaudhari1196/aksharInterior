import { useRouter } from 'next/router'
import React, {lazy, useState} from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import ProjectIntro from '../../components/Project-Intro'
import NextProject from '../../components/Next-Project'
import ProjectVideo from '../../components/Project-Video'
import projects from '../../data/project-details.json'

const ProjectDetails = () => {
  const router = useRouter()
  const [projectDetails,setProjectDetails] = React.useState(projects[0]);
  const indexAlternatioin = [0,3,6,9,12,15,18,21,24,27,30,33];

  React.useEffect(() => {
    document.querySelector('body').classList.add('index3');
    console.log(router.isReady)
    console.log(projectDetails)
    if(router.isReady){
      const { pid } = router.query
      console.log(pid)
      setProjectDetails(projects.find(p => p.pid===parseInt(pid)))
      console.log(projectDetails)
    }
  }, [router.isReady,projectDetails])

  return (
    <MainLayout>
      <PageHeader
        title={projectDetails.title}
        fullPath={[
          { id: 1, name: 'home', url: '/' },
          { id: 2, name: 'portfolio', url: '/work' },
          { id: 3, name: 'project details', url: '/project-details' },
        ]}
        image={projectDetails.headerImage}
      />
      <ProjectIntro projectDetails={projectDetails}/>
      <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            {projectDetails.images.map((img,index) => (
              indexAlternatioin.includes(index) ?
              <a key={index} href="#" className="col-lg-4 col-xl-3 col-md-12">
                <img alt="" src={img} />
              </a> 
              : 
              <a key={index} href="#" className="col-lg-4 col-xl-3 col-md-6">
                <img alt="" src={img} />
              </a> 
            ))}
          </div>
        </div>
      </section>

      <ProjectVideo videoUrl={projectDetails.videoUrl} videoId={projectDetails.videoId}/>

      <NextProject />
    </MainLayout>
  )
}

export default ProjectDetails

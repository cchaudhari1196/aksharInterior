import { useRouter } from 'next/router'
import React, {lazy} from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import ProjectIntro from '../../components/Project-Intro'
import NextProject from '../../components/Next-Project'
import ProjectVideo from '../../components/Project-Video'
import projects from '../../data/project-details.json'

const ProjectDetails = () => {
  const router = useRouter()
  const { pid } = router.query
  const projectDetails = projects[0];

  const indexAlternatioin = [0,3,6,9,12,15,18,21,24,27,30,33];

  if(pid){
    projectDetails = projects.find(p => p.pid=pid)
  }
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
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

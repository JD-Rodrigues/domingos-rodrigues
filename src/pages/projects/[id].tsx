

import { IGetStaticProps, IProjectProps, TProject } from "../../types"
import data from "../../../public/database_projects"


export const getStaticPaths = () => {
  
  const paths = data.map((project)=>{
    return {params:{id:project.id}}
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = ({ params }:IGetStaticProps) => {
  const [project] = params && data.filter((item)=>item.id === params.id)
  console.log(project)
  return { 
    props: { project } 
  }
}


const Project =  ({project}:IProjectProps) => {
  return(
    <>
      <img src={project.logo} />
      <h1>{project.name}</h1>
      <p>{project.about}</p>
      <p>{project.objective}</p>
    </>

    
  )
}



export default Project
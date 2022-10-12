import Link from 'next/link'
import { IHomeProps, TProject } from '../types'
import {server} from '../../config/index.js'


export const getStaticProps = async () => {
  
  
  const data = await fetch(`${server}/database_projects.json`)
  const dataJson = await data.json()
  const projects = await dataJson.projects
  return {
    props: {
      projects, 
    }
  }
}

const Home = ({projects}:IHomeProps) => {

  return (
    <div>
      <h1>Portfólio</h1>
      <ul>
      {projects && projects.map((project:TProject)=>{
        return(
          <li key={project.name}><Link href="/projeto"><h3>{project.name}</h3></Link></li>
        )
      })}
      </ul>
      
    </div>
  )
}

export default Home

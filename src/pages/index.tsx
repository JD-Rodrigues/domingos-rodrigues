import Link from 'next/link'
import { IHomeProps, TProject } from '../types'
import {server} from '../../config/index.js'
import database from '../../public/database_projects'



export const getStaticProps = () => { 
  
  const data = database
  return {
    props: {
      data,  
    }
  }
}

const Home =  ({data}:IHomeProps) => {

  return (
    <div>
      <h1>Portfólio</h1>
      <ul>
      { data && data.map((project:TProject)=>{
        return(
          <li key={project.name}><Link href={`/projects/${project.id}`}><h3>{project.name}</h3></Link></li> 
        )
      })}
      </ul>
      
    </div>
  )
}

export default Home

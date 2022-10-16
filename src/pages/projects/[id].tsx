
import styles from "./[id].module.css"
import { IGetStaticProps, IProjectProps, TProject } from "../../types"
import data from "../../../public/database_projects"
import Link from "next/link"
import Image from "next/image"


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
  return { 
    props: { project } 
  }
}


const Project =  ({project}:IProjectProps) => {
  return(
    <div className={styles.project}>
      <header className={styles.header}>
        <nav>
          <Link href={"/"}><div>Home</div></Link>
        </nav>
      <h1>{project.name}</h1>
      <p>{project.about}</p>
      <p>{project.objective}</p>
      <p>{`© ${project.year} Domingos Rodrigues`}</p>
      <a href="#">Ver online</a>
      <a className={styles.go__next__section}></a>
    </header>
    <main>
      <section className={styles.screenshots}>
        <img className={styles.demo} src={project.demo} />
        <ul className={styles.shotlist}>
        {project.screenshots.tablet && <img className={styles.shot__tablet} src={project.screenshots.tablet} />}
          {project.screenshots.smartphone.map((shot:string)=>{
            return(
              <li className={styles.shot} key={shot}><img src={shot} /></li>
            )
          })}
        </ul>
      </section>
    </main>
    </div>
    

    
  )
}



export default Project
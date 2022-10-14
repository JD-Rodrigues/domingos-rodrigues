import Link from 'next/link'
import { IHomeProps, TProject } from '../types'
import database from '../../public/database_projects'
import styles from "./Home.module.css"



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
    <div className={styles.home}>
      <header>
        <div className={`${styles.cover} ${styles.cover__image}`}>
        </div>
        <div className={`${styles.cover} ${styles.cover__title}`}>
          <h1><span className={styles.first__name}>domingos</span>rodrigues</h1>
          <div className='header__arrow__down'></div>
        </div>
      </header>
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

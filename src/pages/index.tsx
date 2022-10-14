import Link from 'next/link'
import { IHomeProps, TProject } from '../types'
import database from '../../public/database_projects'
import styles from "./Home.module.css"
import arrowDown from "../../public/images/logos/arrow-down.png"
import cover from "../../public/images/backgrounds/workspace.jpg"
import Image from 'next/image'



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
        <div className={`${styles.cover} ${styles.cover__image} ${styles.container} ${styles.background__section}`}>
        </div>
        <div className={`${styles.cover} ${styles.cover__title} ${styles.container}`}>
          <h1><span className={styles.first__name}>domingos</span>rodrigues</h1>
          <div className={styles.header__arrow__down}><Image alt='Clique aqui para ser direcionado para a próxima seção' src={arrowDown} /></div>
        </div>
      </header>
      <main>
        <section className={`${styles.section__portfolio__bg__img} ${styles.container} ${styles.background__section}`}>
          
          <div className={`${styles.section__portfolio__bg__gradient} ${styles.container} ${styles.background__section}`}>
            <nav>
              <h1>PORTFÓLIO</h1>
              <ul className={styles.projects__list}>
              { data && data.map((project:TProject)=>{
                return(
                  <li key={project.name}><Link href={`/projects/${project.id}`}><h3 className={styles.project__name}>{project.name}</h3></Link></li> 
                )
              })}
              </ul>
            </nav>
          </div>
        </section>
      </main>
      
    </div>
  )
}

export default Home

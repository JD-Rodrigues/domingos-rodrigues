import Link from 'next/link'
import { IHomeProps, TProject } from '../types'
import database from '../../public/database_projects'
import styles from "./Home.module.css"
import arrowDown from "../../public/images/logos/arrow-down.png"
import profilePic from "../../public/images/profile-pic.png"
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
          <div className={`${styles.wave} ${styles.wave__main__color__descending } ${styles.background__section}`}>
          </div>
        </section>
        <section className={`${styles.container} ${styles.section__about__me}`}>
          <div className={styles.about__me__text}>
              <h2 className={styles.about__me__title}>SOBRE MIM</h2>
              <p>
              Eu sou Domingos Rodrigues, programador front-end, baiano, viciado em desenvolver soluções. Sou movido e orientado por desafios.
              </p>
              <br />
              <p>
              Trabalho com construção de interfaces e aplicações para a web no ecossistema Javascript, prezando por um código limpo, performático e otimizado para os motores de busca.
              </p>
              <br />
              <p>
              Possuo habilidades de comunicação e transmissão de informações, adquiridas em minha carreira anterior, como professor. Isso me possibilita contribuir com os demais profissionais da equipe, reduzindo o tempo gasto para compreender detalhes sobre o processo de desenvolvimento.
              </p>
          </div>
          <div className={styles.profile__pic__wrapper} >
            <div className={styles.profile__pic}>
              <Image src={profilePic} />
            </div>
          </div>
          <div className={`${styles.wave} ${styles.wave__light__ascending } ${styles.background__section}`}>
          </div>
        </section>
        <section className={`${styles.container} ${styles.section__techs}`}>
          <div className={styles.techs__text}>
            <h2 className={styles.techs__title}>TECNOLOGIAS</h2>
            <p>
              Tenho trabalhado com estas tecnologias. Além disso, estou sempre atento às ferramentas que o mercado está utilizando e incorporando-as ao meu trabalho. Aprendizado contínuo e evolução constante.
            </p>
            <ul className={styles.techs__list}>

            </ul>
          </div>
        </section>
      </main>
      
    </div>
  )
}

export default Home

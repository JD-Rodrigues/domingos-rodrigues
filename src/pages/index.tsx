import Link from 'next/link'
import { IHomeProps, TProject } from '../types'
import database from '../../public/database_projects'
import styles from "./Home.module.css"
import Image from 'next/image'
import arrowDown from "../../public/images/logos/arrow-down.png"
import githubLogo from "../../public/images/logos/github-logo-thin.svg"
import linkedinLogo from "../../public/images/logos/linkedin-logo-thin.svg"
import instagramLogo from "../../public/images/logos/instagram-logo-thin.svg"
import whatsappLogo from "../../public/images/logos/whatsapp-logo-thin.svg"
import profilePic from "../../public/images/profile-pic.png"
import  Head  from 'next/head'
import { NextSeo } from 'next-seo'





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
    <> 
      <NextSeo 
        title='Domingos Rodrigues - Desenvolvedor Front-end'
        description='Conheça meu trabalho - veja a coleção de projetos que tenho desenvolvido.'
        canonical='https://domingos-rodrigues.vercel.app/'
        openGraph={{
          locale: 'pt_BR', 
          siteName: 'Domingos Rodrigues',
          url: 'https://domingos-rodrigues.vercel.app/',
          title: 'Domingos Rodrigues - Desenvolvedor Front-end',
          description: 'Conheça meu trabalho - veja a coleção de projetos que tenho desenvolvido.',
          images: [
            {
              url: 'https://github.com/JD-Rodrigues/domingos-rodrigues/blob/main/public/images/social/site-cover.jpg?raw=true',
              width: 800,
              height: 600,
              alt: 'Site do desenvolvedor web Domingos Rodrigues',
              type: 'image/png',
            }
          ]
        }}
  
        twitter={{
          handle: '@JDev_Oficial',
          site: '@JDev_Oficial',
          cardType: 'summary_large_image',
        }}
      />
      <div className={styles.home}>
        <header id='top' className={`${styles.cover} ${styles.cover__image} ${styles.container} ${styles.background__section}`} >
          <div className={`${styles.cover} ${styles.cover__title} ${styles.container}`}>
            <div>
              <h1><span className={styles.first__name}>domingos</span>rodrigues</h1>
              <p className={styles.career}>DESENVOLVEDOR<span className={styles.speciality}>FRONT-END</span></p>
            </div>     
            <div className={styles.arrow__wrapper}>
              <a className={styles.header__arrow__down} href={"#portfolio__section"}><Image alt='Clique aqui para ser direcionado para a próxima seção' src={arrowDown} /></a>  
            </div>            
          </div>
        </header>
        <main>
          <section className={`${styles.section__portfolio__bg__img} ${styles.background__section}`} id="portfolio__section">
            
            <div className={`${styles.section__portfolio__bg__gradient} ${styles.container} ${styles.background__section}`}>
              <nav>
                <h1 className={`${styles.title}`}>PORTFÓLIO</h1>
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
                <h2 className={styles.title}>SOBRE MIM</h2>
                <p>
                Eu sou Domingos Rodrigues, programador front-end, baiano, viciado em desenvolver soluções. Sou movido e orientado por desafios.
                </p>
                <br />
                <p>
                Trabalho com construção de interfaces e aplicações para a web utilizando tecnologias do ecossistema Javascript, prezando por um código limpo, performático e otimizado para os motores de busca.
                </p>
                <br />
                <p>
                Possuo habilidades de comunicação, aprendizado rápido e transmissão de informações, adquiridas em minha carreira anterior, como professor. Isso me possibilita contribuir com os demais profissionais, ajudando a compreender processos e o uso de tecnologias, reduzindo o tempo gasto com soluções que requerem técnicas ou abordagens utilizadas com pouca frequência pela equipe.
                </p>
            </div>
            <div className={styles.profile__pic__wrapper} >
              <div className={styles.profile__pic}>
                <Image src={profilePic} />
              </div>
            </div>
          </section>
          <section className={`${styles.container} ${styles.section__techs}`}>
            <div className={`${styles.wave} ${styles.wave__main__ascending } ${styles.background__section}`}>
            </div>
            <div className={styles.techs__text}>
              <h2 className={styles.title}>TECNOLOGIAS</h2>
              <p>
                Tenho trabalhado com estas tecnologias. Além disso, estou sempre atento às ferramentas que o mercado está utilizando e incorporando-as ao meu trabalho.</p> 
              <p>Aprendizado contínuo e evolução constante.</p>
              <ul className={styles.techs__list}>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>React</li>
                <li>Next Js</li>
                <li>Tailwind CSS</li>
                <li>Jest</li>
                <li>Git/Github</li>              
              </ul>
            </div>
          </section>
        </main>
        <footer >
            <address className={`${styles.container} ${styles.section__networks}`}>
              <h2 className={styles.title}>REDES E CONTATO</h2>
              <div className={styles.footer__logos__wrapper}>
                <a href='https://github.com/JD-Rodrigues' className={styles.footer__logo}>
                  <Image src={githubLogo} />
                </a>
                <a href="https://linkedin.com/in/domingos-rodrigues-dev" className={styles.footer__logo}>
                  <Image src={linkedinLogo} />
                </a>
                <a href="https://www.instagram.com/jdev_oficial/" className={styles.footer__logo}>
                  <Image src={instagramLogo} />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5575998662804" className={styles.footer__logo}>
                  <Image src={whatsappLogo} />
                </a> 
              </div>
              <p>domingosrodrigues.dev@gmail.com</p>
            </address>
            <a href='#top' className="to__top"></a>
          </footer>
      </div>
    </>
  )
}

export default Home

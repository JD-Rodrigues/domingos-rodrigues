
import styles from "./[id].module.css"
import { IGetStaticProps, IProjectProps, TProject } from "../../types"
import data from "../../../public/database_projects"
import Link from "next/link"
import Head from "next/head"
import { NextSeo } from "next-seo"


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
    <>
      <NextSeo 
        title={project.name}
        description={project.about}
        canonical= {`https://domingos-rodrigues.vercel.app/${project.id}`}
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
      <div className={styles.project}>
        <header className={styles.header} style={{backgroundImage:`url("${project.backdrop_path}")`}}>
          <div className={styles.project__info}>
          <nav>
            <Link href={"/"}><div className={styles.back__home}><span>⇽ Home</span></div></Link>
          </nav>
            <h1 className={styles.project__name}>{project.name}</h1>
            <p>{project.about}</p>
            <a rel="noreferrer" target={"_blank"} className={styles.external__link} href={project.live}>Ver online</a>
            <p>{project.objective}</p>
            <p>FEATURES:</p>
            <ul className={styles.features__list}>
              {project.features.map((feat:string)=><li key={feat}>{feat}</li>)}
            </ul>
            <a rel="noreferrer" target={"_blank"} className={styles.external__link} href={project.github}>Código no Github</a>
            <p>{`© ${project.year} Domingos Rodrigues`}</p>
            <a href="#shots" ><div className={styles.go__next__section}></div></a>
          </div>
      </header>
      <main>
        <section id="shots" className={styles.screenshots}>
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
      <footer className={styles.footer}>
        <p>© 2022 - Domingos Rodrigues</p>
      </footer>
      </div>
    </>
    

    
  )
}



export default Project
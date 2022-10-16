
export type TProject = {
  id:string;
  logo:string;
  name:string;
  about:string;
  year: string;
  backdrop_path:string;
  screenshots: string[];
  objective:string;
  features:string[];
  tools:string[];
  aditional_info:string;
}

export interface IHomeProps {
  data: TProject[]
}

export interface IProjectProps {
  project: TProject
}

export interface IGetStaticProps {
  params: {id:string}
}






export type TProject = {
  logo:string;
  name:string;
  about:string;
  screenshots: string[];
  objective:string;
  features:string[];
  tools:string[];
  aditional_info:string;
}

export interface IHomeProps {
  projects: TProject[]
}

export interface IProjectProps {
  project: TProject
}





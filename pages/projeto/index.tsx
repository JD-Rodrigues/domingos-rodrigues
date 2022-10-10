import { NextPage } from "next";
import Link from "next/link";

const Projeto:NextPage = () => {
  return(
    <header>
      <h1>Nome do projeto</h1> 

      <p>Descrição do projeto</p>
      <Link href="http://meusite.com">Veja online</Link>
      <Link href="github.com">Código do projeto</Link>
    </header>
  )
}

export default Projeto
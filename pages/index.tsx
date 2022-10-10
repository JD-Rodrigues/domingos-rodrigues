import type { NextPage } from 'next'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div>
      <h1>Página inicial</h1>
      <h2>Porfólio</h2>
      <Link href="projeto"><h3>Projeto</h3></Link>
    </div>
  )
}

export default Home

import Head from 'next/head'
import ProjectsContainer from '../components/ProjectsContainer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Joshua Melo - Portfolio</title>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <ProjectsContainer />
    </>
  )
}

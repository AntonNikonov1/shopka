import type { NextPage } from 'next'
import Image from 'next/image'
import MainContainer from '../components/MainContainer/MainContainer'
import { MenuСategory } from '../components/MenuСategory/MenuСategory'
import { categoriesList } from '../models/categoriesList'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <MainContainer>
      <MenuСategory categoriesList={categoriesList} />
    </MainContainer>
  )
}

export default Home

import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import MainContainer from '../components/MainContainer/MainContainer'
import { MenuСategory } from '../components/MenuСategory/MenuСategory'
import { categoriesList } from '../models/categoriesList'
import styles from '../styles/Home.module.scss'
import { SideFilter } from '../components/SideFilter/SideFilter'

const Home: NextPage = () => {
  const { asPath } = useRouter()

  React.useEffect(() => {
    const category = asPath.replace('/?category=', '')
    console.log(category)
  }, [asPath])

  return (
    <MainContainer>
      <MenuСategory categoriesList={categoriesList} />
      <SideFilter />
    </MainContainer>
  )
}

export default Home

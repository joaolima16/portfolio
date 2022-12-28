import React from 'react'
import CardsWrapper from '../../Components/Cards'
import Header from '../../Components/Header'
import SectionInformations from '../../Components/InformationsPage'
import Example from '../../Components/ModalInfo'
import './style.css'
export default function Home() {
  return (

    <>
        <Header />
        <SectionInformations />
        <CardsWrapper />
        {/* <Example /> */}
    </>
  )
}

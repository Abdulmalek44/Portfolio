import React from 'react'
import { About, Contact, Hero, Skills, Work } from '../Sections'
import { Navbare } from '../Components'


const Home = () => {
    return (
        <>
            <Navbare />
            <Hero />
            <About />
            <Skills />
            <Work />
            <Contact />
        </>
    )
}

export default Home
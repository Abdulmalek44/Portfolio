import React from 'react'
import { CardSkills } from '../Components'
import CardData from '../Data/CardData'


const Skills = () => {
    return (
        <div id='skills' className='w-full h-screen bg-[#121212] text-gray-300' >
            <div className='w-full h-full flex justify-center items-center flex-col ' >
                <div>
                    <div className='mb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#0078d4]  ' > Skills </p>
                    </div>
                    <div className='grid-cols-2 md:grid-cols-4 grid gap-6'>
                        {
                            CardData.map(item => <CardSkills
                                key={item.id}
                                path={item.path}
                                title={item.title}
                            />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
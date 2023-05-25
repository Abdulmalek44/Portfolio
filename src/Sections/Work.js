import React from 'react'
import { CardWork } from '../Components'
import WorkData from '../Data/WorkData'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#121212]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#0078d4] '> Work </p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        WorkData.map(item => <CardWork
                            key={item.id}
                            items={item}
                        />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Work

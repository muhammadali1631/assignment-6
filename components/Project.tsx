import Image from 'next/image'
import React from 'react'
import project1 from '@/images/Rectangle 12.png'
import project2 from '@/images/image 15.png'
import project3 from '@/images/image 16.png'
import project4 from '@/images/image 17.png'
import project5 from '@/images/image 18.png'
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link'

const Project = () => {
  return (
    <div className='px-10 md:px-20 relative'>
        <h1 className='text-[#BDBDBD] text-5xl mb-10'>Our Projects</h1>
        
            <div className='grid gap-5 justify-around'>
                <div className='flex gap-4 flex-wrap justify-center'>
                    <div className='relative fade-in2'>
                    <Image src={project1} alt="" className=''/>
                    <div className='h-[100%] w-[100%] bg-black absolute top-0 opacity-50'></div>
                    <div className='absolute top-[5%] md:top-14 left-[20%] z-0 text-white'>
                        <h1 className='text-lg sm:text-2xl md:text-5xl font-light sm:font-semibold'>Simple <br className='hidden sm:block'/> Project</h1>
                        <Link href={'/projects/sample-project'}>
                        <button className='flex items-center text-sm md:text-lg sm:py-1 md:py-5'>VIEW MORE <FaArrowRightLong/></button>
                        </Link>
                    </div>
                    </div>
                    <Image src={project2} alt="" className='fade-in2'/>
                </div>
                <div className='flex gap-4 flex-wrap justify-center'>
                    <Image src={project3} alt="" className='fade-in2'/>
                    <Image src={project4} alt="" className='fade-in2'/>
                    <Image src={project5} alt="" className='fade-in2'/>
                </div>
            </div>
                <div className='flex justify-center sm:justify-end md:mr-20 mt-5 '>
                <Link href={'/projects'}>
                <button className='flex bg-black items-center gap-3 text-white px-5 py-4'>ALL PROJECTS <FaArrowRightLong/></button>
                </Link>
                </div>
    </div>
  )
}

export default Project
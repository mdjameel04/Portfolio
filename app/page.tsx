import React from 'react'
import Hero from './_components/Hero'
import { FloatingNav } from '@/components/ui/FloatingNav'
import {Home } from 'lucide-react'
import Grid from './_components/Grid'

const page = () => {
  return (
    <main className='relative bg-black-150 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
        <div className='max-w-7xl w-full'>
          <FloatingNav
          navItems={[
            {name: "Home", link:"/", icon: <Home/> }
          ]}
          />
         <Hero/>
         <Grid/>
        </div>
    </main>
  )
}

export default page
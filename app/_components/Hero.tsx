import { Spotlight } from '@/components/ui/spotlight'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { cn } from '@/lib/utils'
import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
<Spotlight className='-top-40 -left-10 md:-left-32 md:top-40 h-screen' fill='white'/>
<Spotlight className='-top-10 left-full h-[80vh] w-[50vw] ' fill='purple'/>
<Spotlight className='-top-28 left-80 h-[80vh] w-[50vw] ' fill='blue'/>
    </div>
 <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-150">
      <div
        className={cn( "absolute inset-0",
          "[background-image:linear-gradient(to_right,#a1a1a1_1px,transparent_3px),linear-gradient(to_bottom,#e4e4e7_3px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f4_1px,transparent_1px)]",
        )}
      />
    </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

   <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>
        <TextGenerateEffect
        className=''
        words=' Transforming concepts into Seamless User Experiences'
        duration={2}
        />
        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl" > Hi I&apos;m jameel , a full Stack developer</p>

        <a href='#about'> 
          <MagicButton 
          title='show my work'
          icon= {<FaLocationArrow/>}
          position='right'
          />
        </a>

    </div>
    </div>
    </div>
  )
}

export default Hero
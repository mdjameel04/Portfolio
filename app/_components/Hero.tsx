import { Spotlight } from '@/components/ui/spotlight'
import { cn } from '@/lib/utils'
import React from 'react'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
<Spotlight className='-top-40 -left-10 md:-left-32 md:top-40 h-screen' fill='white'/>
<Spotlight className='-top-10 left-full h-[80vh] w-[50vw] ' fill='purple'/>
<Spotlight className='-top-28 left-80 h-[80vh] w-[50vw] ' fill='blue'/>
    </div>
 <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn( "absolute inset-0",
          "[background-size:80px_80px]",
          "[background-image:linear-gradient(to_right,#a1a1a1_1px,transparent_3px),linear-gradient(to_bottom,#e4e4e7_3px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        
      </p>
    </div>

    </div>
  )
}

export default Hero
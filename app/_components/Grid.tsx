'use client'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { gridItems } from '@/Data'
import React from 'react'

const Grid = () => {
  return (
    <section id='about'>
<BentoGrid>
   {gridItems.map(({id,title,description,className, img,imgClassName,titleClassName,spareImg})=>(
        <BentoGridItem
         key={id}
            id={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
            >
        </BentoGridItem>
    ))}
      
  
</BentoGrid>
    </section>
  )
}

export default Grid
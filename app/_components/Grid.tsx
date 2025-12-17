import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { gridItems } from '@/Data'
import React from 'react'

const Grid = () => {
  return (
    <section id='about'>
<BentoGrid>
   {gridItems.map((item)=>(
        <BentoGridItem
            id={item.id} key={item.id} 
            title={item.title} description={item.description} >
        </BentoGridItem>
    ))}
      
  
</BentoGrid>
    </section>
  )
}

export default Grid
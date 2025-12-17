import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import React from 'react'

const Grid = () => {
  return (
    <section id='about'>
<BentoGrid>
    {[{ title: "title", description: "desc1", id: 1}].map((item)=>(
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
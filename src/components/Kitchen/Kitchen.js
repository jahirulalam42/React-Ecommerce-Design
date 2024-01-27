import React from 'react'
import KitchenUp from './KitchenUp'
import KitchenProduct from './KitchenProduct'

const Kitchen = () => {
  return (
      <div className="container mx-auto px-48">
        <KitchenUp />
        <div className="grid grid-cols-3 grid-flow-row gap-6"><KitchenProduct /></div>
        
      </div>
  )
}

export default Kitchen

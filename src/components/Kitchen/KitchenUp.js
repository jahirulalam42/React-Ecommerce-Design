import React from 'react'

const KitchenUp = () => {
  return (
    <div>
       <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Kitchen</h1>
        <select className="select select-bordered rounded max-w-xs">
  <option disabled selected>Normal</option>
  <option>Normal Apple</option>
  <option>Normal Orange</option>
  <option>Normal Tomato</option>
</select>
        </div>

        <hr
  class="my-12 h-0.5 border-t-0 bg-black opacity-100 dark:opacity-50" />
    </div>
  )
}

export default KitchenUp

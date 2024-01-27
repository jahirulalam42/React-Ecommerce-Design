import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './components/router/Router'

const App = () => {


  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default App


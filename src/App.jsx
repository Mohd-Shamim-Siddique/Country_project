import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import { About, Contact, Country, Home } from './components/index'
import CountryDetails from './components/CountryDetails'
import Error from './components/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} errorElement={<Error />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='country' element={<Country />} />
      <Route path='country/:name' element={<CountryDetails />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

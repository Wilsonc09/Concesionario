import React from 'react'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

const PublicLayout = ({children}) => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar></Navbar>
      <main className='h-full overflow-y-scroll bg-blue-500'>{children}</main>
      <Footer></Footer>
    </div>
  )
}

export default PublicLayout
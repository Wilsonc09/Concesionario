import Sidebar from 'components/Sidebar'
import SidebarResponsive from 'components/SidebarResponsive'

import React, {useEffect} from 'react'

const PrivateLayout = ({children}) => {
  return (
    <div className=' flex flex-col md:flex-row w-screen h-screen'>
      <Sidebar/>
      <SidebarResponsive/>
      <main className=' flex overflow-y-scroll items-center justify-center w-full'>{children}</main>
    </div>
  )
}

export default PrivateLayout
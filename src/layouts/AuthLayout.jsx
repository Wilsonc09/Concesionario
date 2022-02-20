import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-50 py-2 px-4'>
      AuthLayout
      <main className=' flex w-full'>{children}</main>
    </div>
  )
}

export default AuthLayout
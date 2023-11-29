'use client'
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const NavBar = () => {

   const {status, data : session} = useSession();
  return (
    <div className=' bg-gray-500 p-3 text-lime-200'>
      
      <Link href="/" className='p-3 mr-1 bg-gray-700'>Home</Link>
      
      <Link href="./rentReturn" className='p-3  mr-1 bg-gray-700'>本の貸/返</Link>
      <Link href="./bookRecords" className='p-3 mr-1 bg-gray-700'>貸借記録</Link>

      <>{ (status === 'loading') && <>Loading...</> }</>
      <>{status === 'authenticated' && 
        <>
        {session.user?.name}
          <Link href='/api/auth/signout' className='p-3 mr-3 bg-gray-700'>SignOut</Link>
        </>
        }
      </>
      
      <>{ status === 'unauthenticated' && <Link href="api/auth/signin" className='p-3 mr-1 bg-gray-700'>Login</Link>}
      </>
    </div>
  )
}

export default NavBar
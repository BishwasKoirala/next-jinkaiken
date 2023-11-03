import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className=' bg-gray-500 p-3 text-lime-200'>
      
      <Link href="/" className='p-3 mr-1 bg-gray-700'>Home</Link>
      
      <Link href="./rentReturn" className='p-3  mr-1 bg-gray-700'>本貸出／返却登録</Link>
      <Link href="./bookRecords" className='p-3 mr-1 bg-gray-700'>部内の本の拝借履歴</Link>
    </div>
  )
}

export default NavBar
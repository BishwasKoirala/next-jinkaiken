'use client'
import React from 'react'
import Link from 'next/link'
import { UnderDevelopmentAlert } from './components/underDevelopmentAlert'
import { useSession } from 'next-auth/react'
const WelcomePage = () => {
  return (
    <div className='grid place-items-center pb-16 text-gray-500 text-lg'>
      <UnderDevelopmentAlert />
      <h1>
        神奈川大学会計学研究部
      </h1>
      <Link href="/member/borrow" className='btn btn-wide mb-7 bg-green-600'>Login なしで続ける</Link>
      <Link href="/api/auth/signin" className='btn btn-wide mb-7 bg-sky-300'>Log In</Link>
      <Link href="/member/register" className='btn btn-wide bg-green-300'>入部登録</Link>
    </div>
  )
}

export default WelcomePage
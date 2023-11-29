import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <div className='p-4 text-xl' >
        <div>
          <div className='  my-4 text-2xl font-bold'>
            USER :: 
            {session && <span className='text-blue-400'>  {session.user!.name}</span>}
            {!session && <span className=' text-red-800'> Not Logged in</span>}
          </div>
          神奈川大学会計学研究部のサイトへようこそ！
          <br />
          上のナビゲーションボタンで操作してください
        </div>
      </div>
    </main>
  )
}

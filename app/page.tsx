import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <div className='p-4 text-xl' >
        <p>
          {session && <span>{session.user!.name}</span>}
          神奈川大学会計学研究部のサイトへようこそ！
          <br />
          上のナビゲーションボタンで操作してください
        </p>
      </div>
    </main>
  )
}

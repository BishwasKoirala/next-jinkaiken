import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import { authOptions } from './api/auth/[...nextauth]/route'
import { Span } from 'next/dist/trace';
import LinkList from './components/LinkList';

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className='  text-center' >
      <div className='p-4 text-2xl' >
        <div>
          <div className='my-4 text-3xl font-bold'>
            {session && <span className='text-blue-400'>{session.user!.name}さん</span>}
            {!session && <span className=' text-red-800'> Not Logged in</span>}
          </div >
          <div>
            ホームメニュ
          </div>
        </div>
        <LinkList/>
      </div>
    </main>
  )
}

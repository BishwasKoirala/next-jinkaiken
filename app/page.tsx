import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>神奈川大学会計学研究部</h1>
      <Link href="/bookRecords" >本の貸借り登録</Link>
    </main>
  )
}

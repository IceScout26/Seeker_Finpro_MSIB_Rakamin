import Image from 'next/image'
// import { Register } from '../components/Register.jsx'
import { Register } from './register/page.jsx'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Register />
    </main>
  )
}

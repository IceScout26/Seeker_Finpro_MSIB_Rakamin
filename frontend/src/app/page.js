import Image from 'next/image'
// import { Register } from '../components/Register.jsx'
import { Register } from './register/page.jsx'
import Explore from './company/explore/page.jsx'
import Experiences from './user/experience/page.jsx'
import School from './user/school/page.jsx'
import Detail from './company/detail/page.jsx'
import Login from './login/page.jsx'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Register />
      <Explore />
      <Experiences />
      <School />
      <Detail />
      <Login />
    </main>
  )
}

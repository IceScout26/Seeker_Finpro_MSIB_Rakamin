import Image from 'next/image'
// import { Register } from '../components/Register.jsx'
import { Register } from './register/page.jsx'
import Explore from './company/explore/page.jsx'
import Experiences from './user/experience/page.jsx'
import School from './user/school/page.jsx'
import Detail from './company/detail/page.jsx'
import Login from './login/page.jsx'
import UserHome from './user/home/page.jsx'
import CompanyHome from './company/home/page.jsx'
import Post from "./company/post/page.jsx";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Register />
      <Explore />
      <Experiences />
      <School />
      <Detail />
      <Login />
      <UserHome />
      <CompanyHome />
    </main>
  )
}

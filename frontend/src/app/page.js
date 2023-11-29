import Image from 'next/image'
// import { Register } from '../components/Register.jsx'
import { Register } from './register/page.jsx'
import companyExplore from './company/explore/page.jsx'
import Experiences from './user/experience/page.jsx'
import Education from './user/education/page.jsx'
import detailUser from './company/detail/page.jsx'
import Login from './login/page.jsx'
import UserHome from './user/home/page.jsx'
import companyHome from './company/home/page.jsx'
import userExplore from './user/explore/page.jsx'
import companyProfile from './company/profile/page.jsx'
import Profile from './user/profile/page.jsx'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Register />
      <companyExplore />
      <Experiences />
      <Education />
      <detailUser />
      <Login />
      <UserHome />
      <companyHome />
      <userExplore />
      <companyProfile />
      <Profile />
    </main>
  )
}

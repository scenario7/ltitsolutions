import Image from 'next/image'
import NavBar from '@/components/navbar.jsx'
import HeroSection from '@/components/herosection.jsx'
import WhatWeDo from '@/components/whatwedo.jsx'
import CustomFooter from '@/components/CustomFooter.jsx'
import { Inter_Tight } from 'next/font/google'


const inter = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className={`flex flex-col overscroll-none ${inter.classname} tracking-tight`}>
      <NavBar/>
      <HeroSection></HeroSection>
      <WhatWeDo/>
      <CustomFooter/>
    </div>
  )
}

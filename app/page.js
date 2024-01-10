import Image from 'next/image'
import NavBar from '@/components/NavBar'
import HeroSection from '@/components/HeroSection'
import WhatWeDo from '@/components/WhatWeDo'
import CustomFooter from '@/components/CustomFooter'
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

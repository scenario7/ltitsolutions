import Image from 'next/image'
import NavBar from '@/components/NavBar.jsx'
import HeroSection from '@/components/HeroSection.jsx'
import WhatWeDo from '@/components/WhatWeDo.jsx'
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

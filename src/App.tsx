import { useState, useEffect } from 'react'
import SakuraCanvas from './components/SakuraCanvas'
import RainbowFlash from './components/RainbowFlash'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Divider from './components/Divider'
import Maintaining from './components/Maintaining'
import Projects from './components/Projects'
import GitHub from './components/GitHub'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'
import Roms from './components/Roms'

export default function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [currentView, setCurrentView] = useState<'home' | 'roms'>('home')

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.startsWith('#roms')) {
        setCurrentView('roms')
        window.scrollTo(0, 0)
      } else {
        setCurrentView('home')
        // Give Vite a moment to render elements before scrolling to anchor
        if (window.location.hash) {
          const targetId = window.location.hash.slice(1)
          setTimeout(() => {
            const el = document.getElementById(targetId)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }, 100)
        }
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <>
      <RainbowFlash />
      <SakuraCanvas />
      <div className="bg-grid" />

      <Marquee
        text="🔥😍 AOSP DEVELOPER 🔥😍 👨‍🏫 CUSTOM ROMS 👨‍🏫 🥺 STUDENT 🥺 🚀 ANDROID 16 🚀 🎓 LINEAGEOS 🎓 💯 LEGEND 💯 🌈 MOTOROLA 🌈 ⚡ BUILD SYSTEMS ⚡ 🎉 KERNEL HACKER 🎉 🔥😍 AOSP DEVELOPER 🔥😍 👨‍🏫 CUSTOM ROMS 👨‍🏫 🥺 STUDENT 🥺 🚀 ANDROID 16 🚀 🎓 LINEAGEOS 🎓 💯 LEGEND 💯 🌈 MOTOROLA 🌈 ⚡ BUILD SYSTEMS ⚡ 🎉 KERNEL HACKER 🎉"
        className="fixed top-0 inset-x-0 z-[500] border-b-2 border-purple/50"
      />
      <Marquee
        text="⭐ MOTO EDGE 40 NEO ⭐ 💖 AOSP SOURCE 💖 🎸 CUSTOM ROM DEV 🎸 🔥 MANAUS 🔥 💫 ANDROID DEVELOPER 💫 🌟 DEVICE TREES 🌟 ⭐ MOTO EDGE 40 NEO ⭐ 💖 AOSP SOURCE 💖 🎸 CUSTOM ROM DEV 🎸 🔥 MANAUS 🔥 💫 ANDROID DEVELOPER 💫 🌟 DEVICE TREES 🌟"
        reverse
        className="fixed bottom-0 inset-x-0 z-[500] border-t-2 border-purple/50"
      />

      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} currentView={currentView} />

      <main className="relative z-[1] mt-8 mb-8">
        {currentView === 'roms' ? (
          <Roms />
        ) : (
          <>
            <Hero />
            <About />
            <Divider />
            <Maintaining />
            <Divider />
            <Projects />
            <GitHub />
            <Footer />
          </>
        )}
      </main>

      <MusicPlayer />
    </>
  )
}


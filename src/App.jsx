import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/1-Header'
import Hero from './components/2-Hero'
import Main from './components/3-Main'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {

  const [showScroll, setshowScroll] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setshowScroll(true)
      } else {
        setshowScroll(false)
      }
    })
  })

  return (
    <div id='up' className="container w-[96%] sm:w-[90%] lg:w-[80%] px-[1.7rem] lg:px-[4.8rem] mx-auto text-white">
      <Header />
      <Hero />
      <div className="divider"></div>
      <Main />
      <div className="divider"></div>
      <Contact />
      <div className="divider"></div>
      <Footer />
      <a href="#up" style={{ opacity: showScroll ? 1 : 0, transition: '0.3s' }} className=''>
        <button className="icon-keyboard_arrow_up srollToTop fixed  w-[2.2rem] h-[2.2rem] md:w-[2.6rem] md:h-[2.6rem]
          rounded-full bottom-4 right-[3%] text-center text-[1rem] md:text-[1.6rem] hover:scale-[0.97] opacity-60 md:opacity-100 "></button>
      </a>
    </div>

  )
}

export default App

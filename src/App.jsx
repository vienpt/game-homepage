import './App.css'
import AppHeader from './components/AppHeader.jsx'
import ButtonSecondary from "./components/ButtonSecondary.jsx";

function App() {
  return (
    <>
      <AppHeader />
      <section id="hero" className="py-20 flex flex-col gap-10 justify-center items-center">
        <div className="relative md:max-w-4xl lg:text-6xl md:text-5xl text-xl font-bold text-center uppercase tracking-tighter">
          <img
            src={'/svg/hero-icon-1.svg'}
            alt="hero-icon"
            width="80"
            height="90"
            className="absolute left-[-10%] md:left-[-6%] top-[-10px] md:top-[-6px] -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src={'/svg/hero-icon-2.svg'}
            alt="hero-icon"
            width="80"
            height="90"
            className="absolute md:w-auto md:h-auto w-[64px] h-[74px] right-[-80px] bottom-[-100px] -translate-x-1/2 -translate-y-1/2"
          />
          <h1>Next Generation Get Your<br />Desired Rank Now</h1>
        </div>
        <div className="relative inline-block">
          <img
            src={'/svg/hero.svg'}
            alt="hero-image"
            className="w-full aspect-[4/3]"
          />
          <img
            src={'/hero-main.png'}
            alt="hero-image"
            className="hero-character"
          />
          <ButtonSecondary className="btn-register-now" text="Register Now" />
        </div>

      </section>
    </>
  )
}

export default App

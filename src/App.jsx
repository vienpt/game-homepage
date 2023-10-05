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
            className="absolute left-[-7.5%] md:left-[-6%] top-[-10px] md:top-[-6px] -translate-x-1/2 -translate-y-1/2"
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
          {/*<img*/}
          {/*  src={'./src/assets/hero-main.png'}*/}
          {/*  alt="hero-image"*/}
          {/*  className="absolute -translate-x-1/2 -translate-y-1/2 top-[130px] right-[-40px] md:right-[-50px] md:top-[12.5rem] lg:right-[-60px] lg:top-[233px] h-[300px] md:h-[400px] lg:h-[500px]"*/}
          {/*/>*/}
          <img
            src={'/svg/hero.svg'}
            alt="hero-image"
            width="847"
            height="525"
          />
          <ButtonSecondary className="btn-register-now" text="Register Now" />
        </div>

      </section>
    </>
  )
}

export default App

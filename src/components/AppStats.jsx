import ButtonSecondary from "./ButtonSecondary.jsx";

export default function AppStats() {
  return (
    <section id="stats" className="mx-auto max-w-7xl py-12 grid md:grid-cols-3 grid-rows-1 gap-6 place-content-evenly">
      <div className="relative">
        <img className="w-[90%] md:w-auto lg:w-full mx-auto" src={'/svg/stats-1.svg'} alt="stats-1" />
        <ButtonSecondary className="btn-play-now leading-8 md:text-xl lg:text-2xl" text="Play Now" />
      </div>
      <div className="relative">
        <img className="w-[90%] md:w-auto lg:w-full mx-auto" src={'/svg/stats-2.svg'} alt="stats-2" />
        <ButtonSecondary className="btn-play-now leading-8 md:text-xl lg:text-2xl" text="Play Now" />
      </div>
      <div className="relative">
        <img className="w-[90%] md:w-auto lg:w-full mx-auto" src={'/svg/stats-3.svg'} alt="stats-3" />
        <ButtonSecondary className="btn-play-now leading-8 md:text-xl lg:text-2xl" text="Play Now" />
      </div>
    </section>
  )
}
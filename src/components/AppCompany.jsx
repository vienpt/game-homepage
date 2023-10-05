
export default function AppCompany() {
  return (
    <section className="mx-auto max-w-screen-md">
      <div className="flex flex-wrap md:flex-nowrap md:gap-10 gap-6 flex-row justify-center items-end relative">
        <img className="w-1/3 md:w-1/4" src={'/svg/twitch.svg'} alt="twitch" />
        <img className="w-1/2 md:w-1/3 -my-6" src={'/svg/roblox.svg'} alt="roblox" />
        <img className="w-1/2" src={'/svg/chess.svg'} alt="chess" />
        <img className="w-[60%]" src={'/svg/gamesradar.svg'} alt="gamesradar" />
      </div>

    </section>
  )
}
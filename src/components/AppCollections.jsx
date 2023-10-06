
export default function AppCollection() {
  return (
    <section id="collection" className="py-20">
      <div className="mx-auto max-w-6xl relative lg:text-6xl md:text-4xl text-xl font-bold text-center uppercase md:tracking-[-1.3px] lg:tracking-[-3.3px]">
        <img
          src={'/svg/hero-icon-2.svg'}
          alt="hero-icon"
          width="80"
          height="90"
          className="absolute md:w-auto md:h-auto w-[64px] h-[74px] top-[-5rem] left-[42%] md:left-[45%] lg:left-[47%] -translate-x-1/2 -translate-y-1/2"
          style={{ transform: 'rotate(319deg)' }}
        />
        <h1>THE Most recent Patterns, Conveyed<br />Directly TO YOUR INBOX.</h1>
      </div>
      <div className="mx-auto max-w-7xl grid grid-rows-1 gap-10 lg:grid-cols-2 py-14">
        <figure>
          <img className="mx-auto w-[80%] md:w-[75%] lg:w-[90%]" src={'/collection.png'} alt="collection" width="614" height="526" />
        </figure>
        <article>
          <details open>
            <summary className="capitalize">
              <span>staff picks with erin this week's top picks</span>
            </summary>
            <p>For the Consuming Campaign discharge, I remained up the entire evening playing and wound up leaving school 'cos I was nodding off all over. Most certainly utilized being debilitated a ton in school to mess around. Presently I simply use excursion when games I'm energized for emerge.</p>
          </details>
          <details>
            <summary className="capitalize">
              <span>Compelling Games Is 20 Years of age!</span>
            </summary>
          </details>
          <details>
            <summary className="capitalize">
              <span>Irresistible Games Merchandise Is Here</span>
            </summary>
          </details>
        </article>
      </div>
    </section>
  )
}
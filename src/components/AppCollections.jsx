import ButtonPrimary from "./ButtonPrimary.jsx";
import ButtonOutline from "./ButtonOutline.jsx";
import SectionTitle from "./SectionTitle.jsx";

export default function AppCollection() {
  return (
    <section id="collection" className="pt-40 pb-28 md:pb-40">
      <SectionTitle
        hasImage={true}
        text="THE Most recent Patterns, Conveyed/nDirectly TO YOUR INBOX."
      />
      <div className="mx-auto max-w-7xl grid grid-rows-1 gap-10 lg:grid-cols-2 py-14">
        <figure>
          <img className="img-collection mx-auto w-auto md:w-[78%] lg:w-[90%]" src={'/collection.png'} alt="collection" width="614" height="526" />
        </figure>
        <article>
          <div id="collection-items">
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
          </div>
          <div className="pt-4 lg:ps-9 mx-auto flex justify-center lg:justify-start">
            <ButtonPrimary text="Play Now" className="!h-[40px]" />
            <ButtonOutline text="Watch trailor" />
          </div>
        </article>

      </div>
    </section>
  )
}
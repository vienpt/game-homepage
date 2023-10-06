import {twMerge} from "tailwind-merge";
import PropTypes from "prop-types";

const images = [
  'explore-1',
  'explore-2',
  'explore-3',
  'explore-4',
]

export default function AppExplore() {
  return (
    <section id="explore" className="max-w-7xl mx-auto">
      <div className="flex justify-center text-center md:text-start md:justify-start mx-auto md:px-6 relative lg:text-6xl md:text-4xl text-xl font-bold uppercase md:tracking-[-1.3px] lg:tracking-[-3.3px]">
        <h1>we’re the first gaming <br /> award winners  the world</h1>
      </div>
      <div className="lg:px-6">
        <ExploreItem className="hidden lg:flex lg:justify-start justify-center space-x-10 pt-10" />
        <div className="lg:hidden">
          <div className="relative px-4 overflow-auto py-6">
            <ExploreItem className="inline-flex gap-10 text-lg" />
          </div>
          <ul>
            <li className="inline-flex scroll-container">
              {images.map((item) =>
                <img key={item} alt={item} loading="lazy" src={`/${item}.png`} />
              )}
            </li>
          </ul>
        </div>
        <ul className="hidden lg:block pt-10">
          <li className="grid grid-cols-2 gap-6">
            <img alt="explore-1" loading="lazy" src={`/explore-1.png`} />
            <img alt="explore-2" loading="lazy" src={`/explore-2.png`} />
            <img alt="explore-3" loading="lazy" src={`/explore-3.png`} />
            <img alt="explore-4" loading="lazy" src={`/explore-4.png`} />
          </li>
        </ul>
      </div>
    </section>
  )
}

function ExploreItem({ className }) {
  const classMerge = twMerge(className)
  return(
    <>
      <ul className={classMerge}>
        <li className="heading-title">
          <a href="#aventure">Aventure</a>
        </li>
        <li>
          <a href="#arcade">Arcade</a>
        </li>
        <li>
          <a href="#arena">Arena</a>
        </li>
        <li>
          <a href="#avoider">Avoider</a>
        </li>
        <li>
          <a href="#balance">Balance</a>
        </li>
      </ul>
    </>
  )
}

ExploreItem.propTypes = {
  className: PropTypes.string
}
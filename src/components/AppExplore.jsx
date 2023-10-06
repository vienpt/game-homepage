import {twMerge} from "tailwind-merge";
import PropTypes from "prop-types";
import ButtonPrimary from "./ButtonPrimary.jsx";

const images = [
  'explore-1',
  'explore-2',
  'explore-3',
  'explore-4',
]

export default function AppExplore() {
  return (
    <section id="explore" className="max-w-7xl mx-auto pb-20">
      <div className="flex justify-center text-center md:text-start md:justify-start mx-auto md:px-4 relative lg:text-6xl md:text-4xl text-xl font-bold uppercase md:tracking-[-1.3px] lg:tracking-[-3.3px]">
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
          <ViewMore className="pt-4 pl-4" />
        </div>
        <div className="hidden pt-10 lg:grid grid-cols-2 gap-4 relative masonry-grid">
          <div>
            <figure>
              <img alt="explore-1" loading="lazy" src={`/explore-1.png`} />
            </figure>
            <figure>
              <img alt="explore-3" loading="lazy" src={`/explore-3.png`} />
            </figure>
          </div>
          <div>
            <figure>
              <img alt="explore-2" loading="lazy" src={`/explore-2.png`} />
            </figure>
            <figure>
              <img alt="explore-4" loading="lazy" src={`/explore-4.png`} />
            </figure>
            <ViewMore />
          </div>
        </div>
      </div>
    </section>
  )
}

function ViewMore({ className }) {
  const classMerge = twMerge('flex items-center', className)
  return (
    <div className={classMerge}>
      <span className="flex flex-col">
        <span className="text-sm md:text-normal">We’ve have many more than</span>
        <span className="text-4xl md:text-6xl font-bold">100+</span>
        <span className="text-sm md:text-normal">Gaming <span className="heading-title">Collections</span></span>
      </span>
      <span className="ml-auto">
        <ButtonPrimary text="View More"></ButtonPrimary>
      </span>
    </div>
  )
}

ViewMore.propTypes = {
  className: PropTypes.string
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
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

function SectionTitle({ hasImage, text, className, children }) {
  const classMerge = twMerge(
    'section-title mx-auto max-w-7xl relative lg:text-8xl md:text-6xl text-[1.85rem] font-bold text-center uppercase' +
    'md:leading-[3.5rem] lg:leading-[5rem] md:tracking-[-3px]',
    className
  )
  const splitText = text.split('/n')

  return (
    <div className={classMerge} style={{ fontFamily: 'Bebas Neue' }}>
      {children}
      {hasImage && <img
        src={'/svg/hero-icon-2.svg'}
        alt="hero-icon"
        width="80"
        height="90"
        className="absolute md:w-auto md:h-auto w-[64px] h-[74px] top-[-5rem] lg:top-[-6rem] left-[42%] md:left-[45%] lg:left-[47%] -translate-x-1/2 -translate-y-1/2"
        style={{ transform: 'rotate(319deg)' }}
      />}
      <h1>{splitText.at(0)}<br />{splitText.at(1)}</h1>
    </div>
  )
}

SectionTitle.propTypes = {
  hasImage: PropTypes.bool,
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any
}

export default SectionTitle
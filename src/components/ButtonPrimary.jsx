import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'
function ButtonPrimary({ text, className }) {
  const classMerge = twMerge(
    'bg-btn-primary font-bold capitalize h-[30px] w-[130px] md:h-[40px]',
    className
  )
  return (
    <>
      <button
        type="button"
        className={classMerge}
      >
        {text}
      </button>
    </>
  )
}

ButtonPrimary.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
}
export default ButtonPrimary
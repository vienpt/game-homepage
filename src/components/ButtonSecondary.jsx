import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'
function ButtonSecondary({ text, className }) {
  const classMerge = twMerge(
    'uppercase font-bold text-white',
    className)
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

ButtonSecondary.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
}
export default ButtonSecondary
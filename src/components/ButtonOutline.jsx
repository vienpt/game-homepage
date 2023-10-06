import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'
function ButtonOutline({ text, className }) {
  const classMerge = twMerge(
    'bg-btn-outline font-bold capitalize h-[40px] w-[135px]',
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

ButtonOutline.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
}
export default ButtonOutline
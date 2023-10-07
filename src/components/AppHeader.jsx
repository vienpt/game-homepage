import ButtonPrimary from './ButtonPrimary.jsx'
import PropTypes from 'prop-types'
import {useState} from 'react'
import {twMerge} from 'tailwind-merge'

function Header() {
  const [showMenu, setShowMenu] = useState(false)

  function onShowMenu() {
    setShowMenu(() => !showMenu)
  }

  return (
    <header className="md:relative md:bg-transparent md:from-transparent md:to-transparent md:py-4 sticky top-0 z-50 bg-gradient-to-r from-w-red to-w-orange pb-[1px]">
      <nav className="h-12 md:h-16 px-[0.5rem] md:px-[1rem] flex justify-between justify-items-center items-center bg-gray-950">
        <button className="block md:hidden mr-2" onClick={onShowMenu}>
          <img className="h-9" src={'/svg/menu.svg'}  alt="menu"/>
        </button>
        <a href="/" className="text-xl heading-title md:hidden">Marketplace</a>
        <NavItem className="hidden md:inline-flex gap-[37px] capitalize" />
        <ButtonPrimary text="Register" className="ml-auto" />
      </nav>
      {
        showMenu && (
            <NavItem className="nav-item" />
        )
      }
    </header>
  )
}

function NavItem({ className }) {
  const classMerge = twMerge(className)
  return (
    <>
      <ul className={classMerge}>
        <li className="hidden md:block heading-title">
          <a href="/">Marketplace</a>
        </li>
        <li>
          <a href="#stats">Stats</a>
        </li>
        <li>
          <a href="#collections">Collections</a>
        </li>
        <li>
          <a href="#explore">Explore</a>
        </li>
        <li>
          <a href="#community">Community</a>
        </li>
      </ul>
    </>
  )
}

NavItem.propTypes = {
  className: PropTypes.string
}

export default Header
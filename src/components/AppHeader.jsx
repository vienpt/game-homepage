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
    <header className="relative">
      <nav className="h-16 flex justify-between justify-items-center items-center">
        <button className="block md:hidden mr-2" onClick={onShowMenu}>
          <img src={'/svg/menu.svg'}  alt="menu"/>
        </button>
        <a href="/" className="heading-title md:hidden">Marketplace</a>
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
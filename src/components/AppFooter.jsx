import {NavItem} from "./AppHeader.jsx";


export default function AppFooter() {
  return (
    <section className="pb-20">
      <ul className="flex md:flex-row flex-col items-center justify-center space-y-2 md:space-x-10">
        <li>
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
      <div className="border-b pt-20 mb-10 border-w-border" />
      <p className="flex justify-center text-center items-center font-['Poppins']">
        © Copyright 2022, All Rights Reserved by Play Games
      </p>
    </section>
  )
}
import { useEffect, useState } from 'react'
import logo from '../assets/alwahidahLogo.png'

function navFunc(){
  document.getElementsByClassName('navbar-burger')[0].classList.toggle('is-active')
  document.getElementsByClassName('navbar-menu')[0].classList.toggle('is-active')
}

const listNav = [
  "Pelatih", "Recording", "Berita", "Gambus Modern", "Gambus Tradisional"
]

export default function Navbar(){
 
  return (
    <nav className='navbar' role="navigation" aria-label='main navigation' >
      <div className='navbar-brand'>
        <a className='navbar-item' href='#'>
          <img src={logo} width={100} height={10}/>
        </a>
        <button onClick={navFunc} role="button" className="navbar-burger" aria-label="menu" aria-expanded="true" data-target="navbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbar" className="navbar-menu">
        <div className='navbar-end'>
          {listNav.map((e,idx)=>
            <a href={e.toLowerCase().replaceAll(' ','-')} key={idx} className='navbar-item'>{e}</a>    
          )}
        </div>
      </div>
    </nav>
  )
}
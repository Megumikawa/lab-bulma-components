import React, { Component } from 'react'
import 'bulma/css/bulma.css';

function Navbar(props) {
  return (
    <div>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='https://bulma.io'>
            <img src='https://bulma.io/images/bulma-logo.png' width='112' height='28' />
          </a>
          <a role='button'
            className='navbar-burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-start'>
            <a className='navbar-item'>Home</a>
            <div className='navbar-end'>
              <div className='navbar-item'>
                <div className='buttons'>
                  <a className='button is-primary'>
                    <strong>Sign up</strong>
                  </a>
                  <a className='button is-light'>Log in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div class="main-menu">
          <div class="main-menu__top">
            <h1 class="top_heading">Sakib</h1>
            <span>Programmer </span>
          </div>
          <div class="main-menu_nav">
            <a href="/">Home</a>
            <a href="#abt">About</a>
            <a href="#skills">Skills</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/article">Articles</a>
            <a href="/awards">Honors and awards</a>
          </div>
          <div class="social">
            <ul>
              <li>
                <a href="facebook.com">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/saifsaki">
                  <i class="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://sakibalhasan17442@gmail.com">
                  <i class="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div id="hidden_in_header">
          <div id="toggle"></div>
          <div id="sidebar">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#abt">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/article">Articles</a>
              </li>
              <li>
                <a href="/awards">Honors and awards </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header
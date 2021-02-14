import React, { Component } from "react";
import { Link } from "react-router-dom";
import mobileHome from "../assets/img/home-2@2x.svg"
import mobileProduct from "../assets/img/product-3@2x.svg"
import mobileSearch from "../assets/img/search@2x.svg"
import mobileUser from "../assets/img/user@2x.svg"
import mobileNotification from "../assets/img/notification@2x.svg"

import '../assets/css/navigationbar.css'

export default class MobileNavBar extends Component {
  render() {
    return (
      <div class="fixed-bottom">
        <nav class="footer-menu">
          <div class="container">
            <div class="menu">
              <ul>
                <li>
                  <Link to="/dashboard" class={this.props.active === "home" ? "active" : null}>
                    <img src={mobileHome} alt="Home" />
                  </Link>
                </li>
                <li>
                  <Link to="/strains/DoubleDutchBus/3" class={this.props.active === "product" ? "active" : null}>
                    <img src={mobileProduct} alt="product" />
                  </Link>
                </li>
                <li>
                  <Link to="/" class={this.props.active === "search" ? "active" : null}>
                    <img src={mobileSearch} alt="search" />
                  </Link>
                </li>
                <li>
                  <Link to="/" class={this.props.active === "notification" ? "active" : null}>
                    <img src={mobileNotification} alt="Notifications" />
                  </Link>
                </li>
                <li>
                  <Link to="/profile" class={this.props.active === "profile" ? "active" : null}>
                    <img src={mobileUser} alt="user" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

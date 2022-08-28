import React, { Component } from "react";
import { Link } from "react-router-dom";
import mobileHome from "../assets/img/home-2@2x.svg"
import mobileProduct from "../assets/img/product-3@2x.svg"
import mobileSearch from "../assets/img/search@2x.svg"
import mobileUser from "../assets/img/user@2x.svg"
import mobileNotification from "../assets/img/notification@2x.svg"
import {
  faCamera,
  faBarcode
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                  <Link to="product" class={this.props.active === "product" ? "active" : null}>
                      <FontAwesomeIcon
                          icon={faBarcode}
                          className="fa-1x text-gray-500"></FontAwesomeIcon>
                  </Link>
                </li>
                <li>
                  <Link to="/Explore" class={this.props.active === "explore" ? "active" : null}>
                    <img src={mobileSearch} alt="search" />
                  </Link>
                </li>
                <li>
                    {console.log(this.props)}
                <Link onClick={this.props.handleAddPostForm} class={this.props.active === "post" ? "active" : null}>
                    <FontAwesomeIcon
                        icon={faCamera}
                        className="fa-1x text-gray-500"></FontAwesomeIcon>
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

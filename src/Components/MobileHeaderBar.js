import React, { Component } from "react";
import { Link } from "react-router-dom";
import home from "../assets/img/home.svg";
import notification from "../assets/img/notification.svg";
import message from "../assets/img/message.svg";
import {
  faToolbox,
  faCannabis,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mobileNotification from "../assets/img/notification@2x.svg"
import '../assets/css/headerbar.css'
import mybudslogo from "../assets/img/mybudslogo.png"
import {Image} from "semantic-ui-react";

export default class MobileHeaderBar extends Component {
  render() {
    return (
      <div class="fixed-top">
        <nav class="header-menu">
            <div class="container">
                <div class="menu">

                        <ul>
                            <Image size='tiny' src={mybudslogo} alt="mybudslogo" />


                                <li>
                              </li>

                            
                                <li>
                                    <li>
                                    <Link to="/Post" class={this.props.active === "post" ? "active" : null}>
                                        <img src={notification} alt="Notifications" />

                                    </Link>
                                  </li>
                                </li>
                            </ul>


            </div>
          </div>
        </nav>
      </div>
    );
  }
}

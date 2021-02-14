/* eslint-disable jsx-a11y/alt-text */
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Card,
} from "semantic-ui-react";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Link, Switch, withRouter } from "react-router-dom";

import Avatar from "react-avatar";
import MobileNavBar from "./MobileNavBar"
import home from "../assets/img/home.svg";
import notification from "../assets/img/notification.svg";
import message from "../assets/img/message.svg";
import avatar from "../assets/img/avatar.png";
import place from "../assets/img/place.svg";
import url from "../assets/img/url.svg";
import joined from "../assets/img/joined.svg";
import born from "../assets/img/born.svg";
import images from "../assets/img/images.svg";
import comments from "../assets/img/comments.svg";
import retweet from "../assets/img/retweet.svg";
import like from "../assets/img/like.svg";
import logo from "../assets/img/logo.svg";

import "../assets/css/style.css";
import "../assets/css/navigationbar.css";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class Profile extends Component {
  state = { activeItem: "" };

  //distribute each part of the profile into the activeItem from user object
  handleClick = (e) => {
    if (e.target.id === "Photos") {
      this.setState({
        activeItem: "Gallery",
      });
    } else if (e.target.id === "friends") {
      this.setState({
        activeItem: "friends",
      });
    } else if (e.target.id === "strains") {
      this.setState({
        activeItem: "StrainReviews",
      });
    }
  };

  render() {
    return (
      <div id="custom-profile-css">
        <header className="main-header">
          <div className="content">
            <nav>
              <ul>
                <li>
                  <img src={home} alt="Home" /> Home
                </li>
                <li>
                  <img src={notification} alt="Notifications" /> Notifications
                </li>
                <li>
                  <img src={message} alt="Messages" /> Messages
                </li>
              </ul>
            </nav>
            <img src={logo} alt="Logo Twitter" />
            <div className="side">
              <input type="text" placeholder="Search on Twitter" />
              <img src={avatar} alt="Avatar" />
              <button className="btn-tweet">Tweet</button>
            </div>
          </div>
        </header>

        <div className="banner">
          <h1>Image</h1>
        </div>

        <div className="bar">
          <div className="content">
            <ul>
              <li className="active">
                <span>Tweet</span>
                <strong>1234</strong>
              </li>
              <li>
                <span>Followings</span>
                <strong>124</strong>
              </li>
              <li>
                <span>Followers</span>
                <strong>134</strong>
              </li>
              <li>
                <span>Favorites</span>
                <strong>14</strong>
              </li>
            </ul>
            <div className="actions">
              <button>Follow</button>
            </div>
          </div>
        </div>

        <div className="wrapper-content container content">
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <aside className="profile">
                <img className="avatar" src={avatar} alt="Beatriz Cantilho" />
                <h1>Beatriz Cantilho</h1>
                <span>@bcantilho</span>
                <p>Software developer and sometimes gamer</p>

                <ul className="list">
                  <li>
                    <img src={place} alt="place" /> Halifax, Canadá
                  </li>
                  <li>
                    <img src={url} alt="url" /> bcantilho.dev
                  </li>
                  <li>
                    <img src={joined} alt="joined" /> Joined January 2017
                  </li>
                  <li>
                    <img src={born} alt="born" /> Born the 10th of January 1996
                  </li>
                </ul>

                <div className="widget images">
                  <strong>
                    <img src={images} alt="images" /> 360 Photos and videos
                  </strong>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </aside>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
              <section className="timeline">
                <nav>
                  <Link to="/" className="active">
                    Tweets
                  </Link>
                  <Link to="/">Tweets and replies</Link>
                  <Link to="/">Medias</Link>
                </nav>

                <ul className="tweets">
                  <li>
                    <img src={avatar} alt="Avatar" />
                    <div className="info">
                      <strong>
                        Ben Taylor <span>@potato</span>
                      </strong>
                      <p>
                        This is awesome! We should make a project together as
                        soon as possible
                      </p>
                      <div className="actions">
                        <Link to="/">
                          <img src={comments} alt="Comments" /> 9
                        </Link>
                        <Link to="/">
                          <img src={retweet} alt="Retweet" /> 15
                        </Link>
                        <Link to="/">
                          <img src={like} alt="Like" /> 20
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img src={avatar} alt="Avatar" />
                    <div className="info">
                      <strong>
                        Ben Taylor <span>@potato</span>
                      </strong>
                      <p>
                        This is awesome! We should make a project together as
                        soon as possible
                      </p>
                      <div className="actions">
                        <Link to="/">
                          <img src={comments} alt="Comments" /> 9
                        </Link>
                        <Link to="/">
                          <img src={retweet} alt="Retweet" /> 15
                        </Link>
                        <Link to="/">
                          <img src={like} alt="Like" /> 20
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img src={avatar} alt="Avatar" />
                    <div className="info">
                      <strong>
                        Ben Taylor <span>@potato</span>
                      </strong>
                      <p>
                        This is awesome! We should make a project together as
                        soon as possible
                      </p>
                      <div className="actions">
                        <Link to="/">
                          <img src={comments} alt="Comments" /> 9
                        </Link>
                        <Link to="/">
                          <img src={retweet} alt="Retweet" /> 15
                        </Link>
                        <Link to="/">
                          <img src={like} alt="Like" /> 20
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img src={avatar} alt="Avatar" />
                    <div className="info">
                      <strong>
                        Ben Taylor <span>@potato</span>
                      </strong>
                      <p>
                        This is awesome! We should make a project together as
                        soon as possible
                      </p>
                      <div className="actions">
                        <Link to="/">
                          <img src={comments} alt="Comments" /> 9
                        </Link>
                        <Link to="/">
                          <img src={retweet} alt="Retweet" /> 15
                        </Link>
                        <Link to="/">
                          <img src={like} alt="Like" /> 20
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <aside className="widgets">
                <div className="widget follow">
                  <div className="title">
                    <strong>Who to follow</strong>
                    <Link to="/">Refresh</Link>
                    <Link to="/">View all</Link>
                  </div>

                  <ul>
                    <li>
                      <div className="profile">
                        <img src={avatar} alt="Avatar" />
                        <div className="info">
                          <strong>
                            Spade <span>@spade_be</span>
                          </strong>
                          <button>Follow</button>
                        </div>
                      </div>
                      <Link to="/">X</Link>
                    </li>
                    <li>
                      <div className="profile">
                        <img src={avatar} alt="Avatar" />
                        <div className="info">
                          <strong>
                            Spade <span>@spade_be</span>
                          </strong>
                          <button>Follow</button>
                        </div>
                      </div>
                      <Link to="/">X</Link>
                    </li>
                    <li>
                      <div className="profile">
                        <img src={avatar} alt="Avatar" />
                        <div className="info">
                          <strong>
                            Spade <span>@spade_be</span>
                          </strong>
                          <button>Follow</button>
                        </div>
                      </div>
                      <Link to="/">X</Link>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
        <MobileNavBar active="profile" />
      </div>
    );
  }
}

class DesktopContainer extends Component {
  state = {
    user: {
      friendships: [],
      strainreviews: [],
      gallery: [],
    },
  };

  componentDidMount() {
    let token = localStorage.token;

    token
      ? fetch("http://localhost:3000/api/v1/current_user", {
          method: "GET",
          headers: {
            Authorization: `${token}`,
            "content-type": "application/json",
            accepts: "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((userData) => {
            this.setState({
              user: { ...userData.user },
            });
          })
      : console.log("fuck my life");
  }

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  handlePlusClick = () => {
    this.setState({ visible: true });
  };

  handleDoublePlusClick = () => {
    this.setState({ visible: false });
  };

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    const { sidebarOpened } = this.state;
    const { visible } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        {console.log(this.props, this.state)}
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          direction="top"
          onHide={this.handleSidebarHide}
          vertical
          visible={visible}
        >
          <Menu.Item
            as="a"
            onClick={(e) => this.props.props.handleNewStrainReviewClick()}
          >
            New StrainReview
          </Menu.Item>
          <Menu.Item
            as="a"
            onClick={(e) => this.props.props.handleNewPostClick()}
          >
            New Post
          </Menu.Item>
          <Menu.Item
            as="a"
            onClick={(e) => this.props.props.handleNewPhotoClick()}
          >
            New Photo
          </Menu.Item>
        </Sidebar>

        {children}
      </Responsive>
    );
  }
}
// {children} in between Visibility and responsive

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {
    user: {
      friendships: [],
      strainreviews: [],
      gallery: [],
    },
  };

  componentDidMount() {
    let token = localStorage.token;

    token
      ? fetch("http://localhost:3000/api/v1/current_user", {
          method: "GET",
          headers: {
            Authorization: `${token}`,
            "content-type": "application/json",
            accepts: "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((userData) => {
            this.setState({
              user: { ...userData.user },
              avatar: userData.user.avatar,
            });
          })
      : console.log("fuck my life");
  }

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  handlePlusClick = () => {
    this.setState({ visible: true });
  };

  handleDoublePlusClick = () => {
    this.setState({ visible: false });
  };

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;
    const { visible } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        {console.log("MOVBIBI", this.props, this.state)}
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          direction="bottom"
          onHide={this.handleSidebarHide}
          horizontal
          visible="true"
        >
          <Menu.Item as="a">
            <Icon name="cog" />
          </Menu.Item>
          <Menu.Item as={Link} name="profile" to="/profile/">
            <Icon name="user" />
          </Menu.Item>
          <Menu.Item
            as="a"
            onClick={(e) => this.handlePlusClick()}
            onDoubleClick={(e) => this.handleDoublePlusClick()}
          >
            <Icon name="plus square" />
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="search" />
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="street view"></Icon>
          </Menu.Item>
        </Sidebar>

        <Sidebar
          as={Menu}
          animation="scale down"
          inverted
          direction="top"
          onClick={this.handlePlusClick}
          vertical
          visible={visible}
        >
          <Menu.Item
            as="a"
            onClick={(e) => this.props.props.handleNewStrainReviewClick()}
          >
            New StrainReview
          </Menu.Item>
          <Menu.Item
            as="a"
            onClick={(e) => this.props.props.handleNewPostClick()}
          >
            New Post
          </Menu.Item>
          <Menu.Item
            as="a"
            onClick={(e) => this.props.props.handleNewPhotoClick()}
          >
            New Photo
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 50, padding: "1em 0em" }}
            vertical
          >
            <Menu.Item as={Link} to="/dashboard">
              {this.state.user.username}
              {this.state.user.avatar ? (
                <Image
                  src={this.state.avatar.url}
                  name={this.state.user.username}
                  size="mini"
                />
              ) : (
                <Avatar size="mini" />
              )}
            </Menu.Item>
          </Segment>
          <Grid columns={1} divided>
            <Grid.Row centered>
              <Grid.Column>
                <div
                  className="ui three item menu"
                  onClick={(e) => this.props.handleClick(e)}
                >
                  <Link className="item" id="feed">
                    <i className="fire large icon" id="feed" />
                  </Link>
                  <Link className="item" id="photos">
                    <i className="photo large icon" id="photo" />
                  </Link>
                  <Link className="item" id="strains">
                    <i className="leaf large icon" id="strains" />
                  </Link>
                </div>
                <Segment>1</Segment>
                <Segment>1</Segment>
                <Segment>1</Segment>
                <Segment>1</Segment>
                <Segment>1</Segment>
                <Segment>1</Segment>
                <Segment>1</Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}
MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children, functions }) => (
  <div>
    <DesktopContainer props={functions}>{children}</DesktopContainer>
    <MobileContainer props={functions}>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

export default withRouter(Profile);

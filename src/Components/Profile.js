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
  Input,
  Dropdown
} from "semantic-ui-react";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Link, Switch, withRouter } from "react-router-dom";

import Avatar from "react-avatar";
import MobileNavBar from "./MobileNavBar"
import home from "../assets/img/home.svg";
import notification from "../assets/img/notification.svg";
import message from "../assets/img/message.svg";

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
      const avatar = "https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80"
      const options = [
    { key: 'Products', text: 'Products', value: 'Products' },
    { key: 'Buddies', text: 'Buddies', value: 'Buddies' },
    { key: 'Shop', text: 'Shop', value: 'Shop' },
  ]


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

            <div className="side">
                <Input
                    size='mini'
  label={<Dropdown defaultValue='Products' compact options={options} />}
  labelPosition='right'
  placeholder='Search on My Buds'
  />
            </div>
          </div>
        </header>

        <div className="banner" >
            <img class="object-fit_fill" src='https://images.unsplash.com/photo-1506765515384-028b60a970df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=468&h=180&q=80'/>
        </div>

        <div className="bar">
          <div className="content">
            <ul>
              <li className="active">
                <span>Post</span>
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
                <h1>Your Username Here</h1>
                <span>@yourusernamehere</span>
                <p>Software developer and sometimes gamer</p>

                <ul className="list">
                  <li>
                    <img src={place} alt="place" /> Halifax, Canadá
                  </li>
                  <li>
                    <img src={url} alt="url" /> jancarlos.dev
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
                    <li><img src="https://images.unsplash.com/photo-1537372660699-9b2f1b4d47d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" width="80" height="80"></img> </li>
                    <li><img src="https://images.unsplash.com/photo-1622495546323-5dac33dedb01?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" width="80" height="80"></img></li>
                    <li><img src="https://images.unsplash.com/photo-1623555448479-22c56bfc26ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=839&q=80" width="80" height="80"></img></li>
                    <li><img src="https://images.unsplash.com/photo-1623557415599-b1c648cedc07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" width="80" height="80"></img></li>
                    <li><img src="https://images.unsplash.com/photo-1623552564094-c659f7a8150c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" width="80" height="80"></img></li>
                    <li><img src="https://images.unsplash.com/photo-1623363435794-e12cc4b206db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=672&q=80" width="80" height="80"></img></li>
                  </ul>
                </div>
              </aside>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
              <section className="timeline">
                <nav>
                  <Link to="/" className="active">
                    Posts
                  </Link>
                  <Link to="/">Posts and Reviews</Link>
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
                        <img src="https://images.unsplash.com/photo-1623589252717-5f82f490ad78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Avatar" />
                        <div className="info">
                          <strong>
                            Troy_jade <span>@troy_jade</span>
                          </strong>
                          <button>Follow</button>
                        </div>
                      </div>
                      <Link to="/">X</Link>
                    </li>
                    <li>
                      <div className="profile">
                        <img src="https://images.unsplash.com/photo-1623113527138-b7b030cd9c0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Avatar" />
                        <div className="info">
                          <strong>
                            Jojo_12 <span>@jojo_12</span>
                          </strong>
                          <button>Follow</button>
                        </div>
                      </div>
                      <Link to="/">X</Link>
                    </li>
                    <li>
                      <div className="profile">
                        <img src="https://images.unsplash.com/photo-1623265041640-8973a7afe898?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="Avatar" />
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
        {getWidth() > 650? null : <MobileNavBar active="profile" handleAddPostForm={this.props.handleAddPostForm}/>}
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
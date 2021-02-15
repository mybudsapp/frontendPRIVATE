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
  Label,
  Input,
  Card,
  Dropdown,
} from "semantic-ui-react";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Link, Switch, withRouter } from "react-router-dom";
import Avatar from "react-avatar";
import {
  BasicFriendsFeed,
  FriendsPhotosFeed,
  FriendsStrainFeed,
  RecentActivityFeed,
  AllUsersFeed,
} from "./ActivityFeeds";
import ExploreContainer from "./ExploreContainer";
import UserContentDisplay from "./UserContentDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faCalendar,
  faDollarSign,
  faClipboard,
  faComment,
  faStore,
  faBarcode,
  faSearchPlus,
  faGrin,
  faCogs
} from "@fortawesome/free-solid-svg-icons";

import MobileNavBar from "./MobileNavBar"

import home from "../assets/img/home.svg";
import notification from "../assets/img/notification.svg";
import message from "../assets/img/message.svg";

import "../assets/css/sb-admin-2.css";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class UserDashboard extends React.Component {
  //okay so the dashboard is going to be geared towards dispensaries owners, they might have more than one dispensary
  //and several strains, they should be able to see all of the strains they've brought to the market and
  //be able to attach which strain is at which dispensary
  //the dashboard is a CRM type of deal, click dispensaries and should show users dispensaries, same with strains
  //when they click the menu of either dispensary or strain, then they should have the ability to add a strain or add a dispensary
  //clicking on the menu should bring up dispensary card or strain card, notifications of strain will popup on the card, notifications
  //for the dispensary will be on the card, (options for what type of notifications they receive would be cool)
  //****nice to have**** notifications setting would be able to change what kind of notifications you receive, types of hits

  //if the user dashboard is mobile than the mobile has to be for Patient user's only, dispensary owners need to be on desktop

  //mobile users cannot create dispensaries or strains

  //desktop ussers cannot create dispensary reviews or strain reviews

  state = {
    activityFeed: (
      <RecentActivityFeed history={this.props.history} user={this.props} />
    ),
  };

  handleActivityFeedClick = (e) => {
    if (e.target.id === "feed") {
      this.setState({
        activityFeed: (
          <BasicFriendsFeed user={this.props} history={this.props.history} />
        ),
      });
      console.log("whoa");
    } else if (e.target.id === "photos") {
      this.setState({
        activityFeed: (
          <FriendsPhotosFeed user={this.props} history={this.props.history} />
        ),
      });

      console.log("whoa photos");
    } else if (e.target.id === "strains") {
      this.setState({
        activityFeed: (
          <FriendsStrainFeed user={this.props} history={this.props.history} />
        ),
      });
      console.log("whoa strains");
    }
  };

  componentDidMount = () => {
    // dashboard fetches members gallery, strain reviews, strains, and dispensaries

    fetch("http://localhost:3000/api/v1/dispensaries/", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
      },
    }).then((res) => {
      if (!res.ok) {
        res.text().then((text) => alert(text));
      } else {
        return res.json().then((dispensaryData) => {
          this.setState({ dispensary: true, dispensaries: dispensaryData });
        });
      }
    });
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const activityFeedToDisplay = this.state.activityFeed;
    const { activeItem } = this.state;

    //using active item to display what needed to display,
    // the component was saved to the state

    return (
      <React.Fragment>
          <div id="custom-css-product">
              <header className="main-header">
                <div className="container content">
                  <nav>
                    <ul>
                      <li>
                        <img src={home} alt="Home" /> Home
                      </li>
                      <li>
                        <img src={notification} alt="Notifications" />
                        Notifications
                      </li>
                      <li>
                        <img src={message} alt="Messages" /> Messages
                      </li>
                    </ul>
                  </nav>
                  <div className="side">

                    <input type="text" placeholder="Search on My Buds" />
                  </div>
                </div>
              </header>
          </div>
        <div id="wrapper">
          <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
          <li>
            <Link
              to="/"
              className="sidebar-brand d-flex align-items-center justify-content-center"
            >
              <div className="sidebar-brand-text mx-3">Dashboard</div>
            </Link>
        </li>
        <li className="nav-item active">
            <hr className="sidebar-divider my-0" />


              <Link to="/" className="nav-link" href="index.html">
                <FontAwesomeIcon
                  icon={faStore}
                  className="mr-2"
                ></FontAwesomeIcon>
            <span>Shops</span>
              </Link>
          </li>

            <li className="nav-item active">
            <Link to="/" className="nav-link" href="index.html">
              <FontAwesomeIcon
                icon={faBarcode}
                className="mr-2"
              ></FontAwesomeIcon>
          <span>Products</span>
            </Link>
        </li>
            <li className="nav-item active">
          <Link to="/" className="nav-link" href="index.html">
            <FontAwesomeIcon
              icon={faSearchPlus}
              className="mr-2"
            ></FontAwesomeIcon>
        <span>Explore</span>
          </Link>
      </li>

      <li className="nav-item active">
        <Link to="/" className="nav-link" href="index.html">
          <FontAwesomeIcon
            icon={faGrin}
            className="mr-2"
          ></FontAwesomeIcon>
      <span>Buddies</span>
        </Link>
    </li>
    <li className="nav-item active">
        <hr className="sidebar-divider my-0" />
          <Link to="/" className="nav-link" href="index.html">
            <FontAwesomeIcon
              icon={faCogs}
              className="mr-2"
            ></FontAwesomeIcon>
        <span>Settings</span>
          </Link>
      </li>
          </ul>

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">


              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">

                </div>

                <div className="row">
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                              Earnings (Monthly)
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              $40,000
                            </div>
                          </div>
                          <div className="col-auto">
                            <FontAwesomeIcon
                              icon={faCalendar}
                              className="fa-4x text-gray-300"
                            ></FontAwesomeIcon>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                              Earnings (Annual)
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              $215,000
                            </div>
                          </div>
                          <div className="col-auto">
                            <FontAwesomeIcon
                              icon={faDollarSign}
                              className="fa-4x text-gray-300"
                            ></FontAwesomeIcon>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                              Tasks
                            </div>
                            <div className="row no-gutters align-items-center">
                              <div className="col-auto">
                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                  50%
                                </div>
                              </div>
                              <div className="col">
                                <div className="progress progress-sm mr-2">
                                  <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <FontAwesomeIcon
                              icon={faClipboard}
                              className="fa-4x text-gray-300"
                            ></FontAwesomeIcon>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                              Pending Requests
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                              18
                            </div>
                          </div>
                          <div className="col-auto">
                            <FontAwesomeIcon
                              icon={faComment}
                              className="fa-4x text-gray-300"
                            ></FontAwesomeIcon>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MobileNavBar active="home" />
      </React.Fragment>
    );
  }
}

class DesktopContainer extends Component {
  state = {};

  componentDidMount() {
    let token = localStorage.token;

    if (token) {
      fetch("http://localhost:3000/api/v1/current_user", {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "content-type": "application/json",
          accepts: "application/json",
        },
      }).then((res) => {
        if (!res.ok) {
          res.text().then((text) => alert(text));
        } else {
          return res.json().then((userData) => {
            this.setState({
              user: { ...userData.user },
              token: userData.jwt,
              avatar: userData.user.avatar,
            });
          });
        }
      });
    } else {
      console.log("wowo");
    }
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
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          direction="top"
          onHide={this.handleSidebarHide}
          vertical
          visible={visible}
        >
          {console.log("DASHBOARD STATE SHOULD HAVE SOME", this.state)}
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

        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 50, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as={Link} to="/home" hover="active">
                  Home
                </Menu.Item>
                <Menu.Item position="right">
                  {this.state.user ? (
                    <Button
                      as={Link}
                      to="/home"
                      inverted={!fixed}
                      onClick={() => this.props.logOutHandler}
                    >
                      {" "}
                      Log Out{" "}
                    </Button>
                  ) : null}
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Settings
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
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
      strain_reviews: [],
      gallery: [],
    },
  };

  componentDidMount() {
    let token = localStorage.token;

    if (token) {
      fetch("http://localhost:3000/api/v1/current_user", {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "content-type": "application/json",
          accepts: "application/json",
        },
      }).then((res) => {
        if (!res.ok) {
          res.text().then((text) => alert(text));
        } else {
          return res.json().then((userData) => {
            this.setState({
              user: { ...userData.user },
              token: userData.jwt,
              avatar: userData.user.avatar,
            });
          });
        }
      });
    } else {
      console.log("wowo");
    }
  }

  handleActivityFeedClick = (e) => {
    if (e.target.id === "feed") {
      this.setState({
        activityFeed: (
          <BasicFriendsFeed user={this.props} history={this.props.history} />
        ),
      });
      console.log("whoa");
    } else if (e.target.id === "photos") {
      this.setState({
        activityFeed: (
          <FriendsPhotosFeed user={this.props} history={this.props.history} />
        ),
      });

      console.log("whoa photos");
    } else if (e.target.id === "strains") {
      this.setState({
        activityFeed: (
          <FriendsStrainFeed user={this.props} history={this.props.history} />
        ),
      });
      console.log("whoa strains");
    }
  };

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
    const activityFeedToDisplay = this.state.activityFeed;

    return (
      <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
        {console.log(this.state.user)}

        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 50, padding: "1em 0em" }}
          vertical
        >
          This is a segment that I could put anything on
        </Segment>

        <div
          className="ui three item menu"
          onClick={(e) => this.handleActivityFeedClick(e)}
        >
          <Link to="/" className="item" id="feed">
            <i className="fire large icon" id="feed" />
          </Link>
          <Link to="/" className="item" id="photos">
            <i className="photo large icon" id="photo" />
          </Link>
          <Link to="/" className="item" id="strains">
            <i className="leaf large icon" id="strains" />
          </Link>
        </div>

        <Segment>
          <UserContentDisplay
            activeItem={this.state.activeItem}
            user={this.state.user}
            dispensaries={this.state.user.dispensaries}
            strains={this.state.user.strains}
            deleteDispensaryRequest={this.state.deleteDispensaryRequest}
            deleteStrainRequest={this.state.deleteStrainRequest}
          />
        </Segment>

        <Menu fixed="bottom" inverted>
          <Container>
            <Menu.Item as="a" header>
              My Buds
            </Menu.Item>
            <Menu.Item position="right"></Menu.Item>
            <Menu.Item as={Link} to="/home">
              Home
            </Menu.Item>
          </Container>
        </Menu>
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

export default withRouter(UserDashboard);

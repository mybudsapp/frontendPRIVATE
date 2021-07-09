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
  Feed
} from "semantic-ui-react";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Link, Switch, withRouter } from "react-router-dom";
import Avatar from "react-avatar";
import {
  BasicFriendsFeed,
  FriendsPhotosFeed,
  StoreFeed,
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
  faCogs,
  faAddressCard
} from "@fortawesome/free-solid-svg-icons";

import MobileNavBar from "./MobileNavBar"
import MobileHeaderBar from "./MobileHeaderBar"

import home from "../assets/img/home.svg";
import notification from "../assets/img/notification.svg";
import message from "../assets/img/message.svg";

import "../assets/css/navigationbar.css";



const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};
//
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
activeItem: "Feed"
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
    }
  };

  componentDidMount = () => {

      this.props.handleShowWelcome()
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleShowPersonality = () => {

  }

  render() {
    const activityFeedToDisplay = this.state.activityFeed;
    const { activeItem } = this.state;

    const options = [
  { key: 'Products', text: 'Products', value: 'Products' },
  { key: 'Buddy', text: 'Buddy', value: 'Buddy' },
  { key: 'Shop', text: 'Shop', value: 'Shop' },
]
    //using active item to display what needed to display,
    // the component was saved to the state

    const {user} = this.props
    const {stores} = this.props
    const {strains} = this.props
    const {products} = this.props
    const {avatar} = this.props
    const events = [
{
date: '1 Hour Ago',
image: 'https://dreamlightimages.com/wp-content/uploads/2017/09/GenoP.jpg',
meta: '4 Likes',
summary: 'Elliot Fu added you as a friend',
},
{
date: '4 days ago',
image: 'https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
meta: '1 Like',
summary: 'Helen Troy added 2 new illustrations',
extraImages: [
'https://i.pinimg.com/originals/d9/de/11/d9de112b2c4aedef6df31d05194adf21.jpg',
'https://media1.popsugar-assets.com/files/thumbor/5kQPlK668HuuO3xR1PNjj7D7WeY/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/01/07/708/n/1922441/51697cf35e14ab2e7d1c65.21465861_GettyImages-/i/Best-Winter-Photos.jpg',
],
},
{
date: '3 days ago',
image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
meta: '8 Likes',
summary: 'Joe Henderson posted on his page',
extraText:
"Ours is a life of constant reruns. We're always circling back to where we'd we started.",
},
{
date: '4 days ago',
image: 'https://images.unsplash.com/photo-1588979355313-6711a095465f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=321&q=80',
meta: '41 Likes',
summary: 'Justen Kitsune added 2 new photos of you',
extraText:
'Look at these fun pics I found from a few years ago. Good times.',
extraImages: [
'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
'https://images.unsplash.com/photo-1581954548122-4dff8989c0f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80',
],
},
]


    return (
      <ResponsiveContainer functions={this.props}>



        <div id="wrapper">
          <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
          <li class="nav-item">
              <br></br>

            <Link
              to="/profile"
              className="sidebar-brand d-flex align-items-center justify-content-center"
            >
            <Avatar round href="/profile" src="https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80"></Avatar>
        </Link>
        <Link
          to="/dashboard"
          className="sidebar-brand d-flex align-items-center justify-content-center"
        >
        <div className="sidebar-brand-text mx-3">Dashboard</div>
    </Link>
        </li>
        <li className="nav-item">
            <hr className="sidebar-divider my-0" />


              <Button to="/" className="nav-link" color='teal' name='Shops' onClick={this.handleItemClick}>
                <FontAwesomeIcon
                  icon={faStore}
                  className="mr-2"
                ></FontAwesomeIcon>
            <span>Shops</span>
            </Button>
          </li>

            <li className="nav-item">
            <Button color='olive' to="/" className="nav-link" name='Products' onClick={this.handleItemClick}>
              <FontAwesomeIcon
                icon={faBarcode}
                className="mr-2"
              ></FontAwesomeIcon>
          <span>Products</span>
          </Button>
        </li>
            <li className="nav-item">
          <Button  color='violet' to="/explore"  as={Link} className="nav-link" >
            <FontAwesomeIcon
              icon={faSearchPlus}
              className="mr-2"
            ></FontAwesomeIcon>
        <span>Explore</span>
        </Button >
      </li>

    <hr className="sidebar-divider my-0" />
    <li className="nav-item">
          <Button name='Settings' color="blue" className="nav-link" onClick={this.handleItemClick}>
            <FontAwesomeIcon
              icon={faCogs}
              className="mr-2"
            ></FontAwesomeIcon>
        <span>Settings</span>
        </Button>
      </li>

      <br></br>

      <br></br>
      <br></br>
      <br></br>
          <br></br>
          <br></br>



      <div class="sidebar-card">
              <p class="text-center mb-2"><strong>Terms of Service</strong> </p>
              <p class="text-center mb-2"><strong>Privacy Policy</strong> </p>
              <p class="text-center mb-2"><strong>Licenses</strong></p>


          </div>



          </ul>

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Segment vertical textAlign="center" style={{paddingTop: 0}}>
                <UserContentDisplay activeItem={activeItem}/>
            </Segment>

            </div>
          </div>
        </div>

    </ResponsiveContainer>
    );
  }
}

class DesktopContainer extends Component {
  state = {};



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
    const options = [
  { key: 'Products', text: 'Products', value: 'Products' },
  { key: 'Buddy', text: 'Buddy', value: 'Buddy' },
  { key: 'Shop', text: 'Shop', value: 'Shop' },
]
    //using active item to display what needed to display,
    // the component was saved to the state

    const {user} = this.props


    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth} functions={this.props}>


          <div id="custom-css-product">
              <header className="main-header">
                <div className="container content">
                  <nav>
                    <ul>
                        <li>
                        <p><Icon name='at' size="large" />Your User Name </p>

                        </li>

                        <Link to="/dashboard"  >
                  <li>
                        <img src={home} alt="Home" /> Home
                      </li>
                  </Link>
                      <li>
                        <img src={notification} alt="Notifications" />
                        Notifications
                      </li>
                    </ul>
                  </nav>


                      <Input
                          size='mini'
      label={<Dropdown defaultValue='Strain' compact options={options} />}
      labelPosition='right'
      placeholder='Search on My Buds'
    />
{user? <Button onClick={this.props.logOutHandler}>Sign Out</Button> : null}

                </div>

              </header>
          </div>

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
   activeItem: "Feed"
    };

  componentDidMount() {
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
    const { activeItem } = this.state;
    const options = [
  { key: 'Products', text: 'Products', value: 'Products' },
  { key: 'Buddy', text: 'Buddy', value: 'Buddy' },
  { key: 'Shop', text: 'Shop', value: 'Shop' },
]




    return (
      <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth} functions={this.props}>


        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
              <Segment vertical>
              <UserContentDisplay activeItem={activeItem} />
          </Segment>

          </div>
        </div>

        <MobileNavBar active="home" handleAddPostForm={this.props.handleAddPostForm}/>

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

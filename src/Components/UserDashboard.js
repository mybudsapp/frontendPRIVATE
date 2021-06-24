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
  faCogs,
  faAddressCard
} from "@fortawesome/free-solid-svg-icons";

import MobileNavBar from "./MobileNavBar"
import MobileHeaderBar from "./MobileHeaderBar"

import home from "../assets/img/home.svg";
import notification from "../assets/img/notification.svg";
import message from "../assets/img/message.svg";



import "../assets/css/sb-admin-2.css";

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

    // fetch("http://localhost:3000/api/v1/dispensaries/", {
    //   method: "GET",
    //   headers: {
    //     "content-type": "application/json",
    //     accepts: "application/json",
    //   },
    // }).then((res) => {
    //   if (!res.ok) {
    //     res.text().then((text) => alert(text));
    //   } else {
    //     return res.json().then((dispensaryData) => {
    //       this.setState({ dispensary: true, dispensaries: dispensaryData });
    //     });
    //   }
    // });

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
      <React.Fragment>
          <div id="custom-css-product">
              <header className="main-header">
                <div className="container content">
                  <nav>
                    <ul>
                        <li>
                        <p><Icon name='at' size="large" />Your User Name Here</p>
                        </li>
                  <li>
                        <img src={home} alt="Home" /> Home
                      </li>
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

      <li className="nav-item">
        <Button color='purple' to="/" className="nav-link" href="index.html">
          <FontAwesomeIcon
            icon={faGrin}
            className="mr-2"
          ></FontAwesomeIcon>
      <span>Buddies</span>
      </Button>
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
      <li className="nav-item">
            <Button name='Personality Test' color="blue" className="nav-link" onClick={this.props.handleShowPersonality}>
              <FontAwesomeIcon
                icon={faAddressCard}
                className="mr-2"
              ></FontAwesomeIcon>
          <span>Personality Test</span>
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
                <Segment vertical textAlign="center">
                <UserContentDisplay activeItem={activeItem}/>
            </Segment>

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
    const options = [
  { key: 'Products', text: 'Products', value: 'Products' },
  { key: 'Buddy', text: 'Buddy', value: 'Buddy' },
  { key: 'Shop', text: 'Shop', value: 'Shop' },
]




    return (
      <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
        {console.log(this.state.user)}

        <div id="custom-css-product">
            <header className="main-header">
              <div className="container content">
                <nav>
                  <ul>
                      <li>
                     <Icon name='at' size="large"></Icon> <p>Your UserName Here</p>
                      </li>
                <li>
                      <img src={home} alt="Home" /> Home
                    </li>
                    <li>
                      <img src={notification} alt="Notifications" />
                      Notifications
                    </li>
                  </ul>
                </nav>


                    <Input
                        size='mini'
    label={<Dropdown defaultValue='Products' compact options={options} />}
    labelPosition='right'
    placeholder='Search on My Buds'
  />
 <Button >Sign Out</Button>

              </div>

            </header>
        </div>
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

<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fbeautiful-things&psig=AOvVaw39dgrQVi_5a8BPQgq6Mj4z&ust=1623299111571000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNidhczaifECFQAAAAAdAAAAABAD"></img>

	<div class="container">

		<div class="profile">

			<div class="profile-image">

				<img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt=""></img>

			</div>

			<div class="profile-user-settings">

				<h1 class="profile-user-name">janedoe_</h1>

				<button class="btn profile-edit-btn">Edit Profile</button>

				<button class="btn profile-settings-btn" aria-label="profile settings"><i class="fas fa-cog" aria-hidden="true"></i></button>

			</div>

			<div class="profile-stats">

				<ul>
					<li><span class="profile-stat-count">164</span> posts</li>
					<li><span class="profile-stat-count">188</span> followers</li>
					<li><span class="profile-stat-count">206</span> following</li>
				</ul>

			</div>

			<div class="profile-bio">

				<p><span class="profile-real-name">Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>

			</div>

		</div>


	</div>




<main>

	<div class="container">

		<div class="gallery">

			<div class="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" class="gallery-image" alt=""></img>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop" class="gallery-image" alt=""></img>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 89</li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 5</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop" class="gallery-image" alt=""></img>

				<div class="gallery-item-type">

					<span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

				</div>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 42</li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

				<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fbeautiful-things&psig=AOvVaw39dgrQVi_5a8BPQgq6Mj4z&ust=1623299111571000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNidhczaifECFQAAAAAdAAAAABAD" class="gallery-image" alt=""></img>

				<div class="gallery-item-type">

					<span class="visually-hidden">Video</span><i class="fas fa-video" aria-hidden="true"></i>

				</div>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 38</li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop" class="gallery-image" alt=""></img>

				<div class="gallery-item-type">

					<span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

				</div>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 47</li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop" class="gallery-image" alt=""></img>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 94</li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 3</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop" class="gallery-image" alt=""></img>

				<div class="gallery-item-type">

					<span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

				</div>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 52</li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 4</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop" class="gallery-image" alt=""></img>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 66</li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop" class="gallery-image" alt=""></img>

				<div class="gallery-item-type">

					<span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

				</div>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 45</li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop" class="gallery-image" alt=""></img>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 34</li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 1</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop" class="gallery-image" alt=""></img>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 41</li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 0</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop" class="gallery-image" alt=""></img>

				<div class="gallery-item-type">

					<span class="visually-hidden">Video</span><i class="fas fa-video" aria-hidden="true"></i>

				</div>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 30</li>
						<li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
					</ul>

				</div>

			</div>

		</div>


		<div class="loader"></div>

	</div>


</main>

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

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
  BudsPhotosFeed,
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
  faAddressCard,
  faUser,
   faPlus,
  faCannabis
} from "@fortawesome/free-solid-svg-icons";

import MobileNavBar from "./MobileNavBar"
import MobileHeaderBar from "./MobileHeaderBar"

import home from "../assets/img/home.svg";
import notification from "../assets/img/notification.svg";
import message from "../assets/img/message.svg";

import "../assets/css/navigationbar.css";
import "../assets/css/headerbar.css";



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

  handleMobileActivityClick = (e) => {
    if (e.target.id === "feed") {
      this.setState({
        activityFeed: (
          <BasicFriendsFeed user={this.props} history={this.props.history} />
        ),
      });
      //("whoa");
  } else if (e.target.id === "photos") {
      this.setState({
        activityFeed: (
          <BudsPhotosFeed user={this.props} history={this.props.history} />
        ),
      });

      //("whoa photos");
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
          <li className="nav-item">
              <br></br>

            <Link
              to="/profile"
              className="sidebar-brand d-flex align-items-center justify-content-center"
            >
            {this.props.user.avatar? <Image size='tiny' round={true} src={this.props.user.avatar.url} avatar/> : <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} name={this.props.username} />}
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
          <Button color='green' to="/" className="nav-link" name='Reviews' onClick={this.handleItemClick}>
            <FontAwesomeIcon
              icon={faCannabis}
              className="mr-2"
            ></FontAwesomeIcon>
        <span>Reviews</span>
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
      {
            user?
      <li className="nav-item">
            <Button basic className="nav-link" onClick={this.props.logOutHandler}>
              <FontAwesomeIcon
                icon={faUser}
                className="mr-2"
              ></FontAwesomeIcon>
          <span>Sign Out</span>
          </Button>
      </li> : null
    }


      <br></br>

      <br></br>
      <br></br>
      <br></br>
          <br></br>
          <br></br>



      <div className="sidebar-card">
              <p class="text-center mb-2"><strong>Terms of Service</strong> </p>
              <p class="text-center mb-2"><strong>Privacy Policy</strong> </p>
              <p class="text-center mb-2"><strong>Licenses</strong></p>


          </div>



          </ul>

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Segment vertical textAlign="center" style={{paddingTop: 0}}>
                <UserContentDisplay
                    activeItem={activeItem}
                    acceptFriendRequest={this.props.acceptFriendRequest}
                    updatedProducts={this.props.updatedProducts}
                    displayItemForDelete={this.props.displayItemForDelete}
                    storeproducts={this.props.storeproducts}
                    productUpdated={this.props.productUpdated}
                    submitStoreHandler={this.props.submitStoreHandler}
                    handleViewStoreProfile={this.props.handleViewStoreProfile}
                    deleteStoreRequest={this.props.deleteStoreRequest}
                    submitProductHandler={this.props.submitProductHandler}
                    submitStrainHandler={this.props.submitStrainHandler}
                    user={this.props.user}
                    submitEditHandler={this.props.submitEditHandler}
                    displayStoreForEdit={this.props.displayStoreForEdit}
                    displayItemForEdit={this.props.displayItemForEdit}
                    editProductsButtonPressed={this.props.editProductsButtonPressed}
                    editProducts={this.props.editProducts}
                    newProduct={this.props.newProduct}
                    editStoreHandler={this.props.editStoreHandler}
                    handleShowComment={this.props.handleShowComment}
                    handleShowPersonality={this.props.handleShowPersonality}
                    handleViewproductProfile={this.props.handleViewproductProfile}
                    />

                {console.log(this.props)}
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


  handleItemClick = (e) => {

      if(e.target.parentElement.parentElement.name === "Post") {

          this.props.props.handleShowNewPost(true)

      }else{
          return null
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
                        {console.log("deeknbout",this.props)}
                    <nav>
                    <ul>
                        <Link to="/dashboard" onClick={() => window.location.reload()}  >
                  <li>
                        <img src={home} alt="Home" /> Home
                      </li>
                  </Link>

                    <li>
                        <Link className={this.props.active === "post" ? "active" : null}>
                            <a name="Post" onClick={e => this.handleItemClick(e)} >
                            <FontAwesomeIcon
                            icon={faPlus}
                            className="fa-2x text-black-300"/>
                    </a>
                        </Link>
                  </li>
                    </ul>
                  </nav>


                      <Input
                          size='mini'
      label={<Dropdown defaultValue='Strain' compact options={options} />}
      labelPosition='right'
      placeholder='Search on My Buds'
    />

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

  handleMobileActivityClick = (e) => {



    if (e.target.parentElement.parentElement.name === "feed") {
      this.setState({
          activeItem: "home",
        activityFeed: (
          <BasicFriendsFeed user={this.props} history={this.props.history} />
        ),
      });
      //("whoa");
  } else if (e.target.parentElement.parentElement.name === "notifications") {
      this.setState({
          activeItem: "notifications",
        activityFeed: (
          <BudsPhotosFeed user={this.props} history={this.props.history} />
        ),
      });

      //("whoa photos");
  } else if (e.target.parentElement.parentElement.name === "Settings") {
      this.setState({
          activeItem: "Settings"
      });

      //("whoa photos");
  } else if (e.target.parentElement.parentElement.name === "post") {
      this.setState({
          activeItem: "post",
        activityFeed: (
          <BudsPhotosFeed user={this.props} history={this.props.history} />
        ),
      });

      //("whoa photos");
  } else {
      return null
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
    const { handleShowComment} = this.props.props


    //mobile head bar needs active
    return (
      <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth} functions={this.props}>
          <MobileHeaderBar active={this.state.activeItem} handleMobileActivityClick={this.handleMobileActivityClick}/>



              <Segment vertical style={{paddingTop: "60px", paddingBottom: "75px"}}>
                  {console.log("buskljnwc", this.props.props)}
              <UserContentDisplay
                  activeItem={activeItem}
                  acceptFriendRequest={this.props.acceptFriendRequest}
                  submitEditHandler={this.props.submitEditHandler}
                  submitStoreHandler={this.props.props.submitStoreHandler}
                  submitProductHandler={this.props.props.submitProductHandler}
                  submitStrainHandler={this.props.props.submitStrainHandler}
                  handleShowComment={handleShowComment}
                  handleShowPersonality={this.props.handleShowPersonality}
                  handleViewproductProfile={this.props.handleViewproductProfile}
                  user={this.props.props.user}
                  />

          </Segment>


        <MobileNavBar active={this.state.activeItem} handleAddPostForm={this.props.props.handleAddPostForm}/>

      </Responsive>
    );
  }
}
MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = (props) => (
  <div>
    <DesktopContainer props={props.functions}>{props.children}</DesktopContainer>
        {console.log(props)}
    <MobileContainer handleShowComment={props.handleShowComment} props={props.functions}>{props.children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

export default withRouter(UserDashboard);

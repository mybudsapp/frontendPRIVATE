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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCameraRetro,
    faHandshake,
    faFileAlt
} from "@fortawesome/free-solid-svg-icons";

import "../assets/css/navigationbar.css";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class StoreProfile extends Component {
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
        activeItem: "StrainProducts",
      });
    }
  };

  postButtonPressed = () => {
      console.log("ASDASD123")
  }

  friendsButtonPressed = () => {

  }

  reviewsButtonPressed = () => {

  }

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
                  <Link to="/dashboard" >
                <li>
                  <img src={home} alt="Home" /> Home
                </li>
            </Link>
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




                <div class="banner">
         <img src={this.props.store.storefront_picture.url} />
     </div>



        <div className="bar">
          <div className="content">
            <ul>

              <li  >
                <span >Post</span>
                <a onClick={this.postButtonPressed}>
                <strong>1234</strong>
            </a>
              </li>
              <li>
                <span>Followers</span>
                <a onClick={this.friendsButtonPressed}>
                <strong>1234</strong>
                </a>
              </li>
              <li>
                <span>Products</span>
                <a onClick={this.reviewsButtonPressed}>
                <strong>14</strong>
                </a>
              </li>
            </ul>
            {this.props.user?

                <div className="actions">
              <button>Follow Request</button>

            </div>: null}

          </div>
        </div>

        <div className="wrapper-content container content">
          <div className="row mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <aside className="profile">

              <h1>{this.props.store.namespace}</h1>
              <div class="store-profile-avatar">
              <img src={this.props.store.storefront_picture.url} />
              </div>

                <span>@{this.props.store.namespace}</span>
                <br></br>
                <p>{this.props.store.description}</p>
                <p>{this.props.store.address}</p>
                <ul className="list">
                  <li>
                    <img src={place} alt="place" /> {this.props.store.city}, {this.props.store.state}
                  </li>
                  <li>

                  </li>

                </ul>
           </aside>





       </div>







       <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
           <section className="timeline">



<Segment.Group>
<Segment.Group horizontal>


    <Segment textAlign="center">
        <a onClick={this.postButtonPressed}>
        <FontAwesomeIcon icon={faCameraRetro} style={{"color": "#1cc88a"}}/>
            Posts</a></Segment>

        <Segment textAlign="center"><a onClick={this.friendsButtonPressed}><FontAwesomeIcon icon={faHandshake} style={{"color": "#1cc88a"}}/>Followers</a></Segment>
    <Segment textAlign="center"><a onClick={this.reviewsButtonPressed}><FontAwesomeIcon icon={faFileAlt} style={{"color": "#1cc88a"}}/>Products</a></Segment>
</Segment.Group>


<Segment>
               <section class="post-list">

                   <a href="" class="post">
                       <figure class="post-image">
                           <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                       </figure>
                       <div class="post-overlay">
                           <p>
                               <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                               <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                           </p>
                       </div>
                   </a>
                   <a href="" class="post">
                       <figure class="post-image">
                           <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                       </figure>
                       <div class="post-overlay">
                           <p>
                               <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                               <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                           </p>
                       </div>
                   </a>
                   <a href="" class="post">
                       <figure class="post-image">
                           <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                       </figure>
                       <div class="post-overlay">
                           <p>
                               <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                               <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                           </p>
                       </div>
                   </a>
                   <a href="" class="post">
                       <figure class="post-image">
                           <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                       </figure>
                       <div class="post-overlay">
                           <p>
                               <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                               <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                           </p>
                       </div>
                   </a>
                   <a href="" class="post">
                       <figure class="post-image">
                           <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                       </figure>
                       <div class="post-overlay">
                           <p>
                               <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                               <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                           </p>
                       </div>
                   </a>
                   <a href="" class="post">
                       <figure class="post-image">
                           <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                       </figure>
                       <div class="post-overlay">
                           <p>
                               <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                               <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                           </p>
                       </div>
                   </a>
                   <a href="" class="post">
                       <figure class="post-image">
                           <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                       </figure>
                       <div class="post-overlay">
                           <p>
                               <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                               <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                           </p>
                       </div>
                   </a>
                   <a href="" class="post">
                       <figure class="post-image">
                           <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                       </figure>
                       <div class="post-overlay">
                           <p>
                               <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                               <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                           </p>
                       </div>
                   </a>
                   <a href="" class="post">
                       <figure class="post-image">
                           <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                       </figure>
                       <div class="post-overlay">
                           <p>
                               <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                               <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                           </p>
                       </div>
                   </a>
                   <a href="" class="post">
                       <figure class="post-image">
                           <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                       </figure>

                       <div class="post-overlay">
                           <p>
                               <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                               <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                           </p>
                       </div>
                   </a>
                   <a href="" class="post">
                       <figure class="post-image">
                           <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                       </figure>
                       <div class="post-overlay">
                           <p>
                               <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                               <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                           </p>
                       </div>
                   </a>
                   <a href="" class="post">
                       <figure class="post-image">
                           <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                       </figure>
                       <div class="post-overlay">
                           <p>
                               <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                               <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                           </p>
                       </div>
                   </a>
                   <a href="" class="post">
                       <figure class="post-image">
                           <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                       </figure>
                       <div class="post-overlay">
                           <p>
                               <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                               <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                           </p>
                       </div>
                   </a>
                   <a href="" class="post">
                       <figure class="post-image">
                           <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                       </figure>
                       <div class="post-overlay">
                           <p>
                               <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                               <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                           </p>
                       </div>
                   </a>
                   <a href="" class="post">
                       <figure class="post-image">
                           <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                       </figure>
                       <div class="post-overlay">
                           <p>
                               <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                               <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                           </p>
                       </div>
                   </a>
                   <a href="" class="post">
                       <figure class="post-image">
                           <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                       </figure>
                       <div class="post-overlay">
                           <figure class="post-image">
                               <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                           </figure>
                           <p>
                               <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                               <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                           </p>
                       </div>
                   </a>
                   <a href="" class="post">
                       <figure class="post-image">
                           <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                       </figure>
                       <div class="post-overlay">
                           <p>
                               <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                               <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                           </p>
                       </div>
                   </a>
                   <a href="" class="post">
                       <figure class="post-image">
                           <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                       </figure>
                       <div class="post-overlay">
                           <p>
                               <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                               <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                           </p>
                       </div>
                   </a>
               </section>

           </Segment>

</Segment.Group>




           </section>




       </div>
            </div>






            <div>

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

export default withRouter(StoreProfile);

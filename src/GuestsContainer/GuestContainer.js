import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Button
} from 'semantic-ui-react'
import { Link, Route, Switch, withRouter } from "react-router-dom";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import Home from "../Components/Home";
import StrainForm from '../Components/StrainForm'
import UserContentDisplay from '../Components/UserContentDisplay'
import Search from '../Components/Search'
import NewDispensaryForm from '../Components/NewDispensaryForm'
import EditDispensaryForm from '../Components/EditDispensaryForm'
import NewStrainForm from '../Components/StrainForm'
import EditStrainForm from '../Components/EditStrainForm'
import Profile from '../Components/Profile.js'
import StrainProfile from '../Components/StrainProfile.js'
import StrainReview from '../Components/StrainReview.js'

import Error from "../Components/Error";

import home from "../assets/img/home.svg";
import notification from "../assets/img/notification.svg";
import message from "../assets/img/message.svg";
import logo from "../assets/img/logo.svg";
import avatar from "../assets/img/avatar.png";
import p1 from "../assets/img/p1.jpg";
import p2 from "../assets/img/p2.jpg";
import p3 from "../assets/img/p3.jpg";
import p4 from "../assets/img/p4.jpg";
import heart from "../assets/img/heart.png";
import c1 from "../assets/img/c1.jpg";
import c2 from "../assets/img/c2.jpg";
import c3 from "../assets/img/c3.jpg";

import MobileNavBar from "../Components/MobileNavBar"

import "../assets/css/bundle.css";






const GuestContainerLayout = (props) => {

     console.log(props)

return (
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
        <img src={logo} alt="Logo Twitter" />
        <div className="side">
          <input type="text" placeholder="Search on Twitter" />
          <img src={avatar} alt="Avatar" />
          <button className="btn-tweet">Tweet</button>
        </div>
      </div>
    </header>

    <Container text style={{ marginTop: '2em' }}>
    <Switch>
        <Route
            path="/strains/:strain_name/strainreview/:id"
            render={() => <StrainReview submitNewStrainReviewHandler={props.submitNewStrainReviewHandler} submitCommentHandler={props.submitCommentHandler} />}
            />
        <Route path="/strains/:strain_name/:id"
            render={() => <StrainProfile user={props.user}  strains={props.strains} submitCommentHandler={props.submitCommentHandler}/>} />
        <Route
            path="/:username/newstrain"
            render={() => <NewStrainForm submitHandler={props.submitHandler} user={props.user} />}
            />
            <Route
                path="/:username/editstrain/:id"
                render={() => <EditStrainForm editStrainHandler={props.editStrainHandler} user={props.user} />}
                />
        <Route
            path="/:username/newdispensary"
            render={() => <NewDispensaryForm submitHandler={props.submitHandler} user={props.user} />}
            />
            <Route
                path="/:namespace/editdispensary/:id"
                render={() => <EditDispensaryForm editDispensaryHandler={props.editDispensaryHandler} user={props.user} dispensary={props.dispensary} />}
                />
        <Route
            path="/signup"
            render={() => <Signup signUpSubmitHandler={props.signUpSubmitHandler} />}
            />
        <Route
            path="/login"
            render={() => <Login loginHandler={props.loginHandler} />}
            />
        <Route path="/strains" render={renderProps => {
          return (
            <div>
            <Search></Search>
            <UserContentDisplay strains={props.strains} user={props.user} deleteDispensaryRequest={props.deleteDispensaryRequest}/>
            </div>
          )
        }} />
        <Route path="/home" render={() => <Home/>} />
        <Route path="/" component={Error} />
    </Switch>
    </Container>

    <div class="fixed-bottom">
        <div>
            <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='About' />
                        <List link inverted>
                            <List.Item as='a'>Sitemap</List.Item>
                            <List.Item as='a'>Contact Us</List.Item>
                            <List.Item as='a'>Religious Ceremonies</List.Item>
                            <List.Item as='a'>Gazebo Plans</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Services' />
                        <List link inverted>
                            <List.Item as='a'>Banana Pre-Order</List.Item>
                            <List.Item as='a'>DNA FAQ</List.Item>
                            <List.Item as='a'>How To Access</List.Item>
                            <List.Item as='a'>Favorite X-Men</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header as='h4' inverted>
                            Footer Header
                        </Header>
                        <p>
                            Extra space for a call to action inside the footer that could help re-engage users.
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    </div>


</div>
)
}

export default withRouter(GuestContainerLayout)

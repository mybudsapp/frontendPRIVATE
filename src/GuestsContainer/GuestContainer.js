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
  Button,
  Input
} from 'semantic-ui-react'
import { Link, Route, Switch, withRouter } from "react-router-dom";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import Home from "../Components/Home";
import StrainForm from '../Components/StrainForm'
import UserContentDisplay from '../Components/UserContentDisplay'
import Search from '../Components/Search'
import NewStoreForm from '../Components/NewStoreForm'
import EditStoreForm from '../Components/EditStoreForm'
import NewStrainForm from '../Components/StrainForm'
import EditStrainForm from '../Components/EditStrainForm'
import Profile from '../Components/Profile.js'
import StrainProfile from '../Components/StrainProfile.js'
import StrainReview from '../Components/StrainReview.js'

import Error from "../Components/Error";

import home from "../assets/img/home.svg";
import notification from "../assets/img/notification.svg";
import message from "../assets/img/message.svg";
import logo from "../assets/img/mybudslogo.png";
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

    const options = [
  { key: 'Strain', text: 'Strain', value: 'Strain' },
  { key: 'Buddy', text: 'Buddy', value: 'Buddy' },
  { key: 'Shop', text: 'Shop', value: 'Shop' },
]

return (
<div id="custom-css-product">
    <header className="main-header">
      <div className="container content">
        <nav>
          <ul>
              <Link to="/home">
            <li>
              <img src={home} alt="Home" /> Home
            </li>
        </Link>
            <li>
              <img src={notification} alt="Notifications" />
              Notifications
            </li>
            <li>
              <img src={message} alt="Messages" /> Messages
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

    <Container text style={{ marginTop: '2em' }}>
    <Switch>
        <Route
            path="/strains/:name/strainreview/:id"
            render={() => <StrainReview submitNewStrainReviewHandler={props.submitNewStrainReviewHandler} submitCommentHandler={props.submitCommentHandler} />}
            />
        <Route path="/strains/:name/:id"
            render={() => <StrainProfile user={props.user}  strains={props.strains} submitCommentHandler={props.submitCommentHandler} submitNewStrainReviewHandler={props.submitNewStrainReviewHandler}/>} />
        <Route
            path="/:username/newstrain"
            render={() => <NewStrainForm submitHandler={props.submitHandler} user={props.user} />}
            />
            <Route
                path="/:username/editstrain/:id"
                render={() => <EditStrainForm editStrainHandler={props.editStrainHandler} user={props.user} />}
                />
        <Route
            path="/:username/newstore"
            render={() => <NewStoreForm submitHandler={props.submitHandler} user={props.user} />}
            />
            <Route
                path="/:namespace/editstore/:id"
                render={() => <EditStoreForm editStoreHandler={props.editStoreHandler} user={props.user} store={props.store} />}
                />
        <Route
            path="/signup"
            render={() => <Signup signupSubmitHandler={props.signupSubmitHandler} />}
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
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <br></br>
            <br></br>

    <div class="fixed-bottom">
        <Segment>
            <Grid columns={3} divided>
  <Grid.Row>
    <Grid.Column>
      About Us
    </Grid.Column>
    <Grid.Column>
      Sign Up
    </Grid.Column>
    <Grid.Column>
      Log-In
    </Grid.Column>
    <Grid.Column>
      Terms Of Service
    </Grid.Column>
    <Grid.Column>
      Privacy
    </Grid.Column>
  </Grid.Row>
</Grid>
        </Segment>
        </div>



</div>
)
}

export default withRouter(GuestContainerLayout)

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
import ProductProfile from '../Components/ProductProfile.js'
import StrainReview from '../Components/StrainReview.js'
import PhotoForm from '../Components/PhotoForm'

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
import "../assets/css/navigationbar.css";






const GuestContainerLayout = (props) => {

    const options = [
  { key: 'Strain', text: 'Strain', value: 'Strain' },
  { key: 'Buddy', text: 'Buddy', value: 'Buddy' },
  { key: 'Shop', text: 'Shop', value: 'Shop' },
]

return (
    <div>
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
            path="/Post"
            render={() => (<PhotoForm/>)}
            />
        <Route path="/product"
            render={() => <ProductProfile user={props.user}  submitCommentHandler={props.submitCommentHandler} submitNewStrainReviewHandler={props.submitNewStrainReviewHandler}/>} />
        <Route
            path="/signup"
            render={() => <Signup signupSubmitHandler={props.signupSubmitHandler} />}
            />
        <Route
            path="/login"
            render={() => <Login loginHandler={props.loginHandler} />}
            />
        <Route path="/strain" render={renderProps => {
          return (
            <div>
            <Search></Search>
            <UserContentDisplay strains={props.strains} user={props.user} deleteDispensaryRequest={props.deleteDispensaryRequest}/>
            </div>
          )
        }} />
        <Route path="/home" render={() => <Home/>} />
        <Route path="/" render={() => <Home/>} />
    </Switch>
    </Container>
</div>
<div>
    <MobileNavBar active="post"/>
</div>
</div>

)
}

export default withRouter(GuestContainerLayout)

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
  Dropdown
} from 'semantic-ui-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Route, Link, Switch, withRouter} from 'react-router-dom'
import Avatar from 'react-avatar'
import UserCard from './UserCard'
import MobileNavBar from '../Components/MobileNavBar'
import {BasicFriendsFeed, FriendsPhotosFeed, StoreFeed, RecentActivityFeed, AllUsersFeed, AllProductsFeed} from "./ActivityFeeds"
import "../assets/css/explorecontainer.css";
import home from "../assets/img/home.svg";
import notification from "../assets/img/notification.svg";
import message from "../assets/img/message.svg";



import "../assets/css/sb-admin-2.css";
import "../assets/css/style.css";








const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class ExploreContainer extends React.Component{

state = {
    user : {},
    Feed: <RecentActivityFeed history={this.props.history} user={this.props}/>

}

handlePlusClick = () => {this.setState({ visible: true})}

handleDoublePlusClick = () => { this.setState({ visible: false})}




handleItemClick = (e, { name }) => {


      //(e, name)

    if (name === "users"){
        this.setState({
            Feed: <AllUsersFeed user={this.props} history={this.props.history} handleViewUserProfile={this.props.handleViewUserProfile}/>
        })
        //("whoa")

    }else if (name === "window shop") {

        this.setState({
            Feed: <AllProductsFeed user={this.props.user} history={this.props.history} handleViewStrainProfile={this.props.handleViewStrainProfile}/>
        })

        //("whoa strains")

    }else if (name === "stores"){


        let store = {namespace: "Geniune Leather", address: "123 Address St, City, State", id: 2}


        this.setState({
            Feed: <StoreFeed store={store} history={this.props.history} handleViewUserProfile={this.props.handleViewUserProfile}/>
        })
    }else if (name === "Photos"){

        this.setState({
            Feed: <FriendsPhotosFeed user={this.props} history={this.props.history} handleViewUserProfile={this.props.handleViewUserProfile}/>
        })
        //("whoa strains")

    }
}

componentDidMount = () => {

    let token = localStorage.token;

    fetch("http://localhost:3000/Products", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
      }
    }).then((res) => {
      if (!res.ok) {
        res.text().then((text) => alert(text));
      } else {
        return res.json().then((products) => {
          this.setState({products});
        });
      }
    });
}




render(){

    const activityFeedToDisplay = this.state.Feed
    const { sidebarOpened } = this.state
    const { visible } = this.state
    const { activeItem } = this.state
    //("from the explore container", this.props)



    const arrayOfFriends = this.props.user


    //I need to create a new map of objects so

    // i need to get to check if they are already currently friends by collecting friendships
    // and cross refference from that array by checking if the user ids match currently in their friendships array
    // obect index [key]

//     function areFriends(arrayOfFriends) {
//         //("FUNktion", arrayOfFriends)
//   for (let i of arrayOfFriends) {
//     if (i.id == this.props.user.id ) return true;
//   }
// }
const styleObj = {
fontSize: 50,
textAlign: "center",
textDecoration: "underline"
}

    //find out if the person is a the user's friend or not, if a not a friend, display friend request button
return(
    <ResponsiveContainer functions={this.props}>

        <Segment padded="very" vertical textAlign="center">
                    <h3 style={styleObj}>Explore</h3>
                </Segment>
                <Menu fluid widths={4}>
                <Menu.Item
                 name='users'
                 active={activeItem === 'users'}
                 onClick={this.handleItemClick}
                >
                 Users
                </Menu.Item>
                <Menu.Item
                 name='window shop'
                 active={activeItem === 'window shop'}
                 onClick={this.handleItemClick}
                >
                 Window Shop Products
                </Menu.Item>
                <Menu.Item
                 name='stores'
                 active={activeItem === 'stores'}
                 onClick={this.handleItemClick}
                >
                 Stores
                </Menu.Item>
                <Menu.Item
                 name='Photos'
                 active={activeItem === 'photos'}
                 onClick={this.handleItemClick}
                >
                 Photos
                </Menu.Item>
                <Menu.Menu position='centered'>
                </Menu.Menu>
                </Menu>
                <Grid>
                <Grid.Row columns={1}>
                <Grid.Column>


                </Grid.Column>
                </Grid.Row>
                </Grid>
                {activityFeedToDisplay}

</ResponsiveContainer>
)
}
}

class DesktopContainer extends React.Component {

  state = {
      user:{
          friendships:[],
          strain_reviews:[],
          gallery:[]
      }
  }

//   componentDidMount(){
//       let token = localStorage.token
//
//       if (token) {
//       fetch("http://localhost:3000/api/v1/current_user", {
//                 method: "GET",
//                 headers: {
//                     Authorization: `${token}`,
//                   "content-type": "application/json",
//                   accepts: "application/json"
//                 }
//               })
//               .then(res => {
//                   if(!res.ok) {
//                       res.text().then(text => alert(text))
//                   } else {
//                       return res.json().then(userData => {
//                           this.setState({ user: { ...userData.user }, token: userData.jwt, avatar: userData.user.avatar });
//                       })
//                   }
//               })
//           } else {
//               //('wowo')
//           }
// }



 logOutHandler = () => {
     localStorage.removeItem("token")
      this.props.history.push('/Home')
  }


  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  handlePlusClick = () => {this.setState({ visible: true})}

  handleDoublePlusClick = () => { this.setState({ visible: false})}



  render() {
    const { children } = this.props
    const { fixed } = this.state
    const { sidebarOpened } = this.state
    const { visible } = this.state
    const options = [
  { key: 'Products', text: 'Products', value: 'Products' },
  { key: 'Buddy', text: 'Buddy', value: 'Buddy' },
  { key: 'Shop', text: 'Shop', value: 'Shop' },
]
const {user} = this.state



    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>



          <div id="custom-css-product">
              <header className="main-header">
                <div className="container content">
                  <nav>
                    <ul>
                        <li>
                        <p><Icon name='at' size="large" />Your User Name Here</p>
                        </li>
                        <Link to="/dashboard">
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
{user? <Link to="/home">
    <Button >Sign Out</Button>
</Link>
    : null}

                </div>

              </header>
          </div>

        {children}

      </Responsive>
    )
  }
}

// {children} in between Visibility and responsive

DesktopContainer.propTypes = {
  children: PropTypes.node,
}


class MobileContainer extends Component {


    state = {
        user : {},
        Feed: <RecentActivityFeed history={this.props.history} user={this.props}/>

    }

    handlePlusClick = () => {this.setState({ visible: true})}

    handleDoublePlusClick = () => { this.setState({ visible: false})}


    handleItemClick = (e, { name }) => {


          //(e, name)

        if (name === "users"){
            this.setState({
                Feed: <AllUsersFeed user={this.props} history={this.props.history} handleViewUserProfile={this.props.handleViewUserProfile}/>
            })
            //("whoa")

        }else if (name === "window shop") {

            this.setState({
                Feed: <AllProductsFeed user={this.props.user} history={this.props.history} handleViewStrainProfile={this.props.handleViewStrainProfile}/>
            })



        }else if (name === "Photos"){

            this.setState({
                Feed: <FriendsPhotosFeed user={this.props} history={this.props.history} handleViewUserProfile={this.props.handleViewUserProfile}/>
            })


        }else if (name === "stores"){

            let store = {namespace: "Geniune Leather", address: "123 Address St, City, State", id: 2}

            this.setState({
                Feed: <StoreFeed store={store} history={this.props.history} handleViewUserProfile={this.props.handleViewUserProfile}/>
            })
            //("whoa strains")

        }
    }




  render() {

    const { children } = this.props

    const activityFeedToDisplay = this.state.Feed
    const { sidebarOpened } = this.state
    const { visible } = this.state
    const { activeItem } = this.state
    const styleObj = {
    fontSize: 50,
    textAlign: "center",
    textDecoration: "underline"
    }



    return (

      <Responsive
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >

      <Segment padded="very" vertical textAlign="center">
                  <h3 style={styleObj}>Explore</h3>
              </Segment>

      <Menu fluid widths={4}>
      <Menu.Item
       name='users'
       active={activeItem === 'users'}
       onClick={this.handleItemClick}
      >
       Users
      </Menu.Item>
      <Menu.Item
       name='window shop'
       active={activeItem === 'window shop'}
       onClick={this.handleItemClick}
      >
       Window Shop Products
      </Menu.Item>
      <Menu.Item
       name='stores'
       active={activeItem === 'stores'}
       onClick={this.handleItemClick}
      >
       Stores
      </Menu.Item>
      <Menu.Item
       name='Photos'
       active={activeItem === 'photos'}
       onClick={this.handleItemClick}
      >
       Photos
      </Menu.Item>
      <Menu.Menu position='centered'>
      </Menu.Menu>
      </Menu>
      <Grid>
      <Grid.Row columns={1}>
      <Grid.Column>


      </Grid.Column>
      </Grid.Row>
      </Grid>
      {activityFeedToDisplay}
      <br></br>
      <br></br>
          <br></br>
          <br></br>
      <MobileNavBar active="explore" handleAddPostForm={this.props.handleAddPostForm}/>
      </Responsive>

    )
  }
  }
  MobileContainer.propTypes = {
      children: PropTypes.node,

}


const ResponsiveContainer = ({ children, functions }) => (
  <div>

    <DesktopContainer props={functions}>{children}</DesktopContainer>
    <MobileContainer props={functions}>{children}</MobileContainer>

  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}


export default withRouter(ExploreContainer)

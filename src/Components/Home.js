import PropTypes from 'prop-types'
import React, { Component } from 'react'
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
  Input,
  Dropdown
} from 'semantic-ui-react'
import {Route, Link, Switch, withRouter} from 'react-router-dom'
import MobileHeaderBar from "./MobileHeaderBar"
import home from "../assets/img/home.svg";
import notification from "../assets/img/notification.svg";
import "../assets/css/sb-admin-2.css";
import "../assets/css/style.css";
import leatherworkervid from "../assets/vids/leatherworkervid.mp4"
import mybudscell1 from "../assets/img/mybudscell1.png"
import mybudscell2 from "../assets/img/mybudscell2.png"

// <div class="jumbotron jumbotron-fluid">
//
// <video autoplay muted loop>
//     <source src={leatherworkervid} data-src={leatherworkervid} type="video/mp4"/>
//
// </video>
//
//   <div class="container text-white">
//
//     <h1 class="display-4">Hello, world!</h1>
//     <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
//     <hr class="my-4"/>
//     <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
//     <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
//
//   </div>
// </div>



const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (



    <div class="jumbotron jumbotron-fluid">

<video autoPlay muted loop >
    <source src={leatherworkervid} data-src={leatherworkervid} type="video/mp4"/>
    <source src={leatherworkervid} data-src={leatherworkervid} type="video/webm"/>
    <source src={leatherworkervid} data-src={leatherworkervid} type="video/ogg"/>

</video>

  <div class="container text-white">

    <h1 class="display-4">My Buds</h1>
    <p class="lead">community + ingenuity</p>
    <hr class="my-4"/>
    <a class="btn btn-primary btn-lg" href="/dashboard" role="button">Take a Tour</a>
    <p></p>

  </div>

</div>

)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */










class DesktopContainer extends Component {

state = {}



  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {

    const { children } = this.props
    const { fixed } = this.state
    const options = [
  { key: 'Products', text: 'Products', value: 'Products' },
  { key: 'Buddy', text: 'Buddy', value: 'Buddy' },
  { key: 'Shop', text: 'Shop', value: 'Shop' },
]
    const {user} = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
        <div id="custom-css-product">
            <header className="main-header">
              <div className="container content">
                <nav>
                  <ul>
                      <Link to="/dashboard"  >
                <li>
                      <img src={home} alt="Home" /> Home
                    </li>
                </Link>
                    <li>

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
          <Segment
            vertical
            style={{
                paddingTop: 0,
                paddingBottom: 0
            }}
            textAlign="center"
          >
            <HomepageHeading />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
      <Segment textAlign="left" className="fixed-menu" style={{
              marginBottom: 0
          }}>
          <Icon name='bars' onClick={this.handleToggle} />
      </Segment>
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
            <Menu.Item as='a' href="/product">Product Page</Menu.Item>
            <Menu.Item as='a'href="/profile">Profile</Menu.Item>
          <Menu.Item as='a' href="/dashboard">Dashboard</Menu.Item>
          <Menu.Item as='a' href="/explore">Explore</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <HomepageHeading mobile handleToggle={this.handleToggle}/>
          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Home = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '4em 0em', background: '#BDB9BA'}} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
          <br></br>
            <span style={{ fontSize: '1.33em', color: 'black'}}>
             Social media doesn't have to be all bad.
         </span>
            <br></br>
            <br></br>
                <span style={{ fontSize: '1.33em'}}>
                 Pleasing, Easy, and Clever Mobile Design changed the world.
             </span>
             <br></br>
             <br></br>
                <span style={{ fontSize: '1.33em', color: 'white'}}>
                    Customer Relationship Management Software for Small Businesses.
                </span>

          </Grid.Column>
          <Grid.Column floated='right' width={6}>


            <Image src={mybudscell1}/>


          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <h3 inverted as='h4' content='About' />
              <List link inverted>

              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <h3 inverted as='h4' content='Services' />
              <List link inverted>
                 JanCarlos Acevedo
                 @ admin@mybuds.app
              </List>
            </Grid.Column>
            <Grid.Column width={7}>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default withRouter(Home);

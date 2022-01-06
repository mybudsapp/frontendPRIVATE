import React, { Component } from "react";
import {Responsive,Visibility, Label, Grid, Card, Segment, Menu, Image, Icon, Header, Divider, Button, Form, Input, TextArea, Select, Feed, Item, Container} from "semantic-ui-react"
import * as Adapter from '../Adapters/Adapter'
import requests from '../Adapters/Requestobject'
import {Link, withRouter} from 'react-router-dom'
import StoreCard from "./StoreCard"
import StrainCard from "./StrainCard"
import PhotoCard from "./PhotoCard"
import PhotoForm from "./PhotoForm"
import EditProfile from "./EditProfile"
import StrainReviewCard from './StrainReviewCard'
import ProductCard from './ProductCard'
import StrainForm from "./StrainForm"
import ProductForm from "./ProductForm"
import NewStoreForm from "./NewStoreForm"
import UserShopContainer from './UserShopContainer'
import UserProductContainer from './UserProductContainer'
import UserStrainContainer from './UserStrainContainer'
import FeedPostContainer from './FeedPostContainer'
import UserStrainReviewsContainer from './UserStrainReviewsContainer'
import FeedPostCard from './FeedPostCard'
import NewStrainForm from "./StrainForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCannabis,
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
  faFillDrip,
  faTshirt,
  faUtensils,
  faToolbox,
  faPlus,
  faMinus,
  faSync
} from "@fortawesome/free-solid-svg-icons";
import InfiniteScroll from 'react-infinite-scroll-component';

//


const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class UserContentDisplay extends Component{



    state = {products: [],
        newStrainForm: false,
        newProductForm: false,
        productsUpdated: false
    }


componentDidMount = () => {

    let token = localStorage.getItem('token')

  //
  //   fetch(`http://localhost:3000/api/v1/store_products/`, {
  //     method: "GET",
  //     headers: {
  //         Authorization: `${token}`,
  //       "content-type": "application/json",
  //       accepts: "application/json",
  //   }}).then((response) => {
  //       console.log(response)
  //   if (!response.ok) {
  //     return response.json().then((errorData) => {
  //         console.log(errorData)
  //       this.setState({
  //           ...this.state.user,
  //           errors: {...errorData.error},
  //           message: errorData.message,
  //           errorCode: [errorData.errorCode],
  //           hasError: true,
  //       productUpdated: !this.state.productUpdated })
  //   })
  // } else {
  //     return response.json().then((storeRelationships) => {
  //         console.table(storeRelationships)
  //         this.setState({
  //             storeRelationships: storeRelationships
  //         })
  //
  // });
  //
  // }})


}



galleryDisplay = () => {

                let gallery = []


                if(this.props.gallery){
                    gallery = this.props.gallery
                }else{
                    return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
                }
                return gallery.map(photo => {
              return <PhotoCard photo={photo} handleDeletePhoto={this.props.handleDeletePhoto}/> ;
            })
        }











buddiesDisplay = () => {

                let buddies = []



                if(this.props.buddies){
                    buddies = this.props.buddies
                }else{
                    return null
                }
                return buddies.map(buddy => {
              return <Card><h1>{buddy.name}</h1>

                    </Card>;
            })
        }



        storesDisplay = (store) => {

            this.setState({
                store,
                showStoreForm: !this.state.showStoreForm
            })



            }




    strainReviewsDisplay = () => {



            let strainReviews = []

            //("method", this.props.strainreviews)

            if(this.props.strainreviews){
                strainReviews = this.props.strainreviews
            }else{
                return <h1> No Strains Here Bud </h1>
            }
            return strainReviews.map(strainreview => {
          return <StrainReviewCard strainreview={strainreview} user={this.props.user} deleteStrainRequest={this.props.deleteStrainRequest}  raised/>;
        })
        }

        newStrainButtonPressed = () => {

            this.setState({
                newStrainForm: !this.state.newStrainForm
            })


        }

        newProductButtonPressed = () => {

            this.setState({
                newProductForm: !this.state.newProductForm
            })


        }

        productUpdated = () => {

            this.setState({
                productsUpdated: !this.state.productsUpdated
            })

        }

        newStoreFormButtonPressed = () => {

            this.setState({
                showStoreForm: !this.state.showStoreForm
            })
        }

        mobileScreen = (width) => {

            if (width() > 751){
                return true
            }else{
                return false
            }

        }

        refreshFeedButtonClicked = () => {
            console.log("YIPPIE")
        }

        refreshNotificationButtonClicked = () => {
            console.log("MEHNIGGGA")
        }

render(){



    if(this.props.activeItem === 'Shops'){


        const {showStoreForm} = this.state
        const items =[
            <Feed.Event>
            <Feed.Label>
            <img src='https://images.unsplash.com/photo-1535740451417-25dafb0667bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' />
            </Feed.Label>
            <Feed.Content>
            <Feed.Summary>
            <Feed.User>Elliot Fu</Feed.User> added you as a friend
            <Feed.Date>1 Hour Ago</Feed.Date>
            </Feed.Summary>
            <Feed.Meta>
            <Feed.Like>
            <Icon name='like' />4 Likes
            </Feed.Like>
            </Feed.Meta>
            </Feed.Content>
        </Feed.Event>,

            <Feed.Event>
            <Feed.Label image='https://images.unsplash.com/photo-1613437636004-bb0f5786558d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80' />
            <Feed.Content>
            <Feed.Summary>
            <a href="/profile">Helen's Boutique</a> added <a>2 New Products</a>
            <Feed.Date>4 days ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra images>
            <a href="/profile">
            <img src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />
            </a>
            <a href="/profile">
            <img src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80' />
            </a>
            </Feed.Extra>
            <Feed.Meta>
            <Feed.Like>
            <Icon name='like' />1 Like
            </Feed.Like>
            </Feed.Meta>
            </Feed.Content>
        </Feed.Event>

        ]



        return(
            <Segment style={{"padding": "0px"}} vertical>
                {showStoreForm? <NewStoreForm user={this.props.user} storesDisplay={this.storesDisplay} submitStoreHandler={this.props.submitStoreHandler}/> : null}

                <Visibility >

                    <Grid celled='internally' style={{height: '100vh'}}>
            <Grid.Row>
              <Grid.Column width={1}>
                  <Segment.Group horizontal>

                      <Segment vertical>

                      <FontAwesomeIcon
                      icon={faStore}
                      className="fa-2x text-gray-300"/>
                  Stores
      </Segment>
      <Segment
          onClick={this.newStoreFormButtonPressed}
    >

              <FontAwesomeIcon
                  icon={faPlus}
                  className="fa-2x text-gray-300">
              </FontAwesomeIcon>


      </Segment>
      <Segment>

              <FontAwesomeIcon
                  icon={faMinus}
                  className="fa-2x text-gray-300">
              </FontAwesomeIcon>


      </Segment>
          </Segment.Group>


              <Adapter.StoresAdapter
                  stores={this.props.user.stores}
                  fetchStores={requests.fetchStores}
                  user={this.props.user}
                  deleteStoreRequest={this.props.deleteStoreRequest}
                  displayStoreForEdit={this.props.displayStoreForEdit}
                  token={localStorage.token}
                  />


              </Grid.Column>

              <Grid.Column >
                  <Segment.Group horizontal>
                  <Segment vertical>Notifications </Segment>
                  <Segment vertical>
                      <a onClick={this.refreshNotificationButtonClicked}>
                      <FontAwesomeIcon
                      icon={faSync}
                      className="fa-2x text-gray-300">
                  </FontAwesomeIcon>
                  <Label color='red' floating>
22
</Label>
</a>
              </Segment>
          </Segment.Group>
                  <InfiniteScroll
                      dataLength={items.length}
                      loader={<h4>Loading...</h4>}
                      height={800}
                      scrollableTarget="infinite-scroll-component__outerdiv"
                      endMessage={
                  <p style={{ textAlign: 'center' , height: '100%'}}>
                      <b>Yay! You have seen it all</b>
                  </p>
              }

        >

        <Feed>

        {items.map((i, index) => (
                    i
                  ))}

              </Feed>
        </InfiniteScroll>
        </Grid.Column>

            <Grid.Column>


          <div>
              <Grid columns={2}>
                  <br></br>
                  <Grid.Row >
                      <Grid.Column >

                      </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>

                  </Grid.Row>
              </Grid>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
          </div>



         </Grid.Column>

            </Grid.Row>

            <Grid.Row>

            </Grid.Row>
          </Grid>


            </Visibility>


    </Segment>


        )
    } else if(this.props.activeItem === 'Feed'){

        const items = [
        <Feed.Event>
        <Feed.Label>
        <img src='https://images.unsplash.com/photo-1535740451417-25dafb0667bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' />
        </Feed.Label>
        <Feed.Content>
        <Feed.Summary>
        <Feed.User>Elliot Fu</Feed.User> added you as a friend
        <Feed.Date>1 Hour Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
        <Feed.Like>
        <Icon name='like' />4 Likes
        </Feed.Like>
        </Feed.Meta>
        </Feed.Content>
    </Feed.Event>,

        <Feed.Event>
        <Feed.Label image='https://images.unsplash.com/photo-1613437636004-bb0f5786558d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80' />
        <Feed.Content>
        <Feed.Summary>
        <a href="/profile">Helen's Boutique</a> added <a>2 New Products</a>
        <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
        <a href="/profile">
        <img src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />
        </a>
        <a href="/profile">
        <img src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80' />
        </a>
        </Feed.Extra>
        <Feed.Meta>
        <Feed.Like>
        <Icon name='like' />1 Like
        </Feed.Like>
        </Feed.Meta>
        </Feed.Content>
    </Feed.Event>,
        <Feed.Event>
        <Feed.Label image='https://images.unsplash.com/photo-1613437636004-bb0f5786558d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80' />
        <Feed.Content>
        <Feed.Summary>
        <a href="/profile">Helen's Boutique</a> added <a>2 New Products</a>
        <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
        <a href="/profile">
        <img src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />
        </a>
        <a href="/profile">
        <img src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80' />
        </a>
        </Feed.Extra>
        <Feed.Meta>
        <Feed.Like>
        <Icon name='like' />1 Like
        </Feed.Like>
        </Feed.Meta>
        </Feed.Content>
    </Feed.Event>,
        <Feed.Event>
        <Feed.Label image='https://images.unsplash.com/photo-1613437636004-bb0f5786558d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80' />
        <Feed.Content>
        <Feed.Summary>
        <a href="/profile">Helen's Boutique</a> added <a>2 New Products</a>
        <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
        <a href="/profile">
        <img src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />
        </a>
        <a href="/profile">
        <img src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80' />
        </a>
        </Feed.Extra>
        <Feed.Meta>
        <Feed.Like>
        <Icon name='like' />1 Like
        </Feed.Like>
        </Feed.Meta>
        </Feed.Content>
    </Feed.Event>,
        <Feed.Event>
        <Feed.Label image='https://images.unsplash.com/photo-1613437636004-bb0f5786558d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80' />
        <Feed.Content>
        <Feed.Summary>
        <a href="/profile">Helen's Boutique</a> added <a>2 New Products</a>
        <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
        <a href="/profile">
        <img src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />
        </a>
        <a href="/profile">
        <img src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80' />
        </a>
        </Feed.Extra>
        <Feed.Meta>
        <Feed.Like>
        <Icon name='like' />1 Like
        </Feed.Like>
        </Feed.Meta>
        </Feed.Content>
    </Feed.Event>,
        <Feed.Event>
        <Feed.Label image='https://images.unsplash.com/photo-1613437636004-bb0f5786558d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80' />
        <Feed.Content>
        <Feed.Summary>
        <a href="/profile">Helen's Boutique</a> added <a>2 New Products</a>
        <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
        <a href="/profile">
        <img src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />
        </a>
        <a href="/profile">
        <img src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80' />
        </a>
        </Feed.Extra>
        <Feed.Meta>
        <Feed.Like>
        <Icon name='like' />1 Like
        </Feed.Like>
        </Feed.Meta>
        </Feed.Content>
    </Feed.Event>,

        <Feed.Event>
        <Feed.Label image='https://images.unsplash.com/photo-1613437636004-bb0f5786558d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80' />
        <Feed.Content>
        <Feed.Summary>
        <a href="/profile">Helen's Boutique</a> added <a>2 New Products</a>
        <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
        <a href="/profile">
        <img src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />
        </a>
        <a href="/profile">
        <img src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80' />
        </a>
        </Feed.Extra>
        <Feed.Meta>
        <Feed.Like>
        <Icon name='like' />1 Like
        </Feed.Like>
        </Feed.Meta>
        </Feed.Content>
    </Feed.Event>,
        <Feed.Event>
        <Feed.Label image='https://images.unsplash.com/photo-1613437636004-bb0f5786558d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80' />
        <Feed.Content>
        <Feed.Summary>
        <a href="/profile">Helen's Boutique</a> added <a>2 New Products</a>
        <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
        <a href="/profile">
        <img src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />
        </a>
        <a href="/profile">
        <img src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80' />
        </a>
        </Feed.Extra>
        <Feed.Meta>
        <Feed.Like>
        <Icon name='like' />1 Like
        </Feed.Like>
        </Feed.Meta>
        </Feed.Content>
        </Feed.Event>,
            <Feed.Event>
            <Feed.Label image='https://images.unsplash.com/photo-1613437636004-bb0f5786558d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80' />
            <Feed.Content>
            <Feed.Summary>
            <a href="/profile">Helen's Boutique</a> added <a>2 New Products</a>
            <Feed.Date>4 days ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra images>
            <a href="/profile">
            <img src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />
            </a>
            <a href="/profile">
            <img src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80' />
            </a>
            </Feed.Extra>
            <Feed.Meta>
            <Feed.Like>
            <Icon name='like' />1 Like
            </Feed.Like>
            </Feed.Meta>
            </Feed.Content>
            </Feed.Event>
        ]

        const style = {
          height: 30,
          border: "1px solid green",
          margin: 6,
          padding: 8
        };


        // <Container >
        //     <Segment  textAlign="left">
        //         Friend's Feed
        //     </Segment>
        //
        //     <Segment  textAlign="right">
        //         Notifications
        //     </Segment>
        // </Container>

        return(



                  <Segment vertical padded='very' style={{paddingTop: 0}}>

                          {
                               this.mobileScreen(getWidth)?
                              <Visibility >

                                  <Grid celled='internally' style={{height: '100vh'}}>
                          <Grid.Row>
                            <Grid.Column width={1}>
                                <Segment.Group horizontal>
                                <Segment vertical>Feed
                                </Segment>
                                <Segment vertical >
                                    <a onClick={this.refreshFeedButtonClicked}>
                                    <FontAwesomeIcon
                                    icon={faSync}
                                    className="fa-2x text-gray-300">
                                </FontAwesomeIcon>
                                <Label color='red' floating>
        22
      </Label>
  </a>

                            </Segment>
                        </Segment.Group>

                                <InfiniteScroll
                                    dataLength={items.length}
                                    loader={<h4>Loading...</h4>}
                                    height={800}
                                    scrollableTarget="infinite-scroll-component__outerdiv"
                                    endMessage={
                                <p style={{ textAlign: 'center' , height: '100%'}}>
                                    <b>Yay! You have seen it all</b>
                                </p>
                            } >
                            <FeedPostContainer posts={this.props.posts} handleShowComment={this.props.handleShowComment} user={this.props.user}/>

                      </InfiniteScroll>

                            </Grid.Column>





                            <Grid.Column width={1}>
                                <Segment.Group horizontal>
                                <Segment vertical>Notifications

                                </Segment>
                                <Segment vertical>
                                    <a onClick={this.refreshNotificationButtonClicked}>
                                    <FontAwesomeIcon
                                    icon={faSync}
                                    className="fa-2x text-gray-300">
                                </FontAwesomeIcon>
                                <Label color='red' floating>
        22
      </Label>
  </a>
                            </Segment>
                        </Segment.Group>
                                <InfiniteScroll
                                    dataLength={items.length}
                                    loader={<h4>Loading...</h4>}
                                    height={800}
                                    scrollableTarget="infinite-scroll-component__outerdiv"
                                    endMessage={
                                <p style={{ textAlign: 'center' , height: '100%'}}>
                                    <b>Yay! You have seen it all</b>
                                </p>
                            }

                      >

                      <Feed>

                      {items.map((i, index) => (
                                  i
                                ))}

                            </Feed>
                      </InfiniteScroll>
                      </Grid.Column>

                          <Grid.Column>

                    <Feed>

                       </Feed>

                       </Grid.Column>

                          </Grid.Row>

                          <Grid.Row>

                          </Grid.Row>
                        </Grid>


                          </Visibility> : <Visibility >

                          <FeedPostCard
                              handleShowComment={this.props.handleShowComment}/>
                     <Feed.Event>
                       <Feed.Label>
                       </Feed.Label>
                       <Feed.Content>
                         <Feed.Summary>
                           Welcome To My Buds
                         </Feed.Summary>
                         <Feed.Extra text>
                             Through the Mobile View, Business Owners can add Stores, add Items, and stay up to date with their store's following. Focusing on business that do not have a strong internet presence, the ease of using My Buds as an engagement and retention tool allow smaller businesses to have an edge over more "Well Known" businesses on Google and other websites. To See the Desktop Version, Visit the Website through a Desktop.
                         </Feed.Extra>
                         <Feed.Meta>

                         </Feed.Meta>
                       </Feed.Content>
                     </Feed.Event>
                 </Visibility>
                      }





            {console.log(this.props)}
                  </Segment>




      )
}else if(this.props.activeItem === 'Products' && !this.props.productUpdated){



    //<Segment textAlign="center" circular onClick={this.newProductButtonPressed}>
    //<Segment textAlign="center" circular onClick={this.props.editProductsButtonPressed}>

            return(

                <Segment >

                    <Grid>
                        <Grid.Row>
      <Grid.Column >
          <Segment.Group>
              <Segment>
                  Products
              </Segment>
          <Segment.Group horizontal>
              <Segment onClick={this.newProductButtonPressed}>
                 Add
              </Segment>
              <Segment onClick={this.props.editProductsButtonPressed}>
                  Edit
              </Segment>
          </Segment.Group>
      </Segment.Group>
          <Segment.Group>
              <Segment>
                  {this.state.newProductForm? <ProductForm  user={this.props.user} stores={this.props.user.stores} products={this.state.products} submitProductHandler={this.props.submitProductHandler}/> : null}
                  <UserProductContainer
                      displayItemForEdit={this.props.displayItemForEdit}
                      displayItemForDelete={this.props.displayItemForDelete}
                      editProducts={this.props.editProducts}
                      fetchProducts={requests.fetchProducts}
                      storeRelationships={this.state.storeRelationships}
                      products={this.props.user.products}
                      updatedProducts={this.props.updatedProducts}
                      strains={this.props.user.strains}
                      token={localStorage.token}/>
              </Segment>
          </Segment.Group>
      </Grid.Column>
      <Grid.Column >
          <Segment.Group>
              <Segment>
                  Medicated Products
              </Segment>
              <Segment.Group horizontal>
                  <Segment onClick={this.newStrainButtonPressed}>
                     Add
                  </Segment>
                  <Segment onClick={this.props.editProductsButtonPressed}>
                      Edit
                  </Segment>
              </Segment.Group>
          </Segment.Group>
          <Segment.Group>
              <Segment>
                   {this.state.newStrainForm? <StrainForm  user={this.props.user} stores={this.props.user.stores} products={this.state.products} submitProductHandler={this.props.submitProductHandler}/> : null}
                  <UserStrainContainer
                      displayItemForEdit={this.props.displayItemForEdit}
                      displayItemForDelete={this.props.displayItemForDelete}
                      editProducts={this.props.editProducts}
                      fetchProducts={requests.fetchProducts}
                      storeRelationships={this.state.storeRelationships}
                      products={this.props.user.products}
                      updatedProducts={this.props.updatedProducts}
                      strains={this.props.user.strains}
                      token={localStorage.token}/>
              </Segment>
          </Segment.Group>
      </Grid.Column>
</Grid.Row>
                    </Grid>

      </Segment>
    )
}else if(this.props.activeItem === 'Products' && this.props.productUpdated){


            return(
                <Segment >

                    <Grid>
                        <Grid.Row>
      <Grid.Column >
          <Segment.Group>
              <Segment>
                  Products
              </Segment>
          <Segment.Group horizontal>
              <Segment onClick={this.newProductButtonPressed}>
                 Add
              </Segment>
              <Segment onClick={this.props.editProductsButtonPressed}>
                  Edit
              </Segment>
          </Segment.Group>
      </Segment.Group>
          <Segment.Group>
              <Segment>
                  {this.state.newProductForm? <ProductForm  user={this.props.user} stores={this.props.user.stores} products={this.state.products} submitProductHandler={this.props.submitProductHandler}/> : null}
                  <Adapter.ProductsAdapter
                      displayItemForEdit={this.props.displayItemForEdit}
                      displayItemForDelete={this.props.displayItemForDelete}
                      editProducts={this.props.editProducts}
                      fetchProducts={requests.fetchProducts}
                      storeRelationships={this.state.storeRelationships}
                      products={this.props.user.products}
                      updatedProducts={this.props.updatedProducts}
                      strains={this.props.user.strains}
                      token={localStorage.token}/>
              </Segment>
          </Segment.Group>
      </Grid.Column>
      <Grid.Column >
          <Segment.Group>
              <Segment>
                  Medicated Products
              </Segment>
              <Segment.Group horizontal>
                  <Segment onClick={this.newStrainButtonPressed}>
                     Add
                  </Segment>
                  <Segment onClick={this.props.editProductsButtonPressed}>
                      Edit
                  </Segment>
              </Segment.Group>
          </Segment.Group>
          <Segment.Group>
              <Segment>
                   {this.state.newStrainForm? <StrainForm  user={this.props.user} stores={this.props.user.stores} products={this.state.products} submitProductHandler={this.props.submitProductHandler}/> : null}
                  <UserStrainContainer
                      displayItemForEdit={this.props.displayItemForEdit}
                      displayItemForDelete={this.props.displayItemForDelete}
                      editProducts={this.props.editProducts}
                      fetchProducts={requests.fetchProducts}
                      storeRelationships={this.state.storeRelationships}
                      products={this.props.user.products}
                      updatedProducts={this.props.updatedProducts}
                      strains={this.props.user.strains}
                      token={localStorage.token}/>
              </Segment>
          </Segment.Group>
      </Grid.Column>
</Grid.Row>
                    </Grid>

      </Segment>)

}else if(this.props.activeItem === 'Buddies'){

        const user = "/" + this.props.user.username

        return(
            <Card.Group itemsPerRow={3} doubling raised>
                {this.strainReviewsDisplay()}
            </Card.Group>
        )
}else if(this.props.activeItem === 'Settings'){



        return(

                <EditProfile  user={this.props.user} submitEditHandler={this.props.submitEditHandler}/>

)
}else if(this.props.activeItem === 'Reviews'){

    let divStyle = {
  paddingLeft: 10

}

// {this.state.newStrainForm? <NewStrainForm  user={this.props.user} stores={this.props.user.stores} products={this.state.products} submitProductHandler={this.props.submitProductHandler}/> : null}
    return(
        <div>

           <Segment style={{"padding": "0px", "margin-left": "20px"}} vertical >
                   <Grid columns='equal'>
        <Grid.Row >
          <Grid.Column>
              <Segment.Group>

            <Segment >
                <Feed >

         <Feed.Event>
           <Feed.Label image='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
           <Feed.Content>

                 <Feed.Summary>
                     Personality Type
                 </Feed.Summary>
           </Feed.Content>
         </Feed.Event>
         <Feed.Summary>
             You added <a>Jenny Hess</a> to your <a>coworker</a> group.
         </Feed.Summary>

     </Feed>
                    </Segment>
            <Segment raised>
                Strain Reviews
                <UserStrainReviewsContainer
                    displayItemForEdit={this.props.displayItemForEdit}
                    displayItemForDelete={this.props.displayItemForDelete}
                    editStrains={this.props.editStrains}
                    fetchStrains={requests.fetchStrains}
                    storeRelationships={this.state.storeRelationships}
                    strains={this.props.user.strains}
                    updatedStrains={this.props.updatedStrains}
                    token={localStorage.token}/>
            </Segment>
        </Segment.Group>
          </Grid.Column>
          <Grid.Column width={6}>
              <Segment.Group>
              <Segment >
                  <Feed >

           <Feed.Event>
             <Feed.Content>
                 <Image size='mini' circular src='https://i.pinimg.com/originals/4f/22/a1/4f22a1fc23e0b11caf9a833bf9065b6b.jpg' />
                 <Feed.Summary>Products </Feed.Summary>

             </Feed.Content>
           </Feed.Event>
           <Feed.Summary>
               You added <a>Jenny Hess</a> to your <a>coworker</a> group.
           </Feed.Summary>

       </Feed>
                      </Segment>
                      <Segment >
                          Product Reviews
                              </Segment>
                  </Segment.Group>



          </Grid.Column>

        </Grid.Row>

      </Grid>
           </Segment>
           </div>

  )}else if(this.props.activeItem === 'Post'){

      let divStyle = {
    paddingLeft: 10

  }

  // {this.state.newStrainForm? <NewStrainForm  user={this.props.user} stores={this.props.user.stores} products={this.state.products} submitProductHandler={this.props.submitProductHandler}/> : null}
      return(
          <div>
              {console.log(this.props)}
             <Segment style={{"padding": "0px", "margin-left": "20px"}} vertical >
                     <Grid columns='equal'>
          <Grid.Row >
            <Grid.Column>
                <Segment.Group>
                    <PhotoForm/>

              <Segment >

                      </Segment>
          </Segment.Group>
            </Grid.Column>
      </Grid.Row>
        </Grid>
             </Segment>
             </div>

    )}else{
    return null
}


}
}


// if(strains.length > 1){


//some logic here to condionially render whatever the user has, stores, strains, notifications
// pictures, strainreviews







export default withRouter(UserContentDisplay)

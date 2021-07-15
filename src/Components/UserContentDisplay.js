import React, { Component } from "react";
import {Responsive,Visibility, Label, Grid, Card, Segment, Menu, Image, Icon, Header, Divider, Button, Form, Input, TextArea, Select, Feed, Item} from "semantic-ui-react"

import {Link, withRouter} from 'react-router-dom'
import StoreCard from "./StoreCard"
import StrainCard from "./StrainCard"
import PhotoCard from "./PhotoCard"
import EditProfile from "./EditProfile"
import StrainReviewCard from './StrainReviewCard'
import ProductCard from './ProductCard'
import StrainForm from "./StrainForm"
import ProductForm from "./ProductForm"
import NewStoreForm from "./NewStoreForm"
import UserShopContainer from './UserShopContainer'
import UserProductContainer from './UserProductContainer'
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
  faFillDrip,
  faTshirt,
  faUtensils,
  faToolbox
} from "@fortawesome/free-solid-svg-icons";
//


const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class UserContentDisplay extends Component{



    state = {products: [],
        newStrainForm: false,
        newProductForm: false
    }


componentDidMount(){

}

galleryDisplay = () => {

                let gallery = []


                //(this.props)
                if(this.props.gallery){
                    gallery = this.props.gallery
                }else{
                    return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
                }
                return gallery.map(photo => {
              return <PhotoCard photo={photo} handleDeletePhoto={this.props.handleDeletePhoto}/> ;
            })
        }






submitProductHandler = (productObj, filter) => {





    this.setState({
        productObj,
        newProductForm: !this.state.newProductForm
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

render(){



    if(this.props.activeItem === 'Shops'){

        const user = "yourUsername"
        const {showStoreForm} = this.state
        const {store} = this.state




        return(
            <Segment padded='very' vertical>
                <Segment>
                    <h3>This Is Your Store's Dashboard...</h3>
                    <h3>Adding Your Store to My Bud's is pretty simple. Your business must already be listed and registered on Google. Incentivising stores to register on Google encourages businesses to build their online presence and is a requirement to have a store on My Buds.  </h3>

                </Segment>
                <div>
                    <Grid columns={2}>
                    <br></br>
                    <Grid.Row >
                        {store? <Item >
         <Item.Image size='small' src='https://i.pinimg.com/originals/4f/22/a1/4f22a1fc23e0b11caf9a833bf9065b6b.jpg' />
         <h1> {store.store.namespace}</h1>

         <Item.Content>
           <Item.Meta>
             {store.address}
         </Item.Meta>
         <Item.Description>
             {store.store.description}
         </Item.Description>
         </Item.Content>
         <Link>
             <Button basic>Edit</Button>
         </Link>
     <Link>
         <Button basic >Delete</Button>
     </Link>
     <Link>
         <Button basic >Profile</Button>
     </Link>


 </Item>: null}
                      <Grid.Column >
                          <br></br>
                      <Segment
                          onClick={this.newStoreFormButtonPressed}
                          raised
                          circular style={ {width:80, height:80} }
                          textAlign='left'
                          >
                              <i class="large icons" >
                                  <FontAwesomeIcon
                                  icon={faStore}
                                  className="fa-2x text-gray-300">
                              </FontAwesomeIcon>
                                  <i class="top right corner add icon"></i>
                              </i>
                      </Segment>
                  </Grid.Column>
                    </Grid.Row>
                  </Grid>
                   <br></br>
                    <br></br>
                     <br></br>
                    <br></br>
        </div>
        {showStoreForm? <NewStoreForm storesDisplay={this.storesDisplay}/> : null}

    </Segment>


        )
    } else if(this.props.activeItem === 'Feed'){



        return(


                  <Segment padded='very'>
                      <Segment>
                          <h1>This Will Be Your Feed...</h1>


                      </Segment>
                      <Feed>
                          {this.mobileScreen(getWidth)?
                              <Visibility >
                              <Feed.Event>
                                <Feed.Label>

                                </Feed.Label>
                                <Feed.Content>
                                  <Feed.Summary>
                                      <h3>
                                    Welcome To My Buds
                                </h3>
                                  </Feed.Summary>
                                  <Feed.Extra text>
                                      <h3>
                                      Through the Desktop View, Business Owners can add Stores, add Items, and stay up to date with their store's following. Focusing on business that do not have a strong internet presence, the ease of using My Buds as an engagement and retention tool allow smaller businesses to have an edge over more "Well Known" businesses on Google and other websites. To See the Mobile Version, Visit the Website through a Mobile Device or Adjust your browser's settings and refresh.
                                  </h3>
                                  </Feed.Extra>
                                  <Feed.Meta>

                                  </Feed.Meta>
                                </Feed.Content>
                              </Feed.Event>
                          </Visibility> : <Visibility >
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
              </Feed.Event>

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

              <Feed.Event>
                <Feed.Label image='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' />
                <Feed.Content>
                  <Feed.Summary>
                    <a href="/profile">Drigo Marquez</a> added <a>2 new Photos</a>
                    <Feed.Date>4 days ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra images>
                    <a href="/profile">
                      <img src='https://images.unsplash.com/photo-1581954548122-4dff8989c0f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80' />
                    </a>
                    <a href="/profile">
                      <img src='https://images.unsplash.com/photo-1581954548218-415cd6ee5f4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' />
                    </a>
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like' />1 Like
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image='https://images.unsplash.com/photo-1437913135140-944c1ee62782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80' />
                <Feed.Content>
                  <Feed.Summary
                    date='2 Days Ago'
                    user='Jenny Hess'
                    content=' add you as a friend'
                  />
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like' />8 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image='https://images.unsplash.com/photo-1609220136736-443140cffec6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />
                <Feed.Content>
                  <Feed.Summary>
                    <a href="/profile">Joe Henderson</a> reviewed <a href="/storeprofile">Dos Amigo's Watches</a>
                    <Feed.Date>3 days ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like' />5 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image='https://images.unsplash.com/photo-1602256927451-407682b34c4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80' />
                <Feed.Content>
                  <Feed.Summary>
                    <a href="/profile">Justen Kitsune</a> added <a>2 new photos</a> of you
                    <Feed.Date>4 days ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra images>
                    <a href="/profile">
                      <img src='https://images.unsplash.com/photo-1517456793572-1d8efd6dc135?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />
                    </a>
                    <a href="/profile">
                      <img src='https://images.unsplash.com/photo-1619537765491-c2b80c842e10?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80' />
                    </a>
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like' />
                      41 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
            </Feed.Event>
            </Feed>

                  </Segment>




      )
}else if(this.props.activeItem === 'Products'){
        const {products} = this.state


            return(

                <Segment padded='very'>
                <div>
                    <Segment>
                        <h1>This Is Your Products Dashboard...</h1>
                        <span>Introducing new Products to your customers is as easy ever, by adding an item to your store you create a post in the feeds of your buddies</span>

                    </Segment>
                        {this.state.newProductForm? <ProductForm  products={this.state.products} submitProductHandler={this.submitProductHandler}/> : null}

                     <Segment>
                                             <span>Add New Item To the Store</span>
                                             <Label.Group color='olive' circular >
                                             <Grid columns='equal' centered padded>
                                                 <Grid.Row centered columns={4}>
                        <Grid.Column>
                         <Label onClick={this.newProductButtonPressed}><FontAwesomeIcon
                             icon={faTshirt}
                             className="fa-sm text-white-300"
                             ></FontAwesomeIcon><span>Clothes</span></Label>

                        </Grid.Column>

                        <Grid.Column>
                            <Label onClick={this.newProductButtonPressed}> <FontAwesomeIcon
                                icon={faFillDrip}
                                className="fa-sm text-white-300"
                                ></FontAwesomeIcon> <span>Supplies</span></Label>

                        </Grid.Column>
                        <Grid.Column>
                            <Label onClick={this.newProductButtonPressed} >
                            <FontAwesomeIcon
                                icon={faUtensils}
                                className="fa-sm text-white-300"
                                ></FontAwesomeIcon>
                            <span> Food</span> </Label>
                        </Grid.Column>
                        <Grid.Column>
                            <Label onClick={this.newProductButtonPressed}>
                            <FontAwesomeIcon
                                icon={faToolbox}
                                className="fa-sm text-white-300"
                                ></FontAwesomeIcon>
                             <span>Accessories</span></Label>
                        </Grid.Column>




                             </Grid.Row>
                     </Grid>
                     </Label.Group>
                                         </Segment>
                                         <br></br>
                                         <br></br>

                                         <Segment padded textAlign="center" vertical>
                                         <FontAwesomeIcon
                                             icon={faBarcode}
                                             className="fa-4x text-gray-300"></FontAwesomeIcon>
                                         <h1>Items</h1>
                                     </Segment>

                        <Grid columns={2} textAlign="center">



                        <UserProductContainer
                            activeItem={this.props.activeItem}
                            user={this.props.user}
                            clothes={this.props.clothes}
                            products={products}
                            deleteStoreRequest={this.props.deleteStoreRequest}
                            editStoreRequest={this.props.editStoreRequest}
                            showEdit={this.props.showEdit}
                            handleShowEdit={this.props.handleShowEdit}
                            handleShowEditClose={this.props.handleShowEditClose}
                            submitStrainHandler={this.props.submitStrainHandler}
                            deleteStrainRequest={this.props.deleteStrainRequest}
                            submitProductHandler={this.submitProductHandler}
                            deleteProductRequest={this.props.deleteProductRequest}
                            deleteStrainRequest={this.props.deleteStrainRequest}
                            />

                        <br></br>
                        <Grid.Row >
                            <Grid.Column>

                            </Grid.Column>
                          <Grid.Column>
                              <br></br>

                      </Grid.Column>
                        </Grid.Row>
                      </Grid>



                    <br></br>
<br></br>
<br></br>

          </div>
      </Segment>
    )
}else if(this.props.activeItem === 'Buddies'){

        const user = "/" + this.props.user.username

        return(
            <Card.Group itemsPerRow={3} doubling raised>
                {this.strainReviewsDisplay()}
            </Card.Group>
        )
}else if(this.props.activeItem === 'Settings'){



        return(

                <EditProfile  submitHandler={this.props.submitHandler}/>

)
}else if(this.props.activeItem === 'd'){

    return(

           <Segment padded='very'>
               <Feed>
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
       </Feed.Event>

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

       <Feed.Event>
         <Feed.Label image='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' />
         <Feed.Content>
           <Feed.Summary>
             <a href="/profile">Drigo Marquez</a> added <a>2 new Photos</a>
             <Feed.Date>4 days ago</Feed.Date>
           </Feed.Summary>
           <Feed.Extra images>
             <a href="/profile">
               <img src='https://images.unsplash.com/photo-1581954548122-4dff8989c0f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80' />
             </a>
             <a href="/profile">
               <img src='https://images.unsplash.com/photo-1581954548218-415cd6ee5f4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' />
             </a>
           </Feed.Extra>
           <Feed.Meta>
             <Feed.Like>
               <Icon name='like' />1 Like
             </Feed.Like>
           </Feed.Meta>
         </Feed.Content>
       </Feed.Event>

       <Feed.Event>
         <Feed.Label image='https://images.unsplash.com/photo-1437913135140-944c1ee62782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80' />
         <Feed.Content>
           <Feed.Summary
             date='2 Days Ago'
             user='Jenny Hess'
             content=' add you as a friend'
           />
           <Feed.Meta>
             <Feed.Like>
               <Icon name='like' />8 Likes
             </Feed.Like>
           </Feed.Meta>
         </Feed.Content>
       </Feed.Event>

       <Feed.Event>
         <Feed.Label image='https://images.unsplash.com/photo-1609220136736-443140cffec6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />
         <Feed.Content>
           <Feed.Summary>
             <a href="/profile">Joe Henderson</a> reviewed <a href="/storeprofile">Dos Amigo's Watches</a>
             <Feed.Date>3 days ago</Feed.Date>
           </Feed.Summary>
           <Feed.Extra text>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           </Feed.Extra>
           <Feed.Meta>
             <Feed.Like>
               <Icon name='like' />5 Likes
             </Feed.Like>
           </Feed.Meta>
         </Feed.Content>
       </Feed.Event>

       <Feed.Event>
         <Feed.Label image='https://images.unsplash.com/photo-1602256927451-407682b34c4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80' />
         <Feed.Content>
           <Feed.Summary>
             <a href="/profile">Justen Kitsune</a> added <a>2 new photos</a> of you
             <Feed.Date>4 days ago</Feed.Date>
           </Feed.Summary>
           <Feed.Extra images>
             <a href="/profile">
               <img src='https://images.unsplash.com/photo-1517456793572-1d8efd6dc135?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />
             </a>
             <a href="/profile">
               <img src='https://images.unsplash.com/photo-1619537765491-c2b80c842e10?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80' />
             </a>
           </Feed.Extra>
           <Feed.Meta>
             <Feed.Like>
               <Icon name='like' />
               41 Likes
             </Feed.Like>
           </Feed.Meta>
         </Feed.Content>
       </Feed.Event>
     </Feed>

           </Segment>


  )}else{
    return null
}


}
}


// if(strains.length > 1){


//some logic here to condionially render whatever the user has, stores, strains, notifications
// pictures, strainreviews







export default withRouter(UserContentDisplay)

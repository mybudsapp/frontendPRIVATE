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

class StoreProfileItemsDisplay extends Component{



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



storeFollowersDisplay = (followers) => {


    if(followers) {

              return followers.map(follower =>

                  <a href="" class="follower">
              <figure class="follower-image">
              <img src={follower.image} alt={follower.image}/>
              </figure>
             </a>
          )
    }else {

          return <h1> No Followers Yet </h1>
    }


}

storeProductsDisplay = (products) => {


    if(products) {

              return products.map(product =>

                  <a href="" class="product">
              <figure class="product-image">
              <img src={product.image} alt={product.image}/>
              </figure>
              <div class="post-overlay">
              <p>
              <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i>{product.likes}</span>
              <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i></span>
              </p>
              </div>
              </a>
          )
    }else {

          return <h1> No Products Yet </h1>
    }


}

        storePostDisplay = (posts) => {


            if(posts) {

                      return posts.map(post =>

                          <a href="" class="post">
                      <figure class="post-image">
                      <img src={post.image} alt={post.image}/>
                      </figure>
                      <div class="post-overlay">
                      <p>
                      <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i>{post.likes}</span>
                      <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i></span>
                      </p>
                      </div>
                      </a>
                  )
            }else {

                  return <h1> No Posts  Yet</h1>
            }


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


    if(this.props.activeItem === 'Posts'){
        return this.storePostDisplay(this.props.posts)

    } else if(this.props.activeItem === 'Products'){
        return this.storeProductsDisplay(this.props.pproducts)

    }else if(this.props.activeItem === 'Followers'){
        return this.storeFollowersDisplay(this.props.followers)
    }else{
    return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
}


}
}


// if(strains.length > 1){


//some logic here to condionially render whatever the user has, stores, strains, notifications
// pictures, strainreviews







export default withRouter(StoreProfileItemsDisplay)

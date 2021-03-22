import React, { Component } from "react";
import {Grid, Card, Segment, Menu, Image, Icon, Header, Divider, Button, Form, Input, TextArea, Select} from "semantic-ui-react"

import {Link, withRouter} from 'react-router-dom'
import StoreCard from "./StoreCard"
import StrainCard from "./StrainCard"
import PhotoCard from "./PhotoCard"
import EditProfile from "./EditProfile"
import StrainReviewCard from './StrainReviewCard'
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
  faCogs
} from "@fortawesome/free-solid-svg-icons";



class UserContentDisplay extends Component{



    state = {
    }


componentDidMount(){

}

galleryDisplay = () => {

                let gallery = []


                console.log(this.props)
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


// dispensariesDisplay = () => {
//
//         console.log(this.props)
//             let stores = []
//
//             if(this.props.stores){
//                 stores = this.props.stores
//             }else{
//                 return null
//             }
//             return stores.map(dispensary => {
//           return <StoreCard dispensary={dispensary} user={this.props.user} deleteDispensaryRequest={this.props.deleteDispensaryRequest} sendThisDispensaryToEdit={this.props.sendThisDispensaryToEdit} raised/>
//         })

        // <div className="row">
        //   <div className="col-xl-3 col-md-6 mb-4">
        //     <div className="card border-left-primary shadow h-100 py-2">
        //       <div className="card-body">
        //         <div className="row no-gutters align-items-center">
        //           <div className="col mr-2">
        //             <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
        //                 Stores Card this would show the number of stores an owner/ user has
        //             </div>
        //             <div className="h5 mb-0 font-weight-bold text-gray-800">
        //               $40,000
        //             </div>
        //           </div>
        //           <div className="col-auto">
        //             <FontAwesomeIcon
        //               icon={faCalendar}
        //               className="fa-4x text-gray-300"
        //             ></FontAwesomeIcon>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        //
        //   <div className="col-xl-3 col-md-6 mb-4">
        //     <div className="card border-left-success shadow h-100 py-2">
        //       <div className="card-body">
        //         <div className="row no-gutters align-items-center">
        //           <div className="col mr-2">
        //             <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
        //               total followers stores have
        //             </div>
        //             <div className="h5 mb-0 font-weight-bold text-gray-800">
        //               $215,000
        //             </div>
        //           </div>
        //           <div className="col-auto">
        //             <FontAwesomeIcon
        //               icon={faDollarSign}
        //               className="fa-4x text-gray-300"
        //             ></FontAwesomeIcon>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        //
        //   <div className="col-xl-3 col-md-6 mb-4">
        //     <div className="card border-left-info shadow h-100 py-2">
        //       <div className="card-body">
        //         <div className="row no-gutters align-items-center">
        //           <div className="col mr-2">
        //             <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
        //               total store reviews
        //             </div>
        //             <div className="row no-gutters align-items-center">
        //               <div className="col-auto">
        //                 <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
        //                   50%
        //                 </div>
        //               </div>
        //               <div className="col">
        //                 <div className="progress progress-sm mr-2">
        //                   <div
        //                     className="progress-bar bg-info"
        //                     role="progressbar"
        //                     style={{ width: "50%" }}
        //                     aria-valuenow="50"
        //                     aria-valuemin="0"
        //                     aria-valuemax="100"
        //                   ></div>
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //           <div className="col-auto">
        //             <FontAwesomeIcon
        //               icon={faClipboard}
        //               className="fa-4x text-gray-300"
        //             ></FontAwesomeIcon>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>











productsDisplay = () => {

        let products = []

        if(this.props.products){
            products = this.props.products
        }else{
            return <h1> No Strains Here Bud </h1>
        }
        return products.map(strain => {
      return <StrainCard strain={strain} user={this.props.user} deleteStrainRequest={this.props.deleteStrainRequest}  raised/>;
    })
    }



    strainReviewsDisplay = () => {



            let strainReviews = []

            console.log("method", this.props.strainreviews)

            if(this.props.strainreviews){
                strainReviews = this.props.strainreviews
            }else{
                return <h1> No Strains Here Bud </h1>
            }
            return strainReviews.map(strainreview => {
          return <StrainReviewCard strainreview={strainreview} user={this.props.user} deleteStrainRequest={this.props.deleteStrainRequest}  raised/>;
        })
        }





render(){



    if(this.props.activeItem === 'Shops'){

        const user = "/" + this.props.user.username

        return(
                <div>
                    <Grid columns={2}>
                        <FontAwesomeIcon
                        icon={faStore}
                        className="fa-4x text-gray-300"></FontAwesomeIcon>
                                <h1>Stores</h1>

                <UserShopContainer user={this.props.user} stores={this.props.stores} deleteStoreRequest={this.props.deleteStoreRequest} editStoreRequest={this.props.editStoreRequest} showEdit={this.props.showEdit} handleShowEdit={this.props.handleShowEdit} handleShowEditClose={this.props.handleShowEditClose}/>
                    <br></br>
                    <Grid.Row >
                        <Grid.Column>
                          <Segment>Total Followers</Segment>
                          <Segment>Total Reviews</Segment>
                        </Grid.Column>
                      <Grid.Column>
                          <br></br>

                      <Segment

                          raised
                          circular style={ {width:80, height:80} }
                          >
                          <Link to={user + "/newstore"}>

                              <i class="large icons">
                                  <i class="building icon"></i>
                                  <i class="top right corner add icon"></i>
                              </i>

                          </Link>
                      </Segment>
                  </Grid.Column>
                    </Grid.Row>
                  </Grid>
                   <br></br>
                    <br></br>
                     <br></br>
                    <br></br>
        </div>

        )
    } else if(this.props.activeItem === 'Gallery'){
        const user = "/" + this.props.user.username

            return(


                <Card.Group itemsPerRow={3}>

                    {this.galleryDisplay()}
                    <Segment
                        raised
                        circular style={ {width:80, height:80} }
                        >
                        <Link onClick={this.props.handleAddPhoto}>
                            <Menu.Item as='a' >
                            <i class="large icons">
                            <i class="camera icon"></i>
                            <i class="top right corner add icon"></i>


                            </i>
                            </Menu.Item>
                            </Link>
                    </Segment>
                </Card.Group>
    )
}else if(this.props.activeItem === 'Products'){
        const user = "/" + this.props.user.username

            return(
                <UserProductContainer user={this.props.user}/>
    )
}else if(this.props.activeItem === 'StrainReviews'){

        const user = "/" + this.props.user.username

        return(
            <Card.Group itemsPerRow={3} doubling raised>
                {this.strainReviewsDisplay()}
            </Card.Group>
        )
    }else if(this.props.strains){
    return(
        <Card.Group itemsPerRow={3} doubling raised>
            {this.strainsDisplay()}
        </Card.Group>)
}else if(this.props.activeItem === 'Settings'){

    const user = "/" + this.props.user.username

        return(

                <EditProfile/>

)
}else{
    return null
}


}
}


// if(strains.length > 1){


//some logic here to condionially render whatever the user has, stores, strains, notifications
// pictures, strainreviews







export default withRouter(UserContentDisplay)

import React, { Component } from "react";
import {Card, Segment, Menu, Image, Icon, Header, Divider, Button, Form, Input, TextArea, Select} from "semantic-ui-react"

import {Link, withRouter} from 'react-router-dom'
import DispensaryCard from "./DispensaryCard"
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


dispensariesDisplay = () => {


            let dispensaries = []

            if(this.props.dispensaries){
                dispensaries = this.props.dispensaries
            }else{
                return null
            }
            return dispensaries.map(dispensary => {
          return <DispensaryCard dispensary={dispensary} user={this.props.user} deleteDispensaryRequest={this.props.deleteDispensaryRequest} sendThisDispensaryToEdit={this.props.sendThisDispensaryToEdit} raised/>
        })

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







    }



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
    // const products  = this.props.strains.map(strain => <Card><h1>strain.name{console.log("CONTENT DISP{LAY}", strains)}</h1></Card>)

    const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const stateOptions = [
    {key: "AL", text: "Alabama", value: "Alabama"},
{key: "AK", text: "Alaska", value: "Alaska"},
{key: "AS", text: "Alaska", value: "American Samoa"},
{key: "AZ", text: "Arizona", value: "Arizona"},
{key: "AR", text: "Arkansas", value: "Arkansas"},
{key: "CA", text: "California", value: "California"},
{key: "C0", text: "Colorado", value: "Colorado"},
{key: "CT", text: "Connecticut", value: "Connecticut"},
{key: "DE", text: "Delaware", value: "Delaware"},
{key: "DC", text: "District Of Columbia", value: "District Of Columbia"},
{key: "FL", text: "Florida", value: "Florida"},
{key: "GA", text: "Georgia", value: "Georgia"},
{key: "HI", text: "Hawaii", value: "Hawaii"},
{key: "ID", text: "Idaho", value: "Idaho"},
{key: "IL", text: "Illinois", value: "Illinois"},
{key: "IN", text: "Indiana", value: "Indiana"},
{key: "IA", text: "Iowa", value: "Iowa"},
{key: "KS", text: "Kansas", value: "Kansas"},
{key: "KY", text: "Kentucky", value: "Kentucky"},
{key: "LA", text: "Louisiana", value: "Louisiana"},
{key: "ME", text: "Maine", value: "Maine"},
{key: "MD", text: "Maryland", value: "Maryland"},
{key: "MA", text: "Massachusetts", value: "Massachusetts"},
{key: "MI", text: "Michigan", value: "Michigan"},
{key: "MN", text: "Minnesota", value: "Minnesota"},
{key: "MS", text: "Mississippi", value: "Mississippi"},
{key: "MO", text: "Missouri", value: "Missouri"},
{key: "MT", text: "Montana", value: "Montana"},
{key: "NE", text: "Nebraska", value: "Nebraska"},
{key: "NV", text: "Nevada", value: "Nevada"},
{key: "NH", text: "New Hampshire", value: "New Hampshire"},
{key: "NJ", text: "New Jersey", value: "New Jersey"},
{key: "NM", text: "New Mexico", value: "New Mexico"},
{key: "NY", text: "New York", value: "New York"},
{key: "NC", text: "North Carolina", value: "North Carolina"},
{key: "ND", text: "North Dakota", value: "North Dakota"},
{key: "OH", text: "Ohio", value: "Ohio"},
{key: "OK", text: "Oklahoma", value: "Oklahoma"},
{key: "OR", text: "Oregon", value: "Oregon"},
{key: "PA", text: "Pennsylvania", value: "Pennsylvania"},
{key: "PR", text: "Puerto Rico", value: "Puerto Rico"},
{key: "PA", text: "Rhode Island", value: "Rhode Island"},
{key: "SC", text: "South Carolina", value: "South Carolina"},
{key: "SD", text: "South Dakota", value: "South Dakota"},
{key: "TN", text: "Tennessee", value: "Tennessee"},
{key: "TX", text: "Texas", value: "Texas"},
{key: "UT", text: "Utah", value: "Utah"},
{key: "VT", text: "Vermont", value: "Vermont"},
{key: "VI", text: "Virgin Islands", value: "Virgin Islands"},
{key: "VA", text: "Virginia", value: "Virginia"},
{key: "WA", text: "Washington", value: "Washington"},
{key: "WV", text: "West Virginia", value: "West Virginia"},
{key: "WI", text: "Wisconsin", value: "Wisconsin"},
{key: "WY", text: "Wyoming", value: "Wyoming"},
]


    if(this.props.activeItem === 'Shops'){

        const user = "/" + this.props.user.username

        return(
                <UserShopContainer user={this.props.user}/>

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


//some logic here to condionially render whatever the user has, dispensaries, strains, notifications
// pictures, strainreviews







export default withRouter(UserContentDisplay)

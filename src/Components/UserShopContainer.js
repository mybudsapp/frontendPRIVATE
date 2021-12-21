import React, { Component } from "react";
import {Link, withRouter} from 'react-router-dom';
import {Grid, Item, Segment, Menu, Image, Icon, Header, Divider, Button, Form, Input, TextArea, Select} from "semantic-ui-react"
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
import StoreCard from "./StoreCard"




class UserShopContainer extends Component{


    dispensariesDisplay = () => {


                let stores = []

                if(this.props.stores.length){
                    stores = this.props.stores

                    return stores.map(store => {
                        return <StoreCard store={store} user={this.props.user} deleteStoreRequest={this.props.deleteStoreRequest} showEdit={this.props.showEdit} displayStoreForEdit={this.props.displayStoreForEdit} handleShowEditClose={this.props.handleShowEditClose}raised/>
                    })

                }else{

                    return <span>Try Adding a Store</span>

            }

        }

        followedShopsDisplay = () => {


                    let dispensaries = []

                    if(this.props.dispensaries.length > 1){

                        dispensaries = this.props.dispensaries

                        return dispensaries.map(store => {
                            return <StoreCard store={store} user={this.props.user} deleteStoreRequest={this.props.deleteStoreRequest} raised/>
                        })
                    }else{
                        return <span>Try Following New Stores</span>
                    }
            }





    render(){




        return(
            <div>

      {this.dispensariesDisplay()}

</div>



        )
    }

}

export default withRouter(UserShopContainer)

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

                if(this.props.stores){
                    stores = this.props.stores
                }else{
                    return null
                }
                return stores.map(store => {
              return <StoreCard store={store} user={this.props.user} deleteStoreRequest={this.props.deleteStoreRequest} showEdit={this.props.showEdit} handleShowEdit={this.props.handleShowEdit} handleShowEditClose={this.props.handleShowEditClose}raised/>
            })
        }

        followedShopsDisplay = () => {


                    let dispensaries = []

                    if(this.props.dispensaries){
                        dispensaries = this.props.dispensaries
                    }else{
                        return null
                    }
                    return dispensaries.map(store => {
                  return <StoreCard store={store} user={this.props.user} deleteStoreRequest={this.props.deleteStoreRequest} raised/>
                })
            }





    render(){




        return(
            <Segment raised>


      {this.dispensariesDisplay()}

</Segment>



        )
    }

}

export default withRouter(UserShopContainer)

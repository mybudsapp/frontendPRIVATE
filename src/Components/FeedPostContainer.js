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
import FeedPostCard from "./FeedPostCard"




class FeedPostContainer extends Component{


    feedPostDisplay = () => {


                let posts = []

                if(this.props.posts){
                    posts = this.props.posts
                }else{
                    return null
                }
                return posts.map(post => {
              return <FeedPostCard post={post} currentuser={this.props.user} handleShowComment={this.props.handleShowComment} />
            })
        }





    render(){




        return(
            <Segment vertical style={{"marginBottom": "20px"}}>


      {this.props.posts? this.feedPostDisplay: <span>Try Adding Friends or Following Stores</span>}

</Segment>



        )
    }

}

export default withRouter(FeedPostContainer)

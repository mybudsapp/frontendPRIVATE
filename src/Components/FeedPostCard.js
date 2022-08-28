import {Component} from 'react'
import PropTypes from 'prop-types'
import {Card, Segment, Menu, Image, Button} from "semantic-ui-react"
import {Link, withRouter} from 'react-router-dom'
import {
  faTachometerAlt,
  faCalendar,
  faDollarSign,
  faClipboard,
  faStore,
  faBarcode,
  faSearchPlus,
  faGrin,
  faCogs,
  faTshirt,
  faBong,
  faToolbox,
  faCannabis,
  faWrench,
  faFireAlt
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class FeedPostCard extends Component{


    state = { pressedLike: false }


    changeIconColor = () => {
        console.log("SDSDS")
        this.setState({ pressedLike: !this.state.pressedLike })

    }

    commentButtonPressed = (e, props) => {

        props.handleShowComment()
    }

render(){





    return (
        <div class="window">
            {console.log(this.props)}
          <div class="content">
            <div class="post">
              <div class="name">

                <p>{this.props.username}</p>
              </div>

            </div>
            <div class="post-image">
             {this.props.post? <img src={this.props.post.image_url} alt=""/> : null}
            </div>
            <div class="likes" >
              <div class="left-icons" >

              <i onClick={this.changeIconColor}>
            { this.state.pressedLike? <FontAwesomeIcon
                            id="flaming"
                      icon={faFireAlt}
                      className="fa-2x text-red-300"
                      style={ {color: "greenyellow"} }
                      ></FontAwesomeIcon> : <FontAwesomeIcon
                        id="flaming"
                                icon={faFireAlt}
                                className="fa-2x text-black-300"
                                ></FontAwesomeIcon>
                  }
                      </i>
                      <i onClick={(e) => this.commentButtonPressed(e, this.props)}>
                      </i>
              </div>
            </div>


            <div class="post">
            <div class="name">
              <p>{this.props.username}</p>
            </div>

            </div>
          </div>

        </div>
    )
}
}

export default withRouter(FeedPostCard)

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
import { faComment } from '@fortawesome/free-regular-svg-icons'
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

          <div class="content">
            <div class="post">
              <div class="name">

                <p>Danielle Pierce</p>
              </div>

            </div>
            <div class="post-image">
             <img src="https://images.unsplash.com/photo-1636834668100-6cce64251054?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8cVBZc0R6dkpPWWN8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
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
              <FontAwesomeIcon
                      icon={faComment}
                      className="fa-2x text-black-300"
                      ></FontAwesomeIcon>
                      </i>
              </div>
              <p>24 plugs</p>
            </div>


            <div class="post">
            <div class="name">
              <p>Danielle Pierce</p> <span>Back in Cali asdasdasd asd asd asd asd  asdasdasdasd </span>
            </div>

            </div>
          </div>

        </div>
    )
}
}

export default withRouter(FeedPostCard)

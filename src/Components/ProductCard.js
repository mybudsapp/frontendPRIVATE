import React from 'react'
import PropTypes from 'prop-types'
import {Card, Segment, Menu, Image, Button} from "semantic-ui-react"
import {Link, withRouter} from 'react-router-dom'

const ProductCard = props => {
    const editproductpage = "/" + props.product.product_name + "/editstrain/" + props.product.id
    const viewproductpage = "/products/" + props.product.product_name + "/" + props.product.id
//find out props to see if there is a user, if user then edit, if not,
    const user = props.user

    return (
        <Card raised>
            <Card.Content id={props.product.id} name={props.product.product_name} centered>
              <div  id={props.product.id} name={props.product.product_name}>
                      <Image centered fluid id="strainavatar" src="https://cdn.dribbble.com/users/2313464/screenshots/6379726/weed_3000_-_2000_2x.jpg"></Image>
              </div>

              <Card.Header>{props.product.product_name}</Card.Header>
              <Card.Meta>{console.log(props.product)}</Card.Meta>
              <Card.Description>
                {props.product.description}
              </Card.Description>
            </Card.Content>
            <Card.Content centered>
                <div>

              <Link to={viewproductpage}>
                <Button basic color='green'  id={props.product.id}>
                  View Profile
                </Button>
                </Link>
              </div>
            </Card.Content>
            {user? <Card.Content extra fluid>
            <Link to={viewproductpage}>
              <Button basic color='green'  id={props.product.id}>
                Review Product
              </Button>
              </Link>
          </Card.Content> : null}
          </Card>
    )
}

export default withRouter(ProductCard)

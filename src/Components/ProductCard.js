import React from 'react'
import PropTypes from 'prop-types'
import {Card, Segment, Menu, Image, Button, Item} from "semantic-ui-react"
import {Link, withRouter} from 'react-router-dom'

const ProductCard = props => {
    const editproductpage = "/" + props.product.productname + "/editproduct/" + props.product.id
    const viewproductpage = "/products/" + props.product.productname + "/" + props.product.id
//find out props to see if there is a user, if user then edit, if not,
    const user = props.user

    return (

            <Item id={props.product.id} name={props.product.productname} >
                <Item.Image size="small" id="productavatar" src="https://img.icons8.com/bubbles/2x/product.png"></Item.Image>

                <Item.Header>{props.product.productname}</Item.Header>

            <Item.Content >
                  <Item.Meta>{props.product.producttype}</Item.Meta>
                  <Item.Description>
                      By <br></br>
                  {props.product.producer}
                </Item.Description>
            </Item.Content>
              <Link to={viewproductpage}>
                <Button basic color='green'  id={props.product.id}>
                  View Profile
                </Button>
                </Link>

                  <Link>
              <Button basic color='red'  id={props.product.id} onClick={e => props.deleteProductRequest(e)}>
                X
              </Button>
          </Link>


      </Item>
    )
    // <Card.Content id={props.product.id} name={props.product.productname} centered>
    //   <div  id={props.product.id} name={props.product.productname}>
    //           <Image centered fluid id="productavatar" src="https://cdn.dribbble.com/users/2313464/screenshots/6379726/weed_3000_-_2000_2x.jpg"></Image>
    //   </div>
    //
    //   <Card.Header>{props.product.productname}</Card.Header>
    //   <Card.Meta>{console.log(props.product)}</Card.Meta>
    //   <Card.Description>
    //     {props.product.description}
    //   </Card.Description>
    // </Card.Content>
    // <Card.Content centered>
    //     <div>
}

export default withRouter(ProductCard)

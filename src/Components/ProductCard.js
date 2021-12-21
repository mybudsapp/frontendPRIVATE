import React from 'react'
import PropTypes from 'prop-types'
import {Card, Segment, Menu, Image, Button, Item} from "semantic-ui-react"
import {Link, withRouter} from 'react-router-dom'

const ProductCard = props => {

//find out props to see if there is a user, if user then edit, if not,


let displayCorrectImage = (product) => {

if(product.producttype == "Clothes") {

return <Item.Image  floated='right' size="tiny" id="productavatar" src="https://img.icons8.com/plasticine/2x/clothes.png"></Item.Image>

} else if (product.producttype == "Supplies") {

return <Item.Image  floated='right' size="tiny" id="productavatar" src="https://img.icons8.com/cotton/2x/length-1.png"></Item.Image>

} else if (product.producttype == "Foods") {

return <Item.Image size="tiny" id="productavatar" src="https://img.icons8.com/office/2x/pizza.png"></Item.Image>

} else if (product.producttype == "Accessories") {

return <Item.Image size="tiny" id="productavatar" src="https://img.icons8.com/emoji/2x/glasses-emoji.png"></Item.Image>

    } else {
return <Item.Image size="tiny" id="productavatar" src="https://img.icons8.com/bubbles/2x/product.png"></Item.Image>
}

}

const displayCurrentStoreRelationship = (productRelationships) => {

    const productRelationshipsArray = productRelationships



    // const uniqueRelationship = productRelationshipsArray.filter((thing, index, self) =>
//
//   index === self.findIndex((t) => (
//
//     t.id === thing.product_id && t.namespace === thing.namespace
//   ))
// )


const uniq = new Set(productRelationshipsArray.map(e => JSON.stringify(e)));

const res = Array.from(uniq).map(e => JSON.parse(e));

console.log(res, "FEFR")

    if (res.length > 0){

        return res.map(relationship => {
            return <option value={relationship.id} storeid={relationship.store_id}> {relationship.namespace} for ${relationship.retail_price} </option>;
            })
            }else{
                return  <Segment><h1>No Relationship</h1></Segment>
            }


    }




    if(!props.showDelete){
        return <Card id={props.product.id} name={props.product.productname} >
            <Link>
                {displayCorrectImage(props.product)}
            </Link>
            <Link>
            <Card.Content >
                <strong>{props.product.productname}</strong>
                <h2>
                    {props.product.productname}
                </h2>
                <Card.Description>

                </Card.Description>

                <Card.Content>
       <Card.Meta>Ratings</Card.Meta>
       <Card.Meta>Pricing</Card.Meta>
       <Card.Description>
        {props.product.productname}
       </Card.Description>
     </Card.Content>
            </Card.Content>
                <div className='ui two buttons'>
                {props.editProducts? <div className='ui two buttons'><Button basic color='violet' onClick={(e) => props.displayItemForEdit(e)}>Edit</Button><Button basic color='red' onClick={(e) => props.displayItemForDelete(e, props.storeProducts)}>Delete</Button></div> : null}
            </div>
        </Link>
      </Card>


}else{


            return  <Card>
    
        <div className='ui two buttons'>
          <Button basic color='green' onClick={(e) => props.submitDeleteProductHandler(e)}>
            Approve
          </Button>
          <Button basic color='red' onClick={props.closeWindow}>
            Decline
          </Button>
        </div>
    </Card>
    }



}

export default ProductCard

import React, { Component, useState, useEffect } from "react";
import {Link, withRouter} from 'react-router-dom';
import {Grid, Card, Segment, Menu, Image, Icon, Header, Divider, Button, Form, Input, TextArea, Select, Item} from "semantic-ui-react"
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
  faCogs,
  faTshirt,
  faBong,
  faBirthdayCake,
  faUtensils,
  faFillDrip,
  faToolbox,
  faCannabis,
  faWrench
} from "@fortawesome/free-solid-svg-icons";
import StrainForm from "./StrainForm"
import StrainCard from "./StrainCard"
import ProductCard from "./ProductCard"
import NewProductForm from "./ProductForm"




class UserProductContainer extends Component{




    state = {
        newStrainForm: false
    }

    newStrainButtonPressed = () => {

        this.setState({
            newStrainForm: !this.state.newStrainForm
        })


    }


componentDidMount = () => {
    console.log(this.props, "product container is receiving from adapter or user content?")
}

    strainsDisplay = (strains) => {

        return strains.map(strain => <StrainCard strain={strain} />)

        }


        clothesProductsDisplay = (products, editProducts, displayItemForEdit, displayItemForDelete) => {


            let newProducts = []

             newProducts = products


                console.log(products, newProducts)
            if (newProducts.length > 0){

                return products.filter(product => product.producttype === "Clothes").map(filteredProduct =>
                    <ProductCard
                        displayItemForDelete={displayItemForDelete}
                        product={filteredProduct}
                        editProducts={editProducts}
                        displayItemForEdit={displayItemForEdit}/>)

            }else{
                return  <Segment><h1>No Clothes</h1></Segment>
            }

     //return products.filter(product => product.producttype === "Clothes").map(filteredProduct => <ProductCard product={filteredProduct} editProducts={editProducts} displayItemForEdit={displayItemForEdit}/>)


            }




            concentratesDisplay = (products, editProducts, displayItemForEdit, displayItemForDelete) => {


                    const concentrateProducts = products.filter(product => product.producttype === "Concentrates")

                    console.log(concentrateProducts.length)

                    if (concentrateProducts.length > 0){
                        return concentrateProducts.map(filteredProduct =>
                            <ProductCard
                                displayItemForDelete={displayItemForDelete}
                                product={filteredProduct}
                                editProducts={editProducts}
                                displayItemForEdit={displayItemForEdit}/>)

                    }else{
                        return  <Segment><h1>No Concentrates</h1></Segment>
                    }




}

                foodItemsDisplay = (products, editProducts, displayItemForEdit, displayItemForDelete) => {

                    const edibleProducts = products.filter(product => product.producttype === "Edibles")

                    console.log(edibleProducts.length)

                    if (edibleProducts.length > 0){
                        return edibleProducts.map(filteredProduct =>
                            <ProductCard
                                displayItemForDelete={displayItemForDelete}
                                product={filteredProduct}
                                editProducts={editProducts}
                                displayItemForEdit={displayItemForEdit}/>)

                    }else{
                        return  <Segment><h1>No Edibles</h1></Segment>
                    }
                }


                    accessoriesProductsDisplay = (products, editProducts, displayItemForEdit, displayItemForDelete) => {

                        const accessoriesProducts = products.filter(product => product.producttype === "Accessories")

                        console.log(accessoriesProducts.length)

                        if (accessoriesProducts.length > 0){
                            return accessoriesProducts.map(filteredProduct =>
                                <ProductCard
                                    displayItemForDelete={displayItemForDelete}
                                    product={filteredProduct}
                                    editProducts={editProducts}
                                    displayItemForEdit={displayItemForEdit}/>)

                        }else{
                            return  <Segment><h1>No Accessories</h1></Segment>
                        }
                    }



    render(){

        const {products} = this.props

        if (products) {
            return(
                <div>
                    <div>
                        <br></br>
                        <Segment raised >
                            <Segment textAlign="center" vertical>
                                {this.props.editProducts? <div>
                                <FontAwesomeIcon
                                        icon={faWrench}
                                        className="fa-2x text-gray-300"
                                        ></FontAwesomeIcon>

                                    <h1>    Edit Clothes </h1>
                                    </div>
                                    : <div>

                                <FontAwesomeIcon
                                        icon={faTshirt}
                                        className="fa-2x text-gray-300"
                                        ></FontAwesomeIcon>

                                    <h1>
                                        Clothes
                                    </h1></div>}
                            </Segment>
                            <br></br>
                            <Card.Group itemsPerRow={4} divided>
                                <br></br>
                                {this.props.products.length > 0 ? this.clothesProductsDisplay(this.props.products, this.props.editProducts, this.props.displayItemForEdit, this.props.displayItemForDelete): <span>No Items</span>}

                            </Card.Group>

                            <Grid>




                            </Grid>
                            <br></br>
                            <br></br>
                        </Segment>
                        <br></br>
                        <br></br>
                        <Segment textAlign="center" >
                        <Segment vertical >
                            {this.props.editProducts? <div>
                            <FontAwesomeIcon
                                    icon={faWrench}
                                    className="fa-2x text-gray-300"
                                    ></FontAwesomeIcon>

                                <h1>    Edit Concentrates </h1>
                                </div>
                                : <div>

                            <FontAwesomeIcon
                                    icon={faFillDrip}
                                    className="fa-2x text-gray-300"
                                    ></FontAwesomeIcon>

                                <h1>
                                    Concentrates
                                </h1></div>}
                            </Segment>
                            <br></br>
                            <Card.Group itemsPerRow={4} divided>
                                <br></br>
                                {this.props.products.length > 0 ? this.concentratesDisplay(this.props.products, this.props.editProducts, this.props.displayItemForEdit, this.props.displayItemForDelete) : <span>No Items</span>}

                            </Card.Group>

                            <Grid>




                            </Grid>
                            <br></br>
                            <br></br>

                        </Segment>
                        <br></br>
                        <br></br>
                        <Segment>
                        <Segment vertical>
                            {this.props.editProducts? <div>
                            <FontAwesomeIcon
                                    icon={faWrench}
                                    className="fa-2x text-gray-300"
                                    ></FontAwesomeIcon>

                                <h1>    Edit Edibles </h1>
                                </div>
                                : <div>

                            <FontAwesomeIcon
                                    icon={faUtensils}
                                    className="fa-2x text-gray-300"
                                    ></FontAwesomeIcon>

                                <h1>
                                    Edibles
                                </h1></div>}
                            </Segment>
                            <br></br>
                            <Card.Group itemsPerRow={4} divided>
                                <br></br>
                                {this.props.products.length > 0 ? this.foodItemsDisplay(this.props.products, this.props.editProducts, this.props.displayItemForEdit, this.props.displayItemForDelete) : <span>No Items</span>}

                            </Card.Group>

                            <Grid>




                            </Grid>
                            <br></br>
                            <br></br>
                        </Segment>
                        <br></br>
                        <br></br>

                        <Segment raised >
                            <Segment textAlign="center" vertical>
                            {this.props.editProducts? <div>
                            <FontAwesomeIcon
                                    icon={faWrench}
                                    className="fa-2x text-gray-300"
                                    ></FontAwesomeIcon>

                                <h1>    Edit Accessories </h1>
                                </div>
                                : <div>

                            <FontAwesomeIcon
                                    icon={faTshirt}
                                    className="fa-2x text-gray-300"
                                    ></FontAwesomeIcon>

                                <h1>
                                    Accessories
                                </h1></div>}
                            </Segment>
                            <br></br>
                            <Card.Group itemsPerRow={4} divided>
                                <br></br>
                                {this.props.products.length > 0 ? this.accessoriesProductsDisplay(this.props.products, this.props.editProducts, this.props.displayItemForEdit, this.props.displayItemForDelete) : <span>No Items</span>}

                            </Card.Group>

                            <Grid>




                            </Grid>
                            <br></br>
                            <br></br>
                        </Segment>
                        <br></br>
                    </div>
                </div>)
        } else {
            return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />


}
    }

}

export default withRouter(UserProductContainer)















// <br></br>
// <Segment raised>
//     <Segment textAlign="center" vertical>
//         <FontAwesomeIcon
//             icon={faCannabis}
//             className="fa-2x text-gray-300"
//             ></FontAwesomeIcon>
//         <h1>
//             Strains
//         </h1>
//     </Segment>
//     <br></br>
//     <Card.Group itemsPerRow={4} divided>
//         <br></br>
//         {this.props.products.length > 0 ? this.strainsDisplay(this.props.strains) : <span>No Items</span>}
//     </Card.Group>
//     <Grid>
//     </Grid>
//     <br></br>
//     <br></br>
// </Segment>
//
// <br></br>
//
// <Segment raised >
//     <Segment textAlign="center" vertical>
//         <FontAwesomeIcon
//             icon={faFillDrip}
//             className="fa-2x text-gray-300"
//             ></FontAwesomeIcon>
//         <h1>
//             Concentrates
//         </h1>
//     </Segment>
//     <br></br>
//     <Card.Group itemsPerRow={4} divided>
//         <br></br>
//         {this.props.products.length > 0 ? this.concentratesDisplay(this.props.products) : <span>No Items</span>}
//     </Card.Group>
//
//
//
//     <Grid>
//
//
//
//     </Grid>
//     <br></br>
// </Segment>
//
// <br></br>
// <br></br>
//
// <Segment raised>
//     <Segment textAlign="center" vertical>
//         <FontAwesomeIcon
//             icon={faUtensils}
//             className="fa-2x text-gray-300"
//             ></FontAwesomeIcon>
//         <h1>
//             Edibles
//
//         </h1>
//     </Segment>
//     <br></br>
//     <Card.Group itemsPerRow={4} divided>
//         <br></br>
//         {this.props.products.length > 0 ? this.foodItemsDisplay(this.props.products) : <span>No Items</span>}
//     </Card.Group>
//
//
//
//     <Grid>
//
//
//
//     </Grid>
//     <br></br>
// </Segment>
//
// <br></br>
// <br></br>
//
// <Segment raised >
//     <Segment textAlign="center" vertical>
//         <FontAwesomeIcon
//             icon={faToolbox}
//             className="fa-2x text-gray-300"
//
//             ></FontAwesomeIcon>
//
//         <h1>
//             Accessories
//         </h1>
//     </Segment>
//     <br></br>
//     <Card.Group itemsPerRow={4} divided>
//         {this.props.products.length > 0 ? this.accessoriesProductsDisplay(this.props.products) : <span>No Items</span>}
//     </Card.Group>
//
//
//
//     <Grid>
//
//
//
//     </Grid>
//     <br></br>
// </Segment>
//
//
//
//
// </div>
// </div>

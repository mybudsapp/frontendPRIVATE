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
import NewStrainForm from "./StrainForm"
import StrainCard from "./StrainCard"





class UserStrainReviewsContainer extends Component{




    state = {
        newStrainForm: false
    }

    newStrainButtonPressed = () => {

        this.setState({
            newStrainForm: !this.state.newStrainForm
        })


    }


componentDidMount = () => {
    console.log(this.props, "strain container is receiving from adapter or user content?")
}

    strainsDisplay = (strains) => {

        return strains.map(strain => <StrainCard strain={strain} />)

        }


        strainsArrayDisplay = (strains, editstrains, displayItemForEdit, displayItemForDelete, storeRelationships) => {


            let newstrains = []

             newstrains = strains.filter(strain => strain.straintype === "Clothes")

             let relationships = []

             relationships = storeRelationships



             if (newstrains.length > 0){

                 return newstrains.map(filteredstrain =>
                     <StrainCard
                         displayItemForDelete={displayItemForDelete}
                         strain={filteredstrain}
                         editstrains={editstrains}
                         displayItemForEdit={displayItemForEdit}/>)

                     }else{
                         return  <Segment><h1>No Clothes</h1></Segment>
                     }


            }

            //const storeRelationshipsBelongTostrain = newstrains.filter(strain => relationships.includes(strain))



            //
            // let result = newstrains.filter(function (strain) {
                //     return !relationships.some(function (relationship) {
                    //         console.log(relationship)
                    //         return relationship; // return the ones with equal id
                    //     });
                    // });

                    //let onlyInRelationships = relationships.filter(relationship => !newstrains.includes(relationship));


                    // function strainRelationships()
                    //
                    // return relationships.filter(relationship => relationship.strain_id == strain.id)

                    //const r = relationships.filter((relationship) => newstrains.find(strain => relationship.strain_id === strain.id))

                    //const s = relationships.filter((relationship) => newstrains.find(strain => relationship.store_id == strain.store_id && relationship.strain_id == strain.id, console.log(relationship, strain)))

                    //              n.forEach((num1, index) => {
                        //   const num2 = m[index];
                        //   console.log(num1, num2);
                        // });


                        // let diff = function(relationship,strain) {
                            //     let ret = [];
                            //     relationships.sort();
                            //     strains.sort();
                            //     for(let i = 0; i < relationships.length; i += 1) {
                                //         if(relationship.store_id == strain.store_id && relationship.strain_id == strain.id){
                                    //             ret.push(relationship);
                                    //         }
                                    //     }
                                    //     return ret;
                                    // };




                                    //strains.indexOf(relationships[i]) > -1,




                                    //
                                    // function comparer(otherArray){
                                        //     return function(current){
                                            //         return otherArray.filter(function(other){
                                                //             return other.strain_id == current.id && other.store_id == current.store_id
                                                //         }).length == 0;
                                                //     }
                                                // }

                                                //let onlyInstrains = newstrains.filter(strains => comparer(strains, relationships));


                                                //let relationships = newstrains.store_strains.filter(relationship => relationship.includes(storestrains))

                                                // relationships.forEach((relationship, index) => {
                                                    //     const strain = newstrains[index];
                                                    //     const relationshipToStore = console.log(relationship.strain_id, strain.id)
                                                    // })


                                                    //const matchingCondition = ({ strain, relationship }) => strain.id === relationship.strain_id;

                                                    // filter all items from B that satisfy a matching condition with at least one item from A
                                                    // const matches = newstrains.filter(
                                                        //   strain => relationships.some(
                                                            //     relationship => matchingCondition({  strain, relationship  }, console.log(strain.id === relationship.strain_id))
                                                            //   )
                                                            // );
                                                            //
                                                            // console.log(matches)


                                                            //return strains.filter(strain => strain.straintype === "Clothes").map(filteredstrain => <strainCard strain={filteredstrain} editstrains={editstrains} displayItemForEdit={displayItemForEdit}/>)

                    //
                    // accessoriesStrainsDisplay = (strains, editstrains, displayItemForEdit, displayItemForDelete) => {
                    //
                    //     const accessoriesStrains = strains.filter(strain => strain.straintype === "Accessories")
                    //
                    //     console.log(accessoriesstrains.length)
                    //
                    //     if (accessoriesstrains.length > 0){
                    //         return accessoriesstrains.map(filteredstrain =>
                    //             <StrainCard
                    //                 displayItemForDelete={displayItemForDelete}
                    //                 strain={filteredstrain}
                    //                 editstrains={editstrains}
                    //                 displayItemForEdit={displayItemForEdit}/>)
                    //
                    //     }else{
                    //         return  <Segment><h1>No Accessories</h1></Segment>
                    //     }
                    // }



    render(){

        const {strains} = this.props

        if (strains) {
            return(
                <div>
                    <div>
                        <br></br>
                        <Segment  >
                            <Segment textAlign="center" vertical>
                                {this.props.editstrains? <div>
                                <FontAwesomeIcon
                                        icon={faWrench}
                                        className="fa-2x text-gray-300"
                                        ></FontAwesomeIcon>

                                    <h1>    Edit Clothes </h1>
                                    </div>
                                    : <div>

                                <FontAwesomeIcon
                                        icon={faCannabis}
                                        className="fa-2x text-gray-300"
                                        ></FontAwesomeIcon>

                                    <h1>
                                        Flower Strains Reviews
                                    </h1></div>}
                            </Segment>
                            <br></br>
                            <Card.Group itemsPerRow={4} divided>
                                <br></br>
                                 <span>No Items</span>

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
                            {this.props.editstrains? <div>
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
                             <span>No Items</span>

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
                            {this.props.editstrains? <div>
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
                                {this.props.strains.length > 0 ? this.foodItemsDisplay(this.props.strains, this.props.editstrains, this.props.displayItemForEdit, this.props.displayItemForDelete, this.props.storestrains) : <span>No Items</span>}

                            </Card.Group>

                            <Grid>




                            </Grid>
                            <br></br>
                            <br></br>
                        </Segment>
                        <br></br>
                        <br></br>

                        <Segment  >
                            <Segment textAlign="center" vertical>
                            {this.props.editstrains? <div>
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
                                {this.props.strains.length > 0 ? this.accessoriesstrainsDisplay(this.props.strains, this.props.editstrains, this.props.displayItemForEdit, this.props.displayItemForDelete, this.props.storestrains) : <span>No Items</span>}

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

export default withRouter(UserStrainReviewsContainer)















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
//         {this.props.strains.length > 0 ? this.strainsDisplay(this.props.strains) : <span>No Items</span>}
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
//         {this.props.strains.length > 0 ? this.concentratesDisplay(this.props.strains) : <span>No Items</span>}
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
//         {this.props.strains.length > 0 ? this.foodItemsDisplay(this.props.strains) : <span>No Items</span>}
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
//         {this.props.strains.length > 0 ? this.accessoriesstrainsDisplay(this.props.strains) : <span>No Items</span>}
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

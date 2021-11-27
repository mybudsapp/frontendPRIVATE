import React from 'react'
import {
  Icon,
  Image,
  Responsive,
  Segment,
  Visibility,
  Feed,
  Card,
  Grid,
  Dropdown,
  Menu,
  Button,
  Item,
  Divider,
  Input
} from 'semantic-ui-react'
import UserCard from './UserCard'
import ProductCard from './ProductCard'
import Buds from '../mybuds-v2.png'
import "../assets/css/style.css";

import Filter from './Search'

class AllUsersFeed extends React.Component {

    state = {
        users:[],
        advancedFilter: false,
            searchByName: '',
            ageGroup: '',
            personality_type: ''
    }

    componentDidMount = () => {

            this.setState({
                users: [
                  {id:1, username: "@Sample ", location: "USA", avatar: "https://images.pexels.com/photos/6204323/pexels-photo-6204323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
                  {id:1, username: "@another ", location: "USA", avatar: "https://images.pexels.com/photos/6204323/pexels-photo-6204323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
                  {id:1, username: "@123nnkj", location: "USA", avatar: "https://images.pexels.com/photos/6204323/pexels-photo-6204323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
                  {id:1, username: "@example ", location: "USA", avatar: "https://images.pexels.com/photos/6204323/pexels-photo-6204323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
                  {id:1, username: "@lorem ", location: "USA", avatar: "https://images.pexels.com/photos/6204323/pexels-photo-6204323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
                  {id:1, username: "@epsum ", location: "USA", avatar: "https://images.pexels.com/photos/6204323/pexels-photo-6204323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
                  {id:1, username: "@dolor ", location: "USA", avatar: "https://images.pexels.com/photos/6204323/pexels-photo-6204323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
                  {id:1, username: "@sit ", location: "USA", avatar: "https://images.pexels.com/photos/6204323/pexels-photo-6204323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
                  {id:1, username: "@amet ", location: "USA", avatar: "https://images.pexels.com/photos/6204323/pexels-photo-6204323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
                  {id:1, username: "@consectetur ", location: "USA", avatar: "https://images.pexels.com/photos/6204323/pexels-photo-6204323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
              ]
          });

    }


    handleClick = (e) => {
        //this should send person to profile of the user they pressed on
        //("in the handle click", e.target.name)

        this.props.history.push("/username/" + e.target.name)
    }

    handleSearch = e => {
    this.setState({
      searchByName: e.target.value
    });
  };

  handleLocationSubmit = locationInfo => {
      let location = {...locationInfo}

      this.setState({
        location: location
      })
  }

  handleAdvancedFilter = () => {
      this.setState({
          advancedFilter: !this.state.advancedFilter
      })
  }

  displayFiltersSelected = () => {
      //should count how many keys have a true value within the state




  }

  //needs to exclude the user that is doing the searching

  searchedByNameUsers = () => {
      let users = [];
      if (this.state.searchByName === "") {
          users = this.state.users;
      } else {
          users = this.state.users.filter(user =>
              user.username.toLowerCase().includes(this.state.searchByName.toLowerCase())
          );
      }
      return users.map(user => {
          return  <Feed.Event>
      <Feed.Label style={ {margin: "auto"}}>
        <Image src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"></Image>
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          {user.username}
        </Feed.Summary>
        <Feed.Extra text>anodnaiosdiaosd bio bio</Feed.Extra>
            <a>
            <div className="explorerequest" textAlign="right" vertical>
                Friend Request
            </div>
        </a>
      </Feed.Content>
    </Feed.Event>;
          });
      };



    render(){

        const stateOptions = [
        {key: "AL", value: "Alabama, AL", text: "Alabama, AL"},
        {key: "AK", value: "Alaska", text: "Alaska, AK"},
        {key: "AS", value: "Alaska", text: "American Samoa, AS"},
        {key: "AZ", value: "Arizona", text: "Arizona, AZ"},
        {key: "AR", value: "Arkansas", text: "Arkansas, AR"},
        {key: "CA", value: "California", text: "California, CA"},
        {key: "C0", value: "Colorado", text: "Colorado, CO"},
        {key: "CT", value: "Connecticut", text: "Connecticut, CT"},
        {key: "DE", value: "Delaware", text: "Delaware, DE"},
        {key: "DC", value: "District Of Columbia", text: "District Of Columbia, DC"},
        {key: "FL", value: "Florida", text: "Florida, FL"},
        {key: "GA", value: "Georgia", text: "Georgia, GA"},
        {key: "HI", value: "Hawaii", text: "Hawaii, HI"},
        {key: "ID", value: "Idaho", text: "Idaho, ID"},
        {key: "IL", value: "Illinois", text: "Illinois, IL"},
        {key: "IN", value: "Indiana", text: "Indiana, IN"},
        {key: "IA", value: "Iowa", text: "Iowa, IA"},
        {key: "KS", value: "Kansas", text: "Kansas, KS"},
        {key: "KY", value: "Kentucky", text: "Kentucky, KY"},
        {key: "LA", value: "Louisiana", text: "Louisiana, LA"},
        {key: "ME", value: "Maine", text: "Maine, ME"},
        {key: "MD", value: "Maryland", text: "Maryland, MD"},
        {key: "MA", value: "Massachusetts", text: "Massachusetts, MA"},
        {key: "MI", value: "Michigan", text: "Michigan, MI"},
        {key: "MN", value: "Minnesota", text: "Minnesota, MN"},
        {key: "MS", value: "Mississippi", text: "Mississippi, MS"},
        {key: "MO", value: "Missouri", text: "Missouri, MO"},
        {key: "MT", value: "Montana", text: "Montana, MT"},
        {key: "NE", value: "Nebraska", text: "Nebraska, NE"},
        {key: "NV", value: "Nevada", text: "Nevada, NV"},
        {key: "NH", value: "New Hampshire", text: "New Hampshire, NH"},
        {key: "NJ", value: "New Jersey", text: "New Jersey, NJ"},
        {key: "NM", value: "New Mexico", text: "New Mexico, NM"},
        {key: "NY", value: "New York", text: "New York, NY"},
        {key: "NC", value: "North Carolina", text: "North Carolina, NC"},
        {key: "ND", value: "North Dakota", text: "North Dakota, ND"},
        {key: "OH", value: "Ohio", text: "Ohio, OH"},
        {key: "OK", value: "Oklahoma", text: "Oklahoma, OK"},
        {key: "OR", value: "Oregon", text: "Oregon, OR"},
        {key: "PA", value: "Pennsylvania", text: "Pennsylvania, PA"},
        {key: "PR", value: "Puerto Rico", text: "Puerto Rico, PR"},
        {key: "RI", value: "Rhode Island", text: "Rhode Island, RI"},
        {key: "SC", value: "South Carolina", text: "South Carolina, SC"},
        {key: "SD", value: "South Dakota", text: "South Dakota, SD"},
        {key: "TN", value: "Tennessee", text: "Tennessee, TN"},
        {key: "TX", value: "Texas", text: "Texas, TX"},
        {key: "UT", value: "Utah", text: "Utah, UT"},
        {key: "VT", value: "Vermont", text: "Vermont, VT"},
        {key: "VI", value: "Virgin Islands", text: "Virgin Islands, VI"},
        {key: "VA", value: "Virginia", text: "Virginia, VA"},
        {key: "WA", value: "Washington", text: "Washington, WA"},
        {key: "WV", value: "West Virginia", text: "West Virginia, WV"},
        {key: "WI", value: "Wisconsin", text: "Wisconsin, WI"},
        {key: "WY", value: "Wyoming", text: "Wyoming, WY"},
        ]


        const buddyOptions = [
            {key: "Sativa", value: "Sativa", text: "Sativa"},
            {key: "Indica", value: "Indica", text: "Indica"}
        ]


        // const filteredUsers = this.state.users.filter(rapper => rapper.name.includes(this.state.searchByName))
        //
        // const Cards = filteredRappers.map(rapper => {
        //     return <RapCard key={rapper.name} name={rapper.name}
        //     sadImg={rapper.sadImage}
        //     happyImg={rapper.happyImage}/>
        //     })




        return(

            <Segment vertical style={{"padding": "0"}}>
                <Segment.Group style={{"margin": "0"}}>
                <Segment padded textAlign="center">
                    <Dropdown
                        placeholder='Select Buddy Type'
                        fluid
                        search
                        selection
                        options={buddyOptions}
                        />

                </Segment>
                <Segment padded textAlign="center">
                    <Dropdown
                        placeholder='Select State'
                        fluid
                        search
                        selection
                        options={stateOptions}
                        />

                </Segment>
                <Segment padded textAlign="center">
              <Input fluid icon='search' placeholder="Search By Name" onChange={this.handleSearch} />

    </Segment>
</Segment.Group>
    <Segment style={{"padding": "3px"}}>
        <Feed>
                {this.searchedByNameUsers()}
            </Feed>
        </Segment>
        </Segment>
        )
    }
}








class AllProductsFeed extends React.Component {


        state = {
            products:[],
            advancedFilter: false,
                searchByName: '',
                ageGroup: '',
                personality_type: '',
                searchByType: ''
        }

        componentDidMount = () => {


                this.setState({
                    products: [
                        {id: 1, productname: "shirt", producttype: "Clothes"},
                        {id: 1, productname: "bong", producttype: "Supplies"},
                        {id: 1, productname: "pound cake", producttype: "Edibles"},
                        {id: 1, productname: "heavy shorts", producttype: "Clothes"},
                        {id: 1, productname: "black hat", producttype: "Clothes"},
                        {id: 1, productname: "greay stareaberr", producttype: "Edibles"},
                        {id: 1, productname: "holder", producttype: "Accessories"},
                        {id: 1, productname: "crackers", producttype: "Edibles"},
                        {id: 1, productname: "trayt", producttype: "Accessories"},
                        {id: 1, productname: "pizza", producttype: "Edibles"},
                        {id: 1, productname: "taco", producttype: "Edibles"},
                        {id: 1, productname: "stapler", producttype: "Supplies"}
                    ]
              });

        }


        handleClick = (e) => {
            //this should send person to profile of the user they pressed on
            //("in the handle click", e.target.name)

            this.props.history.push("/product/" + e.target.name)
        }

        handleSearch = e => {
        this.setState({
          searchByName: e.target.value
        });
      };

      handleType = submitInfo => {


          this.setState({
              searchByType: submitInfo.target.innerText
          })

      }

      handleAdvancedFilter = () => {
          this.setState({
              advancedFilter: !this.state.advancedFilter
          })
      }

      displayFiltersSelected = () => {
          //should count how many keys have a true value within the state

          let products = this.state.products

          let searchByName = this.state.searchByName

          let searchedByNameproducts = (products) => {

              if (this.state.searchByName === "") {
                  products = this.state.products
              } else {
                  products = this.state.products.filter(product =>
                      product.productname.toLowerCase().includes(this.state.searchByName.toLowerCase())
                  );
              }

              return products.map(product => {
                  return <ProductCard user={this.props.user}product={product} handleViewproductProfile={this.props.handleViewproductProfile} id={product.id}/>
                  });
              };



          if (this.state.searchByType.includes("Clothes")) {

            products = this.state.products.filter(product => product.producttype.includes(this.state.searchByType) && product.productname.toLowerCase().includes(this.state.searchByName.toLowerCase()))


         } else if (this.state.searchByType.includes("Concentrates") ) {

              products = this.state.products.filter(product => product.producttype.includes(this.state.searchByType) && product.productname.toLowerCase().includes(this.state.searchByName.toLowerCase()))


          } else if (this.state.searchByType.includes("Edibles")) {

                  products = this.state.products.filter(product => product.producttype.includes(this.state.searchByType) && product.productname.toLowerCase().includes(this.state.searchByName.toLowerCase()) )


              } else if (this.state.searchByType.includes("Accessories")) {

                     products = this.state.products.filter(product => product.producttype.includes(this.state.searchByType) && product.productname.toLowerCase().includes(this.state.searchByName.toLowerCase()))

                  } else {

                      return searchedByNameproducts(products);
          }


          return products.map(product => <ProductCard user={this.props.user} product={product} handleViewproductProfile={this.props.handleViewproductProfile} id={product.id}/>);
      }

      //needs to exclude the user that is doing the searching






          // searchedByAdvanced = () => {
          //     let products = [];
          //
          //     if (this.state.searchByName === "") {
          //         products = this.state.products
          //     } else {
          //         products = this.state.products.filter(product =>
          //             product.product_name.toLowerCase().includes(this.state.searchByName.toLowerCase())
          //         );
          //     }
          //     return products.map(product => {
          //         return <productCard product={product} id={product.id} handleClick={this.handleClick} handleViewproductProfile={this.props.handleViewproductProfile}/>;
          //         });
          //     };




        render(){


            // const filteredUsers = this.state.products.filter(rapper => rapper.name.includes(this.state.searchByName))
            //
            // const Cards = filteredRappers.map(rapper => {
            //     return <RapCard key={rapper.name} name={rapper.name}
            //     sadImg={rapper.sadImage}
            //     happyImg={rapper.happyImage}/>
            //     })
            const {products} = this.state
            const styleObj = {paddingLeft: 4}
            const {mobile} = this.props

            const productCategories = [
                {key: "Strains", value: "Strains", text: "Strains"},
                {key: "Clothes", value: "Clothes", text: "Clothes"},
                {key: "Edibles", value: "Edibles", text: "Edibles"},
                {key: "Accessories", value: "Accessories", text: "Accessories"},
                {key: "Concentrates", value: "Concentrates", text: "Concentrates"}
            ]


            return(
                <Segment vertical style={{"paddingTop": "0"}}>


                    <Segment.Group>
                    <Segment padded textAlign="center">
                  <Input fluid icon='search' placeholder="Search By Name" onChange={this.handleSearch} />
        </Segment>
        <Segment padded textAlign="center">
            <Dropdown
                placeholder='Select Category'
                fluid
                search
                selection
                onChange={e => this.handleType(e)}
                options={productCategories}
                />

        </Segment>
                    <Segment style={styleObj}>
                        { mobile? <Card.Group itemsPerRow={2}>
            {this.displayFiltersSelected()}
        </Card.Group>: <Card.Group itemsPerRow={4}>
{this.displayFiltersSelected()}
</Card.Group> }
            </Segment>

        </Segment.Group>

    </Segment>
            )
        }
    }



export const BasicFriendsFeed = (props) => {
    if(props.user.friends > 1){
    return(
  <Card.Content>
     <Card.Header>Friends Activity</Card.Header>
      <Feed>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='Right Now' />
            <Feed.Summary>
              <a>Jenny Hess</a> Added to your <a>John Malone</a>
            </Feed.Summary>
          </Feed.Content>

        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              <a>Jenny Hess</a> Added a <a>Photo</a>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
              You added <a>Elliot Baker</a> to your <a>musicians</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
)
}else{
    return(
        <Card.Content>
           <Card.Header>You Have No Friends Yet :(</Card.Header>
           </Card.Content>
    )
}


}

export const BudsPhotosFeed = (props) => {
    if(props.user.friends > 1){
    return(
  <Card.Content>

      <Feed>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='Right Now' />
            <Feed.Summary>
              <a>Jenny Hess</a> Added to your <a>John Malone</a>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              <a>Jenny Hess</a> Added a <a>Photo</a>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
              You added <a>Elliot Baker</a> to your <a>musicians</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
)
}else{
    return(
        <div>
        <section class="post-list">

          <a href="" class="post">
            <figure class="post-image">
              <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
            </figure>
            <div class="post-overlay">
              <p>
                <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
              </p>
            </div>
          </a>
          <a href="" class="post">
            <figure class="post-image">
              <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
            </figure>
            <div class="post-overlay">
              <p>
                <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
              </p>
            </div>
          </a>
          <a href="" class="post">
            <figure class="post-image">
              <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
            </figure>
            <div class="post-overlay">
              <p>
                <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
              </p>
            </div>
          </a>
          <a href="" class="post">
            <figure class="post-image">
              <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
            </figure>
            <div class="post-overlay">
              <p>
                <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
              </p>
            </div>
          </a>
          <a href="" class="post">
            <figure class="post-image">
              <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
            </figure>
            <div class="post-overlay">
              <p>
                <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
              </p>
            </div>
          </a>
          <a href="" class="post">
            <figure class="post-image">
              <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
            </figure>
            <div class="post-overlay">
              <p>
               <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
               <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
             </p>
            </div>
          </a>
          <a href="" class="post">
            <figure class="post-image">
              <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
            </figure>
            <div class="post-overlay">
              <p>
                <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
              </p>
            </div>
          </a>
          <a href="" class="post">
            <figure class="post-image">
              <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
            </figure>
            <div class="post-overlay">
              <p>
                <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
              </p>
            </div>
          </a>
          <a href="" class="post">
            <figure class="post-image">
              <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
            </figure>
            <div class="post-overlay">
              <p>
                <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
              </p>
            </div>
          </a>
          <a href="" class="post">
              <figure class="post-image">
                <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
              </figure>

            <div class="post-overlay">
              <p>
                <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
              </p>
            </div>
          </a>
          <a href="" class="post">
            <figure class="post-image">
              <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
            </figure>
            <div class="post-overlay">
              <p>
                <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
              </p>
            </div>
          </a>
          <a href="" class="post">
            <figure class="post-image">
              <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
            </figure>
            <div class="post-overlay">
              <p>
                <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
              </p>
            </div>
          </a>
          <a href="" class="post">
            <figure class="post-image">
              <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
            </figure>
            <div class="post-overlay">
              <p>
                <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
              </p>
            </div>
          </a>
          <a href="" class="post">
            <figure class="post-image">
              <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
            </figure>
            <div class="post-overlay">
              <p>
                <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
              </p>
            </div>
          </a>
          <a href="" class="post">
            <figure class="post-image">
              <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
            </figure>
            <div class="post-overlay">
              <p>
                <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
              </p>
            </div>
          </a>
          <a href="" class="post">
            <figure class="post-image">
              <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
            </figure>
            <div class="post-overlay">
                <figure class="post-image">
                  <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                </figure>
              <p>
                <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
              </p>
            </div>
          </a>
          <a href="" class="post">
            <figure class="post-image">
              <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
            </figure>
            <div class="post-overlay">
              <p>
                <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
              </p>
            </div>
          </a>
          <a href="" class="post">
            <figure class="post-image">
              <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
            </figure>
            <div class="post-overlay">
              <p>
                <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
              </p>
            </div>
          </a>
        </section>
    </div>
    )
}


}

export const StoreFeed = (props) => {

    let stateOptions = [
    {key: "AL", value: "Alabama, AL", text: "Alabama, AL"},
    {key: "AK", value: "Alaska", text: "Alaska, AK"},
    {key: "AS", value: "Alaska", text: "American Samoa, AS"},
    {key: "AZ", value: "Arizona", text: "Arizona, AZ"},
    {key: "AR", value: "Arkansas", text: "Arkansas, AR"},
    {key: "CA", value: "California", text: "California, CA"},
    {key: "C0", value: "Colorado", text: "Colorado, CO"},
    {key: "CT", value: "Connecticut", text: "Connecticut, CT"},
    {key: "DE", value: "Delaware", text: "Delaware, DE"},
    {key: "DC", value: "District Of Columbia", text: "District Of Columbia, DC"},
    {key: "FL", value: "Florida", text: "Florida, FL"},
    {key: "GA", value: "Georgia", text: "Georgia, GA"},
    {key: "HI", value: "Hawaii", text: "Hawaii, HI"},
    {key: "ID", value: "Idaho", text: "Idaho, ID"},
    {key: "IL", value: "Illinois", text: "Illinois, IL"},
    {key: "IN", value: "Indiana", text: "Indiana, IN"},
    {key: "IA", value: "Iowa", text: "Iowa, IA"},
    {key: "KS", value: "Kansas", text: "Kansas, KS"},
    {key: "KY", value: "Kentucky", text: "Kentucky, KY"},
    {key: "LA", value: "Louisiana", text: "Louisiana, LA"},
    {key: "ME", value: "Maine", text: "Maine, ME"},
    {key: "MD", value: "Maryland", text: "Maryland, MD"},
    {key: "MA", value: "Massachusetts", text: "Massachusetts, MA"},
    {key: "MI", value: "Michigan", text: "Michigan, MI"},
    {key: "MN", value: "Minnesota", text: "Minnesota, MN"},
    {key: "MS", value: "Mississippi", text: "Mississippi, MS"},
    {key: "MO", value: "Missouri", text: "Missouri, MO"},
    {key: "MT", value: "Montana", text: "Montana, MT"},
    {key: "NE", value: "Nebraska", text: "Nebraska, NE"},
    {key: "NV", value: "Nevada", text: "Nevada, NV"},
    {key: "NH", value: "New Hampshire", text: "New Hampshire, NH"},
    {key: "NJ", value: "New Jersey", text: "New Jersey, NJ"},
    {key: "NM", value: "New Mexico", text: "New Mexico, NM"},
    {key: "NY", value: "New York", text: "New York, NY"},
    {key: "NC", value: "North Carolina", text: "North Carolina, NC"},
    {key: "ND", value: "North Dakota", text: "North Dakota, ND"},
    {key: "OH", value: "Ohio", text: "Ohio, OH"},
    {key: "OK", value: "Oklahoma", text: "Oklahoma, OK"},
    {key: "OR", value: "Oregon", text: "Oregon, OR"},
    {key: "PA", value: "Pennsylvania", text: "Pennsylvania, PA"},
    {key: "PR", value: "Puerto Rico", text: "Puerto Rico, PR"},
    {key: "RI", value: "Rhode Island", text: "Rhode Island, RI"},
    {key: "SC", value: "South Carolina", text: "South Carolina, SC"},
    {key: "SD", value: "South Dakota", text: "South Dakota, SD"},
    {key: "TN", value: "Tennessee", text: "Tennessee, TN"},
    {key: "TX", value: "Texas", text: "Texas, TX"},
    {key: "UT", value: "Utah", text: "Utah, UT"},
    {key: "VT", value: "Vermont", text: "Vermont, VT"},
    {key: "VI", value: "Virgin Islands", text: "Virgin Islands, VI"},
    {key: "VA", value: "Virginia", text: "Virginia, VA"},
    {key: "WA", value: "Washington", text: "Washington, WA"},
    {key: "WV", value: "West Virginia", text: "West Virginia, WV"},
    {key: "WI", value: "Wisconsin", text: "Wisconsin, WI"},
    {key: "WY", value: "Wyoming", text: "Wyoming, WY"},
    ]




    return(
        <Card.Content>

            <Menu fluid stackable>
                <Menu.Item>
          <Input icon='search' placeholder='Search City...' />
        </Menu.Item>
        <Menu.Item>
        <Dropdown
            placeholder="State"
            name="state"
            fluid
            selection
            options={stateOptions}
            />
    </Menu.Item>
            </Menu>
            <Segment>
<Grid columns={2} relaxed='very'>
  <Grid.Column  >

      <Image size='big' src='https://i.pinimg.com/originals/4f/22/a1/4f22a1fc23e0b11caf9a833bf9065b6b.jpg' />

  </Grid.Column>
  <Grid.Column textAlign="center" >
      <Item.Meta>
          <span>{props.store.namespace}</span>
      </Item.Meta>
      <Item.Content>
          <Item.Meta>
              {props.store.address}
          </Item.Meta>
          <Item.Description>
              0 followers <Icon name="male"></Icon>
      </Item.Description>
  </Item.Content>
  <a>
      <Button basic onClick={(e) => props.handleShowEdit(props.store.id, props.store.namespace)}>View Profile</Button>
  </a>
  <a>
      <Button basic onClick={(e) => props.deleteStoreRequest(e)}>Follow</Button>
  </a>


  </Grid.Column>
</Grid>
<Divider vertical>+</Divider>
</Segment>

<Segment>
<Grid columns={2} relaxed='very'>
<Grid.Column>

<Image size='big' src='https://i.pinimg.com/originals/4f/22/a1/4f22a1fc23e0b11caf9a833bf9065b6b.jpg' />

</Grid.Column>
<Grid.Column textAlign="center" >
<Item.Meta>
<span>{props.store.namespace}</span>
</Item.Meta>
<Item.Content>
<Item.Meta>
  {props.store.address}
</Item.Meta>
<Item.Description>
  0 followers <Icon name="male"></Icon>
</Item.Description>
</Item.Content>
<a>
<Button basic onClick={(e) => props.handleShowEdit(props.store.id, props.store.namespace)}>View Profile</Button>
</a>
<a>
<Button basic onClick={(e) => props.deleteStoreRequest(e)}>Follow</Button>
</a>


</Grid.Column>
</Grid>
<Divider vertical>+</Divider>
</Segment>

<Segment>
<Grid columns={2} relaxed='very'>
<Grid.Column>

<Image size='big' src='https://i.pinimg.com/originals/4f/22/a1/4f22a1fc23e0b11caf9a833bf9065b6b.jpg' />

</Grid.Column>
<Grid.Column textAlign="center" >
<Item.Meta>
<span>{props.store.namespace}</span>
</Item.Meta>
<Item.Content>
<Item.Meta>
  {props.store.address}
</Item.Meta>
<Item.Description>
  0 followers <Icon name="male"></Icon>
</Item.Description>
</Item.Content>
<a>
<Button basic onClick={(e) => props.handleShowEdit(props.store.id, props.store.namespace)}>View Profile</Button>
</a>
<a>
<Button basic onClick={(e) => props.deleteStoreRequest(e)}>Follow</Button>
</a>


</Grid.Column>
</Grid>
<Divider vertical>+</Divider>
</Segment>





        </Card.Content>
    )
}



export const RecentActivityFeed = (props) => {



    if(props.user.friends > 1){
    return(
  <Card.Content>
     <Card.Header>Friends Activity</Card.Header>
      <Feed>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='Right Now' />
            <Feed.Summary>
              <a>Jenny Hess</a> Added to your <a>John Malone</a>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              <a>Jenny Hess</a> Added a <a>Photo</a>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
              You added <a>Elliot Baker</a> to your <a>musicians</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
)
}else{
    return(
        <Card.Content>
           <div class="wrapper">

               <section class="post-list">
                 <a href="" class="post">
                   <figure class="post-image">
                     <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                   </figure>
                   <div class="post-overlay">
                     <p>
                       <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                       <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                     </p>
                   </div>
                 </a>
                 <a href="" class="post">
                   <figure class="post-image">
                     <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                   </figure>
                   <div class="post-overlay">
                     <p>
                       <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                       <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                     </p>
                   </div>
                 </a>
                 <a href="" class="post">
                   <figure class="post-image">
                     <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                   </figure>
                   <div class="post-overlay">
                     <p>
                       <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                       <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                     </p>
                   </div>
                 </a>
                 <a href="" class="post">
                   <figure class="post-image">
                     <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                   </figure>
                   <div class="post-overlay">
                     <p>
                       <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                       <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                     </p>
                   </div>
                 </a>
                 <a href="" class="post">
                   <figure class="post-image">
                     <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                   </figure>
                   <div class="post-overlay">
                     <p>
                       <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                       <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                     </p>
                   </div>
                 </a>
                 <a href="" class="post">
                   <figure class="post-image">
                     <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                   </figure>
                   <div class="post-overlay">
                     <p>
                      <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                      <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                    </p>
                   </div>
                 </a>
                 <a href="" class="post">
                   <figure class="post-image">
                     <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                   </figure>
                   <div class="post-overlay">
                     <p>
                       <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                       <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                     </p>
                   </div>
                 </a>
                 <a href="" class="post">
                   <figure class="post-image">
                     <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                   </figure>
                   <div class="post-overlay">
                     <p>
                       <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                       <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                     </p>
                   </div>
                 </a>
                 <a href="" class="post">
                   <figure class="post-image">
                     <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                   </figure>
                   <div class="post-overlay">
                     <p>
                       <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                       <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                     </p>
                   </div>
                 </a>
                 <a href="" class="post">
                     <figure class="post-image">
                       <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                     </figure>

                   <div class="post-overlay">
                     <p>
                       <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                       <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                     </p>
                   </div>
                 </a>
                 <a href="" class="post">
                   <figure class="post-image">
                     <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                   </figure>
                   <div class="post-overlay">
                     <p>
                       <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                       <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                     </p>
                   </div>
                 </a>
                 <a href="" class="post">
                   <figure class="post-image">
                     <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                   </figure>
                   <div class="post-overlay">
                     <p>
                       <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                       <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                     </p>
                   </div>
                 </a>
                 <a href="" class="post">
                   <figure class="post-image">
                     <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                   </figure>
                   <div class="post-overlay">
                     <p>
                       <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                       <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                     </p>
                   </div>
                 </a>
                 <a href="" class="post">
                   <figure class="post-image">
                     <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                   </figure>
                   <div class="post-overlay">
                     <p>
                       <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                       <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                     </p>
                   </div>
                 </a>
                 <a href="" class="post">
                   <figure class="post-image">
                     <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                   </figure>
                   <div class="post-overlay">
                     <p>
                       <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                       <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                     </p>
                   </div>
                 </a>
                 <a href="" class="post">
                   <figure class="post-image">
                     <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                   </figure>
                   <div class="post-overlay">
                       <figure class="post-image">
                         <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                       </figure>
                     <p>
                       <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                       <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                     </p>
                   </div>
                 </a>
                 <a href="" class="post">
                   <figure class="post-image">
                     <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                   </figure>
                   <div class="post-overlay">
                     <p>
                       <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                       <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                     </p>
                   </div>
                 </a>
                 <a href="" class="post">
                   <figure class="post-image">
                     <img src="https://images.unsplash.com/photo-1624456735729-03594a40c5fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                   </figure>
                   <div class="post-overlay">
                     <p>
                       <span class="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 150</span>
                       <span class="post-comments"><i class="fa fa-comment" aria-hidden="true"></i> 10</span>
                     </p>
                   </div>
                 </a>
               </section>

</div>

           </Card.Content>
    )
}



}

export {AllUsersFeed, AllProductsFeed}

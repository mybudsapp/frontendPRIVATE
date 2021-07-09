import React from 'react'
import {Card,Form, Dropdown, Menu, Label, Button} from 'semantic-ui-react'


class Filter extends React.Component {
    state = {
    }



    handleLocation = e => {
//needs to copy the state for what it is then add the state to have one in city and state
//in the state



        this.setState({
        [e.target.id]: e.target.value
        })




    }

    clickTypeSubmit = (e) => {

        this.props.handleTypeSubmit(e.target.innerText)

    }


render(){
  return (
      <Menu fluid>
          <Dropdown item text='Types of Products' position='left'    >
            <Dropdown.Menu onClick={e => this.clickTypeSubmit(e)} >
              <Dropdown.Item>Clothes</Dropdown.Item>
              <Dropdown.Item>Foods</Dropdown.Item>
              <Dropdown.Item>Accessories</Dropdown.Item>
               <Dropdown.Item>Supplies</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </Menu>
  )
}

}

export default Filter

import React, {Component} from 'react'
import { Line, Bar, Radar} from "react-chartjs-2";
import Chart from 'chart.js/auto'
import PropTypes from 'prop-types'
import {Card, Segment, Menu, Image, Button, Popup, Item, Feed, Grid, Icon } from "semantic-ui-react"
import {Link, withRouter} from 'react-router-dom'



class FeedDisplayer extends React.Component{



    render(){
        const linedata = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Last Year",
          data: [33, 53, 85, 41, 44, 65],
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)"
        },
        {
          label: "This Year",
          data: [33, 25, 35, 51, 54, 76],
          fill: false,
          borderColor: "#742774"
        }
      ]
    };

    const bardata = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [{
    label: 'Sales',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};



const radardata = {
  labels: [
    'Apparel',
    'Jewelery',
    'FootWear',
    'Designing',
    'Electronics',
    'Home Decor',
    'Furniture'
  ],
  datasets: [{
    label: 'Last Year',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'This Year',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};



    if (this.props.businessFeed) {
        return <div>
         <Segment>
        Interactions
        </Segment>
        <Segment>
        <Line data={linedata}/>
        </Segment >
        <Segment>
        Sales
        </Segment>
        <Segment>
        <Bar data={bardata}/>

        </Segment>

        <Segment>
        Most Bought Category
        </Segment>
        <Segment>
        <Radar data={radardata} />
        </Segment>


        <Segment>
        Recent Customer/Follower Interactions
        </Segment>

        <Feed>
        <Feed.Event>
        <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
        <Feed.Content>
        <Feed.Date content='Right Now' />
        <Feed.Summary>
        <a>Jenny Hess</a> Reviewed your Product.
        </Feed.Summary>
        </Feed.Content>
        </Feed.Event>

        <Feed.Event>
        <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
        <Feed.Content>
        <Feed.Date content='3 days ago' />
        <Feed.Summary>
        <a>Jenny Hess</a> Added a <a>Photo</a> with your Product.
        </Feed.Summary>
        </Feed.Content>
        </Feed.Event>
        <Feed.Event>
        <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
        <Feed.Content>
        <Feed.Date content='3 days ago' />
        <Feed.Summary>
         <a>Molly Malone</a> as a followed a New Shop.
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
        <Feed.Event>
        <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
        <Feed.Content>
        <Feed.Date content='Right Now' />
        <Feed.Summary>
        <a>Jenny Hess</a> Reviewed your Product.
        </Feed.Summary>
        </Feed.Content>
        </Feed.Event>

        <Feed.Event>
        <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
        <Feed.Content>
        <Feed.Date content='3 days ago' />
        <Feed.Summary>
        <a>Jenny Hess</a> Added a <a>Photo</a> with your Product.
        </Feed.Summary>
        </Feed.Content>
        </Feed.Event>
        <Feed.Event>
        <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
        <Feed.Content>
        <Feed.Date content='3 days ago' />
        <Feed.Summary>
         <a>Molly Malone</a> as a followed a New Shop.
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
        <Feed.Event>
        <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
        <Feed.Content>
        <Feed.Date content='Right Now' />
        <Feed.Summary>
        <a>Jenny Hess</a> Reviewed your Product.
        </Feed.Summary>
        </Feed.Content>
        </Feed.Event>

        <Feed.Event>
        <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
        <Feed.Content>
        <Feed.Date content='3 days ago' />
        <Feed.Summary>
        <a>Jenny Hess</a> Added a <a>Photo</a> with your Product.
        </Feed.Summary>
        </Feed.Content>
        </Feed.Event>
        <Feed.Event>
        <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
        <Feed.Content>
        <Feed.Date content='3 days ago' />
        <Feed.Summary>
         <a>Molly Malone</a> as a followed a New Shop.
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
        <Feed.Event>
        <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
        <Feed.Content>
        <Feed.Date content='Right Now' />
        <Feed.Summary>
        <a>Jenny Hess</a> Reviewed your Product.
        </Feed.Summary>
        </Feed.Content>
        </Feed.Event>

        <Feed.Event>
        <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
        <Feed.Content>
        <Feed.Date content='3 days ago' />
        <Feed.Summary>
        <a>Jenny Hess</a> Added a <a>Photo</a> with your Product.
        </Feed.Summary>
        </Feed.Content>
        </Feed.Event>
        <Feed.Event>
        <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
        <Feed.Content>
        <Feed.Date content='3 days ago' />
        <Feed.Summary>
         <a>Molly Malone</a> as a followed a New Shop.
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
        </div>



    } else {
         return<Segment>

         <Segment.Group>
         <Segment>
         <Image src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
         </Segment>
         <Segment vertical>
         <span style={{paddingLeft: '30px'}}>caption caption caption caption caption</span>
         <Segment vertical textAlign="center">
         <Icon name='heart'/>
         22 likes
         </Segment>
         </Segment>
         </Segment.Group>

         <Segment.Group>
         <Segment>
         <Image src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
         </Segment>
         <Segment vertical>
         <span style={{paddingLeft: '30px'}}>caption caption caption caption caption</span>
         <Segment vertical textAlign="center">
         <Icon name='heart'/>
         22 likes
         </Segment>
         </Segment>
         </Segment.Group>
         <Segment.Group>
         <Segment>
         <Image src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
         </Segment>
         <Segment vertical>
         <span style={{paddingLeft: '30px'}}>caption caption caption caption caption</span>
         <Segment vertical textAlign="center">
         <Icon name='heart'/>
         22 likes
         </Segment>
         </Segment>
         </Segment.Group>
         <Segment.Group>
         <Segment>
         <Image src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
         </Segment>
         <Segment vertical>
         <span style={{paddingLeft: '30px'}}>caption caption caption caption caption</span>
         <Segment vertical textAlign="center">
         <Icon name='heart'/>
         22 likes
         </Segment>
         </Segment>
         </Segment.Group>
         <Segment.Group>
         <Segment>
         <Image src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
         </Segment>
         <Segment vertical>
         <span style={{paddingLeft: '30px'}}>caption caption caption caption caption</span>
         <Segment vertical textAlign="center">
         <Icon name='heart'/>
         22 likes
         </Segment>
         </Segment>
         </Segment.Group>


        </Segment>

}







    }




}

export default withRouter(FeedDisplayer)

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Table,
  Card,
  Comment,
  Form
} from "semantic-ui-react";
import React, { Component } from "react";
import { Route, Link, Switch, withRouter } from "react-router-dom";

class CommentDisplay extends Component {
  state = {};

  componentDidUpdate() {
    // var comments = []
    //
    // comments = this.props.comments
    //
    // let commentsToDisplay = []
    //
    // let theNewComment = {}
    //
    //
    //         if(comments) { for(let i = 0; i < comments.length; i++){
    //
    //
    //                 theNewComment = {...comments[i]}
    //
    //                 commentsToDisplay.push(theNewComment)
    //
    //      }
    //
    //
    //      function addingUserData(comment, userData){
    //
    //          comment["username"] = userData.user.username
    //
    //          comment["avatar"] = userData.user.avatar
    //
    //      }
    //
    //      commentsToDisplay.forEach(comment =>
    //
    //
    //          fetch(`http://localhost:3000/api/v1/users/${comment.user_id}/` , {
    //              method: "GET",
    //              headers: {
    //                  "content-type": "application/json",
    //                  accepts: "application/json"
    //              }
    //          }).then(res => res.json()).then(userData =>
    //
    //              addingUserData(comment, userData)
    //          )
    //
    //      )
    //
    //      savingCommentsToState(commentsToDisplay) } else { //()}
    //
  }

  changeHandler = e => {


    this.setState({
      content: e.target.value,
      commentType: this.props.commentType
    });
  };

  displayCommentTable = e => {
    let comments = new Array();

    let commentsToDisplay = [];

    let theNewComment = {};

    function addingUserData(comment, userData) {
      comment["username"] = userData.user.username;

      comment["avatar"] = userData.user.avatar;
    }

    if (this.props.comments) {
      comments = this.props.comments;

      for (const [key, value] of Object.entries(comments)) {
        theNewComment = Object.assign(value);

        commentsToDisplay.push(theNewComment);
      }

      commentsToDisplay.forEach(comment =>
        fetch(`http://localhost:3000/api/v1/users/${comment.user_id}/`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
            accepts: "application/json"
          }
        })
          .then(res => res.json())
          .then(userData => addingUserData(comment, userData))
      );

      return commentsToDisplay.map(comment => {
        return (
          <Comment>
            <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
            <Comment.Content>
              <Comment.Author as="a">
                {comment.username}
              </Comment.Author>
              <Comment.Metadata>
                <div>{comment.created_at}</div>
              </Comment.Metadata>
              <Comment.Text>{comment.content}</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        );
      });
    } else {
      return   null
    }


  };
  // for (let i = 0; i < comments.length; ) {
  //
  //
  //
  // if(i > comments.length) break;

  // if (i > comments.length) break;

  //     return comments.map(comment => {
  // <Comment>
  //   <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
  //   <Comment.Content>
  //     <Comment.Author as='a'>{this.state.username}</Comment.Author>
  //     <Comment.Metadata>
  //       <div>{comment.created_at}</div>
  //     </Comment.Metadata>
  //     <Comment.Text>{comment.content}</Comment.Text>
  //     <Comment.Actions>
  //       <Comment.Action>Reply</Comment.Action>
  //     </Comment.Actions>
  //   </Comment.Content>
  // </Comment>

  // <Header as='h3' dividing>
  //   Comments
  // </Header>
  // {//(this.props)}
  // <Comment>
  //   <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
  //   <Comment.Content>
  //     <Comment.Author as='a'>Matt</Comment.Author>
  //     <Comment.Metadata>
  //       <div>Today at 5:42PM</div>
  //     </Comment.Metadata>
  //     <Comment.Text>How artistic!</Comment.Text>
  //     <Comment.Actions>
  //       <Comment.Action>Reply</Comment.Action>
  //     </Comment.Actions>
  //   </Comment.Content>
  // </Comment>
  //
  // <Comment>
  //   <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
  //   <Comment.Content>
  //     <Comment.Author as='a'>Elliot Fu</Comment.Author>
  //     <Comment.Metadata>
  //       <div>Yesterday at 12:30AM</div>
  //     </Comment.Metadata>
  //     <Comment.Text>
  //       <p>This has been very useful for my research. Thanks as well!</p>
  //     </Comment.Text>
  //     <Comment.Actions>
  //       <Comment.Action>Reply</Comment.Action>
  //     </Comment.Actions>
  //   </Comment.Content>
  //   <Comment.Group>
  //     <Comment>
  //   </Comment.Group>
  // </Comment>
  //

  render() {

      let comments = this.props.comments
      const strainId = this.props.strainID
      const commentId = this.props.commentID
      const photoId = this.props.photoID

if(this.props.commentType === 'strain'){

    return (
      <Comment.Group align>
        {comments.length?
          this.displayCommentTable()
           :
          <Header>No Comments</Header>
           }

        <Form reply strainID={strainId} >
          <Form.TextArea onChange={e => this.changeHandler(e)} />
          <Button
            onClick={e => this.props.submitCommentHandler(this.state, e)}
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
          />
        </Form>
      </Comment.Group>
    );
} else if (this.props.commentType === 'photo'){

    return (
      <Comment.Group align>
        {comments?
          this.displayCommentTable()
           :
          <Header>No Comments</Header>
           }

        <Form reply photoID={photoId} >
          <Form.TextArea onChange={e => this.changeHandler(e)} />
          <Button
            onClick={e => this.props.submitCommentHandler(this.state, e)}
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
          />
        </Form>
      </Comment.Group>
  )
} else if (this.props.commentType === 'comment'){
      return (
        <Comment.Group align>
          {comments?
            this.displayCommentTable()
             :
            <Header>No Comments</Header>
             }

          <Form reply commentID={commentId} >
            <Form.TextArea onChange={e => this.changeHandler(e)} />
            <Button
              onClick={e => this.props.submitCommentHandler(this.state, e)}
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              primary
            />
          </Form>
      </Comment.Group>
  )
}else{
    return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
}


}

}

export default withRouter(CommentDisplay);

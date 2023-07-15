import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
//import query from "../queries/fetchSongs";

class CommentCreate extends React.Component {
  /*constructor(props) {
    super(props);
    //this.state = { title: "" };
  }
  
  onSubmit(event) {
    event.preventDefault();
    this.props
      .mutate({
        variables: {
          title: this.state.title
        },
        refetchQueries: [{ query }]
      })
      .then(() => {
        hashHistory.push("/");
      });
  }*/
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a new song</h3>
      </div>
    );
  }
}
/*
const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;graphql(mutation)
*/
export default CommentCreate;

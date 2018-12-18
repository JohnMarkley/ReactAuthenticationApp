import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import { Jumbotron, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';


class Members extends Component {

  state={
    currentUserName: '',
    currentUserEmail: ''
  }

  componentDidMount(){
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserName: idToken.idToken.claims.name,
      currentUserEmail: idToken.idToken.claims.email
    });
  }


  render() {
    const { currentUserEmail, currentUserName } = this.state;

    return (
      <div className="Full">

        <Jumbotron fluid>
          <Container fluid>
          <Card className="Card">
          <h1>Welcome, {currentUserName}</h1>
          <p>Your email is: {currentUserEmail}</p>
          </Card>
        </Container>
      </Jumbotron>
        
        
      </div>
    )
  }
}

export default Members;
  
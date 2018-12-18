import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { Jumbotron, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

export default withAuth(
    class Home extends Component {
        state = { authenticated: null};
  

  checkAuthentication = async() => {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

    login = async() => {
    this.props.auth.login('/');
  }

    logout = async() =>{
    this.props.auth.logout('/');
  }

  render() {
    if (this.state.authenticated === null) return null;

    const mainContent = this.state.authenticated ? (
        <div>
            <p>You have entered the app, <Link to="/members">click here</Link> </p>
            <Button onClick={this.logout} variant="contained" color="primary" className={styles.button}>
            Logout
            </Button> 
        </div> ) :(
        <div>
            <p>For demo purposes, you can use the following login credentials: <br /> Username: John@doe.com <br /> Password: Admin1234</p>
            <Button onClick={this.login} variant="contained" color="primary" className={styles.button}>
            Login
            </Button> 

        </div>


    );
      
    return (
    <div className="Full">
    
      <Jumbotron fluid>
        <Container fluid>
        <Card className="Card">
          <h1 className="display-4">Welcome to the authentication app!</h1>
          <p className="lead">This application was made with React, Okta for user authentication, Matieral Ui & Bootstrap</p>
          <p>This app also utilizes tokens in local storage to display details about the user</p>
          {mainContent} 
          </Card>
        </Container>
      </Jumbotron>
      
    </div>
    
     
        
    
          
    );
  }
});

const styles = theme => ({
   
    card: {
        minWidth: 275,
    }
  });


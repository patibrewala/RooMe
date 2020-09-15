import React, { Component } from "react";
import { Link } from "react-router-dom";
import {setConfiguration, Row, Col, Container } from "react-grid-system";
import RoomeLogo from './roomeLogo.component'
import {Button, Form} from 'react-bootstrap';
export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
console.log(userData);
  };
render() {
    const { errors } = this.state;
return (
  <div>
    <Container>

      <Row>
        <Col md={12}>
          <RoomeLogo></RoomeLogo>
        </Col>

        
        <div id="loginCard">

        <Col id="loginTitle" md={12}>
          <h5> Welcome Back </h5>
        </Col>
        
        
        {/* <Col id="loginInput" md={12}> */}
        <form noValidate onSubmit={this.onSubmit}>
              
              <div className="input-field col s12">
              <label htmlFor="email">Email</label>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                />
                
              </div>
              
              <div id="passwordMargin" className="input-field col s12">
              <label htmlFor="password">Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
                
              </div>
              
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  <Button id="test-custom-btn" variant="outline-light"  href="/home-matches">Log In</Button>
                </button>
              </div>

            </form>
        {/* </Col> */}
        <Col id="register" md={12}>
        <h6>
        Don't have an account? <Link id="regFont" to="/profile">Sign up now!</Link>
        </h6>
        </Col>
        
        </div>

        <Col id="backHome" md={12}>
             <a href="/"> Back to home </a>
        </Col>
       
      </Row>
    </Container>
  </div>
      
      
      
      
      // <div className="container">
      //   <div style={{ marginTop: "4rem" }} className="row">
      //     <div className="col s8 offset-s2">
      //       <Link to="/" className="btn-flat waves-effect">
      //         <i className="material-icons left"></i> Back to
      //         home
      //       </Link>
      //       <div className="col s12" style={{ paddingLeft: "11.250px" }}>
      //         <h4>
      //           <b>Login below</b> 
      //         </h4>
      //         <p className="grey-text text-darken-1">
      //           Don't have an account? <Link to="/register">Register</Link>
      //         </p>
      //       </div>
            
      //       <form noValidate onSubmit={this.onSubmit}>
              
      //         <div className="input-field col s12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.email}
      //             error={errors.email}
      //             id="email"
      //             type="email"
      //           />
      //           <label htmlFor="email">Email</label>
      //         </div>
              
      //         <div className="input-field col s12">
      //           <input
      //             onChange={this.onChange}
      //             value={this.state.password}
      //             error={errors.password}
      //             id="password"
      //             type="password"
      //           />
      //           <label htmlFor="password">Password</label>
      //         </div>
              
      //         <div className="col s12" style={{ paddingLeft: "11.250px" }}>
      //           <button
      //             style={{
      //               width: "150px",
      //               borderRadius: "3px",
      //               letterSpacing: "1.5px",
      //               marginTop: "1rem"
      //             }}
      //             type="submit"
      //             className="btn btn-large waves-effect waves-light hoverable blue accent-3"
      //           >
      //             Login
      //           </button>
      //         </div>

      //       </form>

      //     </div>
      //   </div>
      // </div>
      
    );
  }

}
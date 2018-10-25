import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import {
  SignInUser,
  toggleClose,
  toggleOpen,
} from './../redux/actions/actions';

class SignInWith extends Component {
  render() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
    const responseGoogle = () => {
      let postData = {
        name: 'depinder',
        provider: 'google',
        email: 'exmaple@admin.com',
        provider_id: 'example',
        token: 'edsgfsdgsdgsfgsdg',
        provider_pic: 'http://lorempixel.com/200/200/',
      };
      console.log(postData);
      // build our user data
      this.props.SignInUser(postData);
      this.props.toggleClose();
    };

    return (
      <div>
        <div
          data-behavior="overlay"
          className={
            this.props.modalMode === true
              ? 'overlay overlay-hugeinc open'
              : 'overlay overlay-hugeinc'
          }
        >
          <button
            onClick={this.props.toggleClose}
            data-behavior="close-overlay"
            type="button"
            className="overlay-close"
          >
            <span className="glyphicon glyphicon-remove" />
          </button>
          <nav>
            <h2 className="grayed-heading center">Sign In</h2>
            <ul className="omniauth-button-group">
              <li className="omniauth-button google">
                <GoogleLogin
                  className="button google"
                  clientId=""
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                >
                  <i className="fa fa-google" />
                  <span> SignIn with Google</span>
                </GoogleLogin>
              </li>
              <li>
                <a href="#" onClick={responseGoogle}>
                  Click me
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    modalMode: state.common.modalMode,
  };
};

export default connect(
  mapStateToProps,
  {
    toggleClose,
    toggleOpen,
    SignInUser,
  }
)(SignInWith);

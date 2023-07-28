import React, { Component } from 'react'
import googleicon from '../img/googleicon.png'
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Full name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full name"
          />
        </div>
       
        <div className="mb-3">
          <label>Email </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Create Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input type="text" className="form-control" placeholder="Confirm Password" />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
          </div>
          <p className="or">or</p>
 <div className='img'>
      <div className='container-image'>

      </div>
      <div className= "box">
      <img src={googleicon} alt="googleicon" className="googleicon" />
      <button type="submit" className="btn  ">
            Create Account with Google
          </button>
        </div>
        <p className="forgot-password text-right">
          Already have an Account <a href="/sign-in">sign in?</a>
        </p>
        </div>
      </form>
    )
  }
}
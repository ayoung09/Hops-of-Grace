import React from 'react';
import { login } from 'APP/app/reducers/auth';
import { connect } from 'react-redux';


const Login = ({ login }) => {
  console.log('GOT TO LOGIN PAGE')
  return (
    <div className="signin-container">
      <div className="buffer local">
        <form onSubmit={evt => {
          evt.preventDefault();
          login(evt.target.username.value, evt.target.password.value)} }>
          <div className="form-group">
            <label>email</label>
            <input
              name="username"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
              <label>password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                required
              />
          </div>
          <button type="submit" value="Login" className="btn btn-block btn-primary">Login</button>
        </form>
      </div>
      <div className="or buffer">
        <div className="back-line">
          <span>OR</span>
        </div>
      </div>
      <div className="buffer oauth">
        <p>
          <a
            target="_self"
            href="/api/auth/login/google"
            className="btn btn-social btn-google">
            <i className="fa fa-google" />
            <span>Login with Google</span>
          </a>
        </p>
      </div>
    </div>
  );
}


export default connect (
  state => ({}),
  { login }
)(Login);

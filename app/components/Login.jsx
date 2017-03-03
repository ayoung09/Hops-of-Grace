import React from 'react';

export const Login = ({ login }) => (
  <div>
    <form onSubmit={evt => {
      evt.preventDefault();
      login(evt.target.username.value, evt.target.password.value);
    } }>
      <input name="username" />
      <input name="password" type="password" />
      <input type="submit" value="Login" />
    </form>
    <button name="google" onClick={evt => {
      console.log('this is event target name: ', evt.target.name);
      loginOAuth(evt.target.name);
      console.log('what is loginOAuth? ', loginOAuth);
    } }>Google Login</button>
  </div>
);

import { login, loginOAuth } from 'APP/app/reducers/auth';
import {connect} from 'react-redux';

export default connect (
  state => ({}),
  { login, loginOAuth }
)(Login);

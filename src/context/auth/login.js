import React, { useContext, useState } from 'react';
import { LoginContext } from './auth-context';
import Card from 'react-bootstrap/Card';
import './login.scss';

function Login(props) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const loginContext = useContext(LoginContext);

  const handleSubmit = e => {
    e.preventDefault();
    // send username and password to context
    loginContext.login(username, password);
  };

  const handleNameChange = e => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  // const handleLogout = () => {
  //   cookie.remove();
  //   loginContext.setLogInState(false, null, {});
  // };

  return (
    <>
      {loginContext.loggedIn ? (
        ''
      ) : (
        // <button onClick={handleLogout}>Sign Out</button>
        <Card>
          <h1>
            <Card.Header id="welcome">Welcome to the To Do App</Card.Header>
          </h1>
          <Card.Body>
            <Card.Title>Please sign in to continue</Card.Title>
            <form onSubmit={handleSubmit}>
              <label>
                Username
                <input onChange={handleNameChange} type="text" name="name" />
              </label>
              <label>
                Password
                <input
                  onChange={handlePasswordChange}
                  type="password"
                  name="password"
                />
              </label>
              <button>Sign in</button>
            </form>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default Login;

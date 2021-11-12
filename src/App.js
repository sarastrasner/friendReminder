import React from 'react';
import './App.scss';
import Login from './context/auth/login';
import LoginContext from './context/auth/auth-context';
import If from './components/if/if';

function App() {
  return (
    <>
      <div className="wrapper">
        <LoginContext>
          <Login />
          <If />
        </LoginContext>
      </div>
    </>
  );
}

export default App;

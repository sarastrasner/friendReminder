import React, { useEffect, useState, useContext } from 'react';
import { LoginContext } from './auth-context';

// Auth is going to tap into LoginContext and check if the user is logged in
// Auth will get a props of capability to see what it will show the user

function Auth(props) {
  const [okToRender, setOkToRender] = useState(false);
  const loginContext = useContext(LoginContext);
  useEffect(() => {
    setOkToRender(
      loginContext.loggedIn && (props.capability ? loginContext.user.capabilities.includes(props.capability) : false)
    )
  }, [loginContext, props.capability])

  return (
    okToRender &&
    <div>{props.children}</div>
  )
}

export default Auth;
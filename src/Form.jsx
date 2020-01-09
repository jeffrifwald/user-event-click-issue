import React, { useRef } from 'react';

export const Form = () => {
  const email = useRef();
  const password = useRef();

  return (
    <>
      <input placeholder="Email" ref={email} />
      <input placeholder="Password" ref={password} />
      <button onClick={() => email.current.focus()}>
        Focus Email
      </button>
      <button onClick={() => password.current.focus()}>
        Focus Password
      </button>
    </>
  );
};

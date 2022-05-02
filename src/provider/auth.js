import React from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

  const user = [{ 
    name: props.name, 
    email: props.email,
    photo: props.photo }]

  return(
    <AuthContext.Provider value={{ user }}>
      { props.children }
    </AuthContext.Provider>
  )
}
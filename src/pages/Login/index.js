import React from 'react';

// import { AuthContext } from '../../provider/auth';

import GoogleLogin from 'react-google-login';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css';
import logo from '../../assets/logo.png';

export function Login(){

  // const { user } = React.useContext(AuthContext);
  // console.log(user)

  const navigate = useNavigate();

  const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [profilePic, setProfilePic] = useState();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseGoogle = (response) => {
		console.log(response)
		const { profileObj: { name, email, imageUrl } } = response
		setName(name)
		setEmail(email)
		setProfilePic(imageUrl)
		setIsLoggedIn(true)
	};


  return(
    <div className={styles.container}>
      <img className={styles.logo} src={ logo } alt="Logo do Projeto" />
      <GoogleLogin
        clientId="777032163188-tkm3981mipt3ppvng02oimfaitjoa23i.apps.googleusercontent.com"
        buttonText="Entrar com o Google"
        onSuccess={responseGoogle}
				onFailure={responseGoogle}//Criar função de rejeição
        className={styles.GoogleLogin}
      />

      { isLoggedIn ? ( navigate('/home')) : (' ') }

       {/* {isLoggedIn ?
				(<div>
          <img src={profilePic} alt="Foto do Usuário" />
          <p>Name: {name}</p>
          <p>Email: {email}</p>
				</div>
        ) : ( '' )};  */}

      {/* <AuthContext name={name} email={email} photo={profilePic} /> */}

    </div>    
    
  )
}
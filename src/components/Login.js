import React from 'react'
import styled from 'styled-components'
import logo from "../assets/slackLogo.png"
import { auth, provider } from '../firebase'
export const Login = () => {
  const signIn=(e)=>{
    e.preventDefault();
    auth.signInWithPopup(provider).catch(error=>alert(error.message))
  }

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src={logo} alt=''/>
        <h1>Sign in to Khushi Mittal</h1>
        <p>newSlack.com</p>
        <button onClick={signIn}>Sign in with Google</button>
      </LoginInnerContainer>
    </LoginContainer>
  )
}

const LoginContainer= styled.div`
  display: grid;
  background-color:#f8f8f8;
  place-items: center;
  height: 100vh;
`;

const LoginInnerContainer= styled.div`
  padding: 100px;
  text-align:center;
  background-color: white;
  border-radius: 30px;
  >img{
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  >button{
    margin-top: 50px;
    text-transform:inherit !important;
    color: white;
    background-color: #0a8d48 !important;
    padding: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
  }
`;
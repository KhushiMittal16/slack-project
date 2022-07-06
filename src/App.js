import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import SideBar from "./components/SideBar";
import styled from "styled-components";
import Chats from "./components/Chats";
import Home from "./pages/Home";
import ViewportProvider from "./viewport";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { Login } from "./components/Login";
import logo from "./assets/slackLogo.png";
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img src={logo} alt="" />

          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContent>
      </AppLoading>
    );
  }

  return (
    <ViewportProvider>
      <div className="App">
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <SideBar />
              <Routes>
                <Route path="/" exact element={<Chats />} />
              </Routes>
            </AppBody>
            {/* <Home/> */}
          </>
        )}
      </div>
    </ViewportProvider>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100%;
  margin-bottom: 0px;
`;
const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;

  >img{
    margin-bottom: 30px;
  }
`;

const AppLoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
  }
`;

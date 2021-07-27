import React from "react";
import styled from "styled-components";
import theme from "../Theme";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/styles";
import { goToTripList, goToLogin } from "../routes/coordinator";
import { useHistory } from "react-router";

const Div = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  margin: auto;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 71, 121, 1) 13%,
    rgba(0, 212, 255, 1) 100%
  );

  @media only screen and (max-width: 768px) {
  }
`;
const H1 = styled.h1`
  width: 50%;
  height: 40vh;
  margin: 0;
  font-size: 250px;
  background: url("https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw4NzA5MzQwMnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60")
    no-repeat;
  background-position: center;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 20px;
  -webkit-text-stroke-width: 0.6px;
  -webkit-text-stroke-color: black;

  @media only screen and (max-width: 768px) {
    width: 100%;
    background: url("https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw4NzA5MzQwMnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60");
    background-position: center;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-size: 60px;
    margin-left: 70px;
    margin-top: 150px;
  }
`;

const ButtonContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 580px;
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 450px;
    display: flex;
    flex-direction: column;
    button {
      margin-bottom: 20px;
    }
  }
`;

const HomePage = () => {
  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <Div>
        <H1>LABEX</H1>
        <ButtonContainer>
          <Button
            onClick={() => goToLogin(history)}
            variant="contained"
            color="primary"
            style={{ fontSize: 30 }}
          >
            Admin area
          </Button>
          <Button
            onClick={() => goToTripList(history)}
            variant="contained"
            color="primary"
            style={{ fontSize: 30 }}
          >
            Travel List
          </Button>
        </ButtonContainer>
      </Div>
    </ThemeProvider>
  );
};

export default HomePage;

import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { goToTripList } from "../routes/coordinator";
import FormApp from "../components/FormApp";
import Button from "@material-ui/core/Button";

const Div = styled.div`
  width: 100%;

  height: 100vh;
  margin: auto;
  align-items: center;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 71, 121, 1) 13%,
    rgba(0, 212, 255, 1) 100%
  );
  > button {
    position: absolute;
    top: 20px;
    left: 50px;
    cursor: pointer;
  }
  > button:hover {
    transform: scale(1.4);
  }
`;
const Main = styled.main`
  height: 680px;
  min-height: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ApplicationFormPage = () => {
  const history = useHistory();

  return (
    <Div>
      <Button
        onClick={() => {
          goToTripList(history);
        }}
        variant="contained"
        color="primary"
        style={{ fontSize: 15 }}
      >
        Back
      </Button>
      <Main>
        <FormApp />
      </Main>
    </Div>
  );
};

export default ApplicationFormPage;

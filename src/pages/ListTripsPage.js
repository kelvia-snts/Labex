import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { goToHomePage, goToTripApplication } from "../routes/coordinator";
import { useHistory } from "react-router";
import { useRequestData } from "../hooks/useRequestData";

const Div = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  button:hover {
    transform: scale(1.4);
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 700px;
  }
`;
const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  > button {
    position: absolute;
    top: 100px;
  }
  li {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 212, 255, 0.8211659663865546) 0%,
      rgba(0, 212, 255, 1) 0%,
      rgba(1, 158, 199, 1) 95%
    );
    border-radius: 5px;
    list-style: none;
    width: 250px;
    margin: 10px;
    h2 {
      text-align: center;
      margin: 0;
      color: #094293;
    }
    p {
      text-align: center;
      margin: 0;
      word-wrap: break-word;
      font-size: 18px;
      span {
        font-weight: bold;
        color: #094293;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    li {
      width: 200px;
      height: 130px;
      margin: 5px;
      h2 {
        font-size: 15px;
      }
      p {
        text-align: center;
        margin: 0;
        word-wrap: break-word;
        font-size: 12px;
        span {
          font-weight: bold;
          color: #094293;
        }
      }
    }
  }
`;

const ListTripsPage = () => {
  const tripsList = useRequestData("/trips", []);
  const history = useHistory();

  const tripsComponents =
    tripsList.trips &&
    tripsList.trips.map((trip) => {
      return (
        <li>
          <h2>{trip.name}</h2>
          <p>
            <span>Description: </span>
            {trip.description}
          </p>
          <p>
            <span>Planet: </span>
            {trip.planet}
          </p>
          <p>
            <span>Duration(days): </span>
            {trip.durationInDays}
          </p>
          <p>
            <span>Date: </span>
            {trip.date}
          </p>
        </li>
      );
    });

  return (
    <Div>
      <Button
        onClick={() => goToHomePage(history)}
        variant="contained"
        color="primary"
        style={{ fontSize: 15 }}
      >
        Home
      </Button>
      <Main>
        {tripsComponents}
        <Button
          onClick={() => goToTripApplication(history)}
          variant="contained"
          color="primary"
          style={{ fontSize: 15 }}
        >
          Sing Up For A Trip
        </Button>
      </Main>
    </Div>
  );
};

export default ListTripsPage;

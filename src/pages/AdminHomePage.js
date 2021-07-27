import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
import { goToAdminTripCreate } from "../routes/coordinator";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { baseUrl } from "../constants/url";

const Div = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
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
    left: 30px;
  }
  > button:hover {
    transform: scale(1.2);
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 95vh;
  > button {
    margin-top: 20px;
    margin-right: 60px;
    position: absolute;
    top: 80px;
  }
  > button:hover {
    transform: scale(1.2);
  }
  li {
    list-style: none;
    margin: 0px 10px 0px 0px;
    background: rgb(0, 212, 255);
    background: linear-gradient(
      90deg,
      rgba(0, 212, 255, 1) 13%,
      rgba(2, 0, 36, 1) 85%,
      rgba(0, 212, 255, 1) 100%
    );
    border-radius: 10px;

    h2 {
      text-align: center;
      margin: 0;
      color: white;
    }
  }
  p {
    margin: 0;
    word-wrap: break-word;
  }

  li:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
  svg {
    transform: scale(1.5);
    cursor: pointer;
    margin-left: 20px;
  }
  svg:hover {
    transform: scale(2.3);
  }
`;

const AdminHomePage = () => {
  const [tripsList, setTripsList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getTrips();
    const token = window.localStorage.getItem("token");

    if (token === null) {
      history.push("/login");
    }
  }, [history]);

  const getTrips = () => {
    axios
      .get(`${baseUrl}/trips`)
      .then((response) => setTripsList(response.data))
      .catch((error) => alert(error));
  };

  const deleteTrip = (id) => {
    if (
      window.confirm(
        "This action will delete this trip. Do you really want to continue?"
      )
    ) {
      const token = window.localStorage.getItem("token");

      axios
        .delete(`${baseUrl}/trips/${id}`, {
          headers: {
            auth: token,
          },
        })
        .then(() => getTrips())
        .catch((error) => alert(error));
    }
  };

  const tripsComponents =
    tripsList.trips &&
    tripsList.trips.map((trip) => {
      return (
        <ListContainer>
          <li onClick={() => history.push(`/admin/trips/${trip.id}`)}>
            <h2>{trip.name}</h2>
            <p></p>
          </li>
          <IconButton color="primary" aria-label="delete">
            <DeleteIcon onClick={() => deleteTrip(trip.id)} />
          </IconButton>
        </ListContainer>
      );
    });

  const logout = () => {
    window.localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <Div>
      <Main>
        {tripsComponents}
        <Button
          onClick={() => {
            goToAdminTripCreate(history);
          }}
          variant="contained"
          color="primary"
          style={{ fontSize: 15 }}
        >
          Create News Trips
        </Button>
      </Main>
      <Button
        onClick={logout}
        variant="contained"
        color="primary"
        style={{ fontSize: 15 }}
      >
        Logout
      </Button>
    </Div>
  );
};

export default AdminHomePage;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router";
import { goToAdminTripList } from "../routes/coordinator";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { baseUrl } from "../constants/url";

const Div = styled.div`
  height: 100vh;
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
    transform: scale(1.2);
  }
`;
const TripDetail = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  h2 {
    margin: 0;
    span {
      color: lightSkyBlue;
    }
  }
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 16px;
      margin: 0;
      margin-right: 60px;
    }
  }
`;

const Main = styled.main`
  min-height: 430px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  h3 {
    margin-top: 0;
    color: #094293;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    text-align: center;
    margin: 5px;
    span {
      font-weight: bold;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    p {
      font-size: 18px;
      margin: 0;
      word-wrap: break-word;
    }
    button {
      width: 100px;
      margin: 2px;
    }
  }
  @media only screen and (max-width: 768px) {
    div {
      width: 450px;
      margin: 0;
    }
  }
`;

const TripDetailsPage = () => {
  const history = useHistory();
  const params = useParams();
  const [tripData, setTripData] = useState({});

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token === null) {
      history.push("/login");
    }
  }, [history]);

  const getTripDetail = (id) => {
    const token = window.localStorage.getItem("token");

    axios
      .get(`${baseUrl}/trip/${params.id}`, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        setTripData(response.data.trip);
        console.log(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const decideCandidate = (approve, candidateId) => {
    const token = window.localStorage.getItem("token");

    const body = {
      approve: approve,
    };

    axios
      .put(
        `${baseUrl}/trips/${tripData.id}/candidates/${candidateId}/decide`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then(() => {
        if (approve) {
          alert("Candidate has been added to the list of approved!");
        } else {
          alert("Candidate was disapproved");
        }
        getTripDetail();
      })
      .catch((error) => alert(error));
  };

  const candidates =
    tripData.candidates &&
    tripData.candidates.map((person) => {
      return (
        <li>
          <p>
            <span>Name:</span> {person.name}
            <span> Age:</span> {person.age}
          </p>
          <p>
            <span>Profession:</span>
            {person.profession}
          </p>
          <p>
            <span>Country:</span> {person.country}
          </p>
          <p>
            <span>Application Text:</span>
            {person.applicationText}
          </p>
          <div>
            <Button
              onClick={() => {
                decideCandidate(true, person.id);
              }}
              variant="contained"
              color="primary"
              style={{ fontSize: 12 }}
            >
              Approve
            </Button>
            <Button
              onClick={() => {
                decideCandidate(false, person.id);
              }}
              variant="contained"
              color="primary"
              style={{ fontSize: 12 }}
            >
              Disapprove
            </Button>
          </div>
        </li>
      );
    });

  const approved =
    tripData.candidates &&
    tripData.approved.map((person) => {
      return (
        <li>
          <p>
            <span>Name:</span> {person.name}
          </p>
        </li>
      );
    });

  useEffect(() => {
    getTripDetail(params.id);
  }, [params.id]);

  return (
    <Div>
      <Button
        onClick={() => goToAdminTripList(history)}
        variant="contained"
        color="primary"
        style={{ fontSize: 15 }}
      >
        Back
      </Button>

      <Main>
        <TripDetail key={tripData.id}>
          <h2>{tripData.name}</h2>
          <h2>
            <span>Where? </span>
            {tripData.planet}!
          </h2>
          <h2>
            <span>Details: </span>
            {tripData.description}
          </h2>
          <h2>
            {tripData.durationInDays} <span>days</span> - {tripData.date}
          </h2>
        </TripDetail>
        <h3>Candidates</h3>
        <div>
          {candidates && candidates.length > 0 ? (
            candidates
          ) : (
            <p>There are no pending candidates</p>
          )}
        </div>
        <h3>Approved</h3>
        <div>
          {approved && approved.length > 0 ? (
            approved
          ) : (
            <p>There are no approved candidates</p>
          )}
        </div>
      </Main>
    </Div>
  );
};

export default TripDetailsPage;

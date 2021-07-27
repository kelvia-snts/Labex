import React from "react";
import styled from "styled-components";
import { goToHomePage } from "../routes/coordinator";
import { useHistory } from "react-router";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { fade, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useForm } from "../hooks/useForm";
import { baseUrl } from "../constants/url";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const Div = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 71, 121, 1) 13%,
    rgba(0, 212, 255, 1) 100%
  );

  > button {
    position: absolute;
    top: 10px;
    left: 50px;
    cursor: pointer;
  }
  > Button:hover {
    transform: scale(1.1);
  }
`;
const Main = styled.form`
  background: rgb(0, 212, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 212, 255, 1) 13%,
    rgba(2, 0, 36, 1) 85%,
    rgba(0, 212, 255, 1) 100%
  );
  border-radius: 10px;
  height: 400px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    font-size: 30px;
    margin-bottom: 20px;
    width: 450px;
  }
  button {
    margin-top: 30px;
    width: 150px;
  }
  @media only screen and (max-width: 768px) {
    height: 550px;
    width: 350px;
  }
  input {
    font-size: 20px;
    margin-bottom: 20px;
    width: 280px;
  }
`;

const initialForm = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [form, onChange, resetForm] = useForm(initialForm);

  const handleClick = (event) => {
    event.preventDefault();
    resetForm();
  };
  const history = useHistory();

  const login = () => {
    const body = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(`${baseUrl}/login`, body)
      .then((response) => {
        console.log(response.data);
        window.localStorage.setItem("token", response.data.token);
        history.push("/admin/trips/list");
      })
      .catch((error) => {
        alert(error);
      }); //usar a urlbase
  };

  return (
    <Div>
      <Button
        onClick={() => {
          goToHomePage(history);
        }}
        variant="contained"
        color="primary"
        style={{ fontSize: 22 }}
      >
        Home
      </Button>

      <Main onSubmit={handleClick}>
        <FormControl required>
          <InputLabel shrink htmlFor="bootstrap-input">
            Email
          </InputLabel>
          <BootstrapInput
            placeholder="Email*"
            inputProps={{ pattern: "(/$|.+@.+./)" }}
            name="email"
            type="email"
            required
            value={form.email}
            onChange={onChange}
          />
        </FormControl>
        <FormControl required>
          <InputLabel shrink htmlFor="bootstrap-input">
            Password
          </InputLabel>
          <BootstrapInput
            placeholder="Password*"
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
          />
        </FormControl>
        <Button
          onClick={login}
          variant="contained"
          color="primary"
          style={{ fontSize: 22 }}
        >
          Login
        </Button>
      </Main>
    </Div>
  );
};

export default LoginPage;

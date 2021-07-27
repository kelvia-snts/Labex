import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background: url("https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw4NzA5MzQwMnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=60");
  background-position: center;
  box-shadow: 0 0 5px 2px;
  width: 100%;
  min-height: 80px;
  margin: auto;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    background: url("https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw4NzA5MzQwMnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60")
      no-repeat;
    background-position: center;
  }
`;

const Header = () => {
  return <Div></Div>;
};

export default Header;

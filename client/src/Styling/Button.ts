import styled from "styled-components";

const COLORS = {
    primary: {
      "--main": "deepskyblue",
      "--accent": "white",
    },
    secondary: {
      "--main": "white",
      "--accent": "lightblue",
    },
  };

  const ButtonBase = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 8px 16px;
  margin-left: 40%;
  margin-right: 40%;
  margin-bottom: 10%;
  text-decoration: none;
`;
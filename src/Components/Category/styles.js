import styled from "styled-components";
import { Link } from "@reach/router";

export const Anchor = styled(Link)`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
  img {
    border-radius: 50%;
    border: 1px solid #ddd;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
    height: 75px;
    object-fit: cover;
    overflow: hidden;
    width: 75px;
  }
`;

import styled from "styled-components";

export const Ol = styled.ol`
  /* Box */
  width: fit-content;
  margin: 8rem auto;

  /* Layout */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  & button {
    /* Font */
    color: #cc5de8;
    font-size: 6.8rem;
    text-align: center;

    /* Box */
    width: 15rem;
    height: 15rem;
    background-color: #eebefa;
  }
`;

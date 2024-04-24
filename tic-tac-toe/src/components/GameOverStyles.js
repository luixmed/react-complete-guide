import styled from "styled-components";

export const Div = styled.div`
  /* Font */
  color: #fcc419;
  text-align: center;

  /* Box */
  width: 80rem;
  height: 80rem;
  padding: 1rem; /* !only to avoid margin collapsing */

  /* Style */
  background-color: #3d0c4af2;

  & h2 {
    font-size: 7.4rem;
    margin-block: 20rem 3rem;
  }

  & p {
    color: white;
    font-size: 3.6rem;
    margin-bottom: 8rem;
  }

  & button {
    color: #fcc419;
    font-size: 2.4rem;
    font-weight: bold;

    padding: 1.2rem 2.4rem;
    border: 3px solid currentColor;
    border-radius: 7px;

    background: none;

    transition: all 0.3s;
  }

  & button:hover {
    color: #3d0c4a;
    background-color: #fcc419;
  }
`;

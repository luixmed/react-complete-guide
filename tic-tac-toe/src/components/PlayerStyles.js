import styled from "styled-components";

export const Div = styled.div`
  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  & p,
  & input {
    /* Font */
    color: white;
    font-size: 1.8rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.75px;

    /* Box */
    width: 20rem;
    padding: 1.2rem 2.4rem;
    border-radius: 9px;
  }

  & p {
    /* Box */
    border: 3px solid currentColor;
  }

  & p.active {
    color: #2b8a3e;
    background-color: #b2f2bb;
    border-color: currentColor;
  }

  & span {
    margin-left: 1.6rem;
  }

  & input {
    /* Box */
    border: 3px solid #f3d9fa;

    /* Style */
    background-color: transparent;
  }

  & button {
    /* Font */
    color: #862e9c;
    font-size: 1.6rem;
    font-weight: 600;

    /* Box */
    width: 7rem;
    height: 3.6rem;
    border: 2px solid #e599f7;
    border-radius: 5px;

    /* Style */
    background-color: #e599f7;

    /* Animation */
    transition: all 0.4s;
  }

  & button:hover {
    color: white;
    background-color: #862e9c;
  }
`;

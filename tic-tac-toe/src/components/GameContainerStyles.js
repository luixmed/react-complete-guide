import { styled } from "styled-components";

export const DivStyled = styled.div`
  /* Box */
  padding: 4.8rem;
  border-radius: 9px;

  /* Style */
  background-color: #862e9c;
  box-shadow: 0 0 4.8rem rgb(0 0 0 / 15%);

  & > div {
    display: flex;
    justify-content: center;
    gap: 9.6rem;
  }

  & > div.modal {
    display: none;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & > div.modal.show-modal {
    display: block;
  }
`;

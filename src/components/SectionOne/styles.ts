import styled from "styled-components";

export const SessionOneContainer = styled.div`
  body {
    margin: 0;
  }

  section {
    padding: 30px 15%;
  }

  @media (width <= 720px) {
    section {
      padding: 30px 10%;
    }
  }

  .banner {
    position: relative;
    display: flex;
    align-items: center;
    gap: 50px;
    justify-content: space-between;
    padding-top: 100px;
    padding-bottom: 100px;
    min-height: 40vh;
    margin-bottom: 40px;
  }

  @media (width <= 620px) {
    .banner {
      text-align: center;
      flex-direction: column-reverse;
      justify-content: center;
    }
  }

  .banner::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 100%;
    height: 110%;
  }

  .banner h2 {
    white-space: nowrap;
    margin: 0 0 4px;
    font-size: 40px;
    letter-spacing: 1.5px;
  }

  .banner h3 {
    font-weight: 400;
    width: 80%;
    letter-spacing: 1.5px;
  }

  .containerBtn {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }


  .btn1 {
    margin-right: 20px;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secundary};
    &:hover {
      background: ${(props) => props.theme.colors.secundary};
      color: ${(props) => props.theme.colors.primary};
      svg {
        color: ${(props) =>
          props.theme.colors
            .primary}; /* Altera a cor de preenchimento do ícone para preto */
      }
    }
    &:active{
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.secundary};
      svg{
        color: ${(props) => props.theme.colors.secundary};
      }
    }
  }

  .btn2 svg {
    color: ${(props) => props.theme.colors.secundary};
  }

  .btn2 {
    border: 2px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
    &:hover{
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.secundary};
    }
    &:active{
      background-color: ${(props) => props.theme.colors.secundary};
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

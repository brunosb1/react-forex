
import styled from "styled-components";
import EX from "../../images/EX.png";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  background-color: #81c784 ;
  margin: 0 auto;

  .content {
    max-width: 1380px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;

    h1 {
      color: black;
      font-weight: 300;
      font-size: 53px;
      font-family: "Raleway", sans-serif;
    }

    img {
      width: 100px;
      height: 70px;
    }
  }
`;

export const Header = () => {
    return (
    <Container>
    <div className="content">
    <img src={EX} alt="exchange" />
    <h1>Exchange Currency Real Time</h1>
    </div>
    </Container>
    )
}
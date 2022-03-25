import styled from "styled-components";


export const Section = styled.div`
  margin-top: 70px;
  display: flex;
  .conteudo {
    width: 550px;
    height: 400px;
    background-color: #81c784;
    border-radius: 30px;
    border: 1px solid black;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    margin-left: 10px;

    h1 {
      color: black;
      font-weight: 300;
      font-size: 51px;
      font-family: "Raleway", sans-serif;
      border-bottom: 1px solid black;
      margin-bottom: 10px;
    }
    h3 {
      color: black;
      font-weight: 200;
      font-size: 24px;
      font-style: normal;
      text-align: center;
    }
  }



  .conteudo-real {
    width: 550px;
    height: 400px;
    background-color: #81c784;
    border-radius: 30px;
    border: 1px solid black;
    padding: 5px;
    flex-direction: column; 
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    margin-left: 10px;

    h1 {
      color: black;
      font-weight: 300;
      text-align: center;
      font-size: 51px;
      font-family: "Raleway", sans-serif;
      border-bottom: 1px solid black;
      margin-bottom: 10px;
    }

    h3 {
      color: black;
      font-weight: 200;
      font-size: 24px;
      font-style: normal;
      text-align: center;
    }
  }

  .conteudo-trades {
    width: 500px;
    height: 400px;
    background-color: #81c784;
    border-radius: 30px;
    border: 1px solid black;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    overflow-y: scroll;
    margin-left: 10px;
    h1 {
      color: black;
      font-weight: 300;
      font-size: 51px;
      font-family: "Raleway", sans-serif;
      border-bottom: 1px solid black;
      margin-bottom: 10px;
    }
    p {
        color: white;
        font-size: 25px;
    }
  }


  
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    font-weight: 200;
    font-size: 22px;
    cursor: pointer;
    background-color: #ef5350;
    width: 170px;
    height: 35px;
    outline: none;
    border-radius: 45px;
    border: 1px solid black;
  }
`;
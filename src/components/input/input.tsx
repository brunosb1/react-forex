// EXTERNAL LIBRARY IMPORTS
import io from "socket.io-client";
import axios from "axios";

//** React and components IMPORTS **
import { useEffect, useState } from "react";
import { Section, Buttons } from "./inputcss";
import { CurrencyInput } from "../exchange/exchange";
import { Helper } from "../transaction/helper";

export const Input = () => {
  //MY STATES
  const [data, setData] = useState<any>({});
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [currency1, setcurrency1] = useState("USD");
  const [currency2, setcurrency2] = useState("GBP");

  useEffect(() => {
    const socket = io("ws://localhost:4000");
    socket.on("send-data", (dado) => {
      setData(dado);
    });
  }, []);

  //const fixed = (number: any) => {
  //return number.toFixed(2);
  //};

  //this functions return exact price of the currencies
  const HandleAmount1Change = (amount1: number) => {
    setAmount2((amount1 * data[currency2]) / data[currency1]);
    setAmount1(amount1);
  };

  //this functions return exact price of the currencies
  const HandleAmount2Change = (amount2: number) => {
  //this setAmount1 make count
  setAmount1((amount1 * data[currency1]) / data[currency2]);
  setAmount2(amount2);
  };

  // function to send datas to mongodb serverAPI
  const send = () => {
    axios({
    method: "post",
    url: "http://localhost:4000/api/transaction",
    data: {
    from: currency1,
    to: currency2,
    valueFrom: amount1,
    valueTo: amount2,
      },
    });
    console.log("deu tudo certo!");
  };
  
  console.log(data);

  return (
    <Section>
      {/* CURRENCIE EXCHANGE AREA */}
      <div className="conteudo">
        <div className="titles">
          <h1>Exchange currencies</h1>
        </div>
        <h3>From</h3>{" "}
        <CurrencyInput
          amountChange={HandleAmount1Change}
          currencyChange={setcurrency1}
          currencies={Object.keys(data)}
          amount={amount1}
          currency={currency1}
        />
        <h3>To</h3>{" "}
        <CurrencyInput
          currencyChange={setcurrency2}
          amountChange={HandleAmount2Change}
          currencies={Object.keys(data)}
          amount={amount2}
          currency={currency2}
        />
        <Buttons>
          <button data-testid="button" onClick={send}>Exchange</button>
        </Buttons>
      </div>


      {/* CURRENCIE REAL TIME  AREA */}
      <div className="conteudo-real">
        <div className="titles">
          <h1>Real time currencie: USD</h1>
        </div>
        <h3>GBP: {data?.GBP}</h3>
        <h3>BRL: {data?.BRL}</h3>
      </div>


      {/* PAST TRADES AREA */}
      <div className="conteudo-trades">
        <div className="titles">
          <h1 data-testid="past">Past trades</h1>
        </div>
        <Helper />
      </div>
    </Section>
  );
};
 
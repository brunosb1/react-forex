import { Card } from "./helpercss"
import axios from "axios";
import { useEffect, useState } from "react";

interface Trading {
  from: string;
  to: string;
  valueFrom: Number;
  valueTo: Number;
}

export const Helper = () => {
  const [transaction, setTransaction] = useState<Trading[]>([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/transaction").then((response) => {
      setTransaction(response.data.transactions);
    });
  }, [transaction]);

  return (
    <>
      {transaction.map((index, key) => {
        return (
          <section className="helper"key={key}>
            <Card>
              <p data-testid="test">From: {index?.from} = ${index?.valueFrom}</p>
              <p>To: {index?.to} = ${index?.valueTo}</p>
            </Card>
          </section>
        );
      })}
      
    </>
  );
};
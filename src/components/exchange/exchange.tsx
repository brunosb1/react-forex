import styled from "styled-components";

 const Input = styled.input`
    width: 150px;
    height: 30px;
    border-radius: 30px;
    outline: none;
    padding-left: 10px;
    border: none;
    margin-bottom: 30px;
    
    
`
 const Select = styled.select`
    width: 70px;
    height: 30px;
    border-radius: 30px;
    outline: none;
    text-align: center;
    border: none;
    margin-bottom: 10px;
   


`
interface Props {
    amount: number;
    currency: string;
    currencies: string [];
    amountChange: Function;
    currencyChange: Function;
    

}


//this function send props to CurrencyInput in main.tsx
export const CurrencyInput = (props: Props) => {
    return(
     <>


<Select  name="currency" value={props.currency} onChange={e => props.currencyChange(e.target.value)}>
{props.currencies.map((currency, key)=> (
<option key={currency}>{currency}</option>
))}
        
</Select>
<Input type="number" value={props.amount} onChange={e => props.amountChange(e.target.value)} />
</>
);
}
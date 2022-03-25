import { Input } from "./components/input/input";
import {createGlobalStyle} from "styled-components";
import { Header } from "./components/header/header";

const Global = createGlobalStyle`
* { margin: 0 auto; padding: 0; box-sizing: border-box;}
body{ background-color: black; }
`





const App = () => {

  

  return (
    <div> 
    <Header />
    <Input />
    <Global />
    </div>
  );
};
export default App;

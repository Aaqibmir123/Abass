import { useState } from "react";
import Card from "./Cart/Card";
import Header from "./Layout/Header";
import Products from "./products/Products";

function App() {
  const [showCard,Setcard]=useState(false);
 

  const ToggleCard=()=>{
    Setcard(!showCard);
  }

  

  return (
   <>
   
   {showCard && <Card  Data={ToggleCard} />}
    <Header  Toggle={ToggleCard}/>
    <Products />
    </>
    
    
  )
}
export default App;

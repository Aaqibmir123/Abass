import { useState } from "react";

const Summary = (props) => {
  console.log(props)
  const [items,Setitems]= useState([]);
  const addtocart=(props)=>{
    Setitems(olditems=>[...olditems,props])
    console.log(items)
  }

  return (
    <div className="Container col-sm">
      <div className="row">
        <div className="col-10">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <img src={props.imageUrl} className="card-img-top" alt="..."></img>
              <h2>{props.price}</h2>
             <button onClick={()=>addtocart(props)}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Summary;

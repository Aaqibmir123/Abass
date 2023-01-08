import { useState } from "react";

const HeaderCard=(props)=>{

    return(
            <button onClick={props.Toggle}>
                <span>Your cart</span>
                <span>0</span>
            </button>
    )
}
export default HeaderCard;
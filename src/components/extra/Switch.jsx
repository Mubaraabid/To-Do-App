import React from "react";

const Button=({handleClick})=>{
    return (
        <div>
            <button onClick={handleClick}>
                clickme
            </button>
        </div>
    )
}

export default Button;
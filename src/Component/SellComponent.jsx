import { useState } from "react";

function SellComponent()
{
    const amount=35000.67;
    const [slideValue,setSlideValue]=useState(10);
    const [displayAmount,setDisplayAmount]=useState(Math.round(0.1*amount));
    console.log(slideValue);

    const calculate=(slideValue)=>{
        setDisplayAmount(Math.round((slideValue/100)*amount));
    }
    return(
        <div className="sell-component">
            <div className="sell-top">
                <div className="details">
                    <p>Total Crypto balance</p>
                    <h1>₹{amount}</h1>
                    <p>in INR</p>
                </div>
                <div className="img-box">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfXKN4kwvoOALn9irV-SeNhJ1MNt8TDEdt-Q&usqp=CAU" alt="crypto" />
                </div>
            </div>
            <div className="slider-details">
                    <p style={{fontWeight:"bold", color:"blue", fontSize:"1.2rem", wordSpacing:"2px",marginBottom:"10px"}}>How much want to sell?</p>
                    <p style={{color:"grey",marginBottom:"30px"}}>Slide and adjust your amount</p>
                    <input type="range" min="10" max="100" value={slideValue}  onChange={(e)=>{
                        setSlideValue(e.target.value);
                        calculate(e.target.value);
                    }}/> <span style={{color:"grey"}}>You are selling {slideValue} % of your holdings !</span>
                </div>
                <div className="amount-display">
                    <input type="number" min="0" placeholder="Amount" value={displayAmount} />
                </div>
                <button id="submit">Submit</button>
        </div>
    );
}

export default SellComponent;
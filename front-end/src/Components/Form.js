import React from "react"
import memeData from "./memeData"
export default function Form(){

    let url
    function getMemeImg(){
        const memeArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        url = memeArray[randomNumber].url
        console.log(url)
    }
    return(
        <div className="Form--meme">
            <div className="Fields--meme">
                <input type="text"  id="F1" />
                <input type="text"  id="F2" />
            </div>
            <button className="Button--meme" type="button" onClick={getMemeImg}>Get a new meme image</button>
            <div className="Meme-change">
                <h2>Shut UP</h2>
                <img src="./images/memeimg.png" alt="Meme"/>
                <h3>AND TAKE MY MONEY</h3>
            </div>
        </div>
    )
}
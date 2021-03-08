import React from 'react'
import Full from "../media/stars/star_full.svg";
import Half from "../media/stars/star-half.svg";
import Empty from "../media/stars/star-empty.svg";

export default function Ratings({avgRating}) {
    const starArr=[];
    //credit to mhoobler
    if (avgRating % 1 === 0) {
        for (let i = 0; i < 5; i++) {
          i < avgRating ? starArr.push(Full) : starArr.push(Empty);
        }
      } else {
        let floor = Math.floor(avgRating);
        for (let i = 0; i < 5; i++) {
          i < floor
            ? starArr.push(Full)
            : i === floor
            ? starArr.push(Half)
            : starArr.push(Empty);
        }
      }
    
    return (
        <div>
            {starArr.map(a=>{
                return(
                    <div>
                        <img src={a}/>
                    </div>
                )
            })}
        </div>
    )
}

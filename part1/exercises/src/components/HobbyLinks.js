import React from 'react';

export default function HobbyLinks() {
    const hobbyLinks = ["https://www.runnersworld.com/", "https://explorestlouis.com/discover/outdoor-adventures-st-louis/parks/"];
    return (
        <div>
            <h3> Hobbies </h3>
            <ul> 
                <li><a href = {hobbyLinks[0]}>Running</a></li>
                <li> <a href = {hobbyLinks[1]}>Exploring Local Parks</a></li>
            </ul>
        </div>
    )
}

// return (
//     <div>
//        <h3 className = {classes.movieHeading}>Movies I Watched This Month</h3>
//        <ol>
//           <li className={classes.movieText}>{movies[0]}</li>
//           <li className={classes.movieText}>{movies[1]}</li>
//           <li className={classes.movieText}>{movies[2]}</li>
//           <li className={classes.movieText}>{movies[3]}</li>
//        </ol>
//     </div>
//     );
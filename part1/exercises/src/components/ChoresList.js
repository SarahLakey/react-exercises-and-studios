import React from 'react';
import classes from './ChoresList.module.css';

export default function ChoresList () {
   // return <p>No content is here!</p>;
   
   return (
      <div>
         <h3 className = {classes.choresHeading}>Chores List That Never Ends</h3>
         <ol>
            <li className={classes.choresText}>Laundry</li>
            <li className={classes.choresText}>Dishes</li>
         </ol>
      </div>
      );
   
}

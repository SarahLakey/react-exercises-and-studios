import React from "react"
import styles from './Ingredients.module.css';

export default function RecipeIngredients(){
  const ingredients = ["24 oz 3 boneless skinless chicken breasts", "1 celery stalk, diced", "1/2 onion, diced", "1 clove garlic, minced", "16 oz fat free low sodium chicken broth", "1/2 cup cayenne pepper sauce", "6 large kettus leaves ", "1.5 cups shredded carrots", "2 large celery stalks"]  
  return (
    <div>
    <h3>Recipe Ingredients</h3>
    <ul className = {styles.ingredientList}>
       <li>{ingredients[0]}</li>
       <li>{ingredients[1]}</li>
       <li>{ingredients[2]}</li>
       <li>{ingredients[3]}</li>
       <li>{ingredients[4]}</li>
       <li>{ingredients[5]}</li>
       <li>{ingredients[6]}</li>
       <li>{ingredients[7]}</li>
       <li>{ingredients[8]}</li>
    </ul>
 </div>
  )
}
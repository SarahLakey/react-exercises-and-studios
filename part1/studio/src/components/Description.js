import React from "react"
import styles from './Description.module.css';

function RecipeAuthor(){
   const  authorLink = "https://www.skinnytaste.com/about/";
   const authorPhoto = "https://www.skinnytaste.com/wp-content/uploads/2023/01/Gina-head-shot-400.jpg";
   const authorName = "Gina Homolka";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Picture of Recipe's Author" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Skinnytaste</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
            render() {
            return (
            <div> 
            <div>
               <h1>Buffalo Chicken Lettuce Wraps</h1>
               <p> Delicious, low-carb lettuce wraps topped with shredded carrots, celery and an optional homemade light blue cheese dressing.</p>
            </div>
            <RecipeAuthor />
         </div>
            )
        }
    }

export default RecipeDescription;
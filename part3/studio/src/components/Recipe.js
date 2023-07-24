const RecipeAuthor = () => {
   let authorLink = "https://thecleaneatingcouple.com/about-us/";
   let authorPhoto = "https://www.graceandvinestudios.com/wp-content/uploads/2021/02/clean-eating-couple-1-683x1024-1.jpg";
   let authorName = "Liz - The Clean Eating Couple";

   return (
      <div>
         <img src={authorPhoto} alt = "Picture of recipe author" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["3 cups spaghetti squash shredded", "2.5 cups shredded chicken","1/2 tablespoon olive oil", "1 egg", "1/2 teaspoon onion powder", "1/4 teaspoon pepper", "1/2 teaspoon garlic powder", "1/3 cup Franks Red Hot"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
            <li>{ingredients[6]}</li>
            <li>{ingredients[7]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Healthy Buffalo Chicken Spaghetti Squash Casserole</h1>
            <p>This Healthy Buffalo Chicken Spaghetti Squash Casserole is the perfect quick weeknight dinner. Low in carbs, but full on flavor. Plus it is gluten free and SO delicious!
</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://thecleaneatingcouple.com/wp-content/uploads/2018/04/buffalo-chicken-spaghetti-squash-casserole-1-500x500.jpg" alt="Buffalo chicken casserole" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
import classes from './BookList.module.css';

export default function BookList() {
   let pageTitle = "Classic Books Series I Love";
   let book1 = "https://m.media-amazon.com/images/I/91ocU8970hL._SY522_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/519HQF7Vl6L._SY445_SX342_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/512A7JQMGCL.jpg";

   return (
      <div className = {classes.bookSection}>
         <h3 className = {classes.bookHeading}>{pageTitle}</h3>
         <img className = {classes.bookImages} src={book1} alt="Harry Potter and the Sorcerer’s Stone" />
         <img className = {classes.bookImages} src={book2} alt=" Harry Potter and the Chamber of Secrets" />
         <img className = {classes.bookImages}  src={book3} alt="Harry Potter and the Prisoner of Azkaban" />
      </div>      
   );
}
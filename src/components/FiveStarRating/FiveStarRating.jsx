import s from "./style.module.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";
export function FiveStarRating({ rating }) {
  //Déclaration d'un tableau JSX vide
  const starsList = [];

  //Nombre d'étoiles pleines
  const starFillCount = Math.floor(rating);

  // Vérification si l'étoile est à moitié remplie
  const hasStarHalf = rating - starFillCount >= 0.5;

  // Nombre d'étoiles vides
  const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);
  // Push des étoiles pleines dans le tableau

  for (let i = 0; i < starFillCount; i++) {
    starsList.push(<StarFill key={"star-fill" + i} />);
  }

  if (hasStarHalf) {
    starsList.push(<hasStarHalf key={"star-half"} />);
  }

  for (let i = 0; i < emptyStarCount; i++) {
    starsList.push(<StarEmpty key={"star-empty" + i} />);
  }

  return <div>{starsList}</div>;
}

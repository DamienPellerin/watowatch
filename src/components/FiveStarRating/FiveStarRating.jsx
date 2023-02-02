import s from "./style.module.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";
export function FiveStarRating({ rating }) {
  //Déclaration d'un tableau JSX vide
  const starsList = [];

  //Nombre d'étoiles pleines
  const StarFillCount = Math.floor(rating);

  // Vérification si l'étoile est à moitié remplie
  const HasStarHalf = rating - StarFillCount >= 0.5;

  // Nombre d'étoiles vides
  const EmptyStarCount = 5 - StarFillCount - (HasStarHalf ? 1 : 0);
  // Push des étoiles pleines dans le tableau

  for (let i = 0; i < StarFillCount; i++) {
    starsList.push(<StarFill key={"star-fill" + i} />);
  }

  if (HasStarHalf) {
    starsList.push(<StarHalf key={"star-half"} />);
  }

  for (let i = 0; i < EmptyStarCount; i++) {
    starsList.push(<StarEmpty key={"star-empty" + i} />);
  }

  return <div>{starsList}</div>;
}

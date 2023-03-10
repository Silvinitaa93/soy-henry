//Otra  manera de hacerlo con destructuring
// export default function Card({ name, species, gender, onClose, image }) {
//   return (
//     <div>
//       <button onClick={onClose}>X</button>
//       <h2>{name}</h2>
//       <h2>{species}</h2>
//       <h2>{gender}</h2>
//       <img src={image} alt="Not found" />
//     </div>
//   );
// }
export default function Card(props) {
  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <h2>{props.name}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <img src={props.image} alt="Not found" />
    </div>
  );
}

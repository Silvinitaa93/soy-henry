import Card from "./Card"; //trae la funcion por defecto

export default function Cards(props) {
  const { characters } = props;
  return (
    <div>
      {characters.map((c) => (
        <Card
          name={c.name}
          species={c.species}
          gender={c.gender}
          image={c.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        />
      ))}
    </div>
  );
}

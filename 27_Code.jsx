function getImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}
const person1 = {
  name: "Maria Skłodowska-Curie",
  profession: "physicist and chemist",

  awards: [
    "Nobel Prize in Physics",
    "Nobel Prize in Chemistry",
    "Davy Medal",
    "Matteucci Medal",
  ],
  discovery: "polonium (chemical element)",
  imageId: "szV5sdG",
  size: 70,
};
const person2 = {
  name: "Katsuko Saruhashi",
  profession: "geochemist",
  awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
  discovery: "a method for measuring carbon dioxide in seawater",
  imageId: "YfeOqp2",
  size: 70,
};
function Profile({
  person: { name, profession, size, imageId, awards, discovery },
}) {
  return (
    <section style={{border: "1px solid",
        margin: "10px",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "50%"}}>
      <h2>{name}</h2>
      <img
        style={{borderRadius: "50%"}}
        src={getImageUrl(imageId)}
        alt={name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>({awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile person={person1} />
      <Profile person={person2} />
    </div>
  );
}

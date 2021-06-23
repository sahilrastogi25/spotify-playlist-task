import "./Card.css";
export default function Card(props) {
  return (
    <div
      className="card"
      onClick={() => {
        props.onClick(props.id);
      }}
    >
      {props.description}
      <div className="left">
        <img
          alt="plus-sign"
          src="https://img.icons8.com/doodle/40/000000/plus--v1.png"
        />
      </div>
    </div>
  );
}

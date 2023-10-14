import "./TeamCard.css";

export default function TeamCard(props) {
  return (
    <>
      <a class="team_card" href={props.link} target="_blank">
        <div className="about_team">
          <h4>{props.name}</h4>
          <h5> {props.title}</h5>
        </div>
      </a>
    </>
  );
}

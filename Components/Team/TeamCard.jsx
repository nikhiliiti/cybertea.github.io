import { GitHub, LinkedIn } from "@mui/icons-material";
import "./TeamCard.css";

export default function TeamCard(props) {
  return (
    <>
      <a class="team_card" href={props.link} target="_blank">
        <div className="about_team">
          <h4>{props.name}</h4>
          <div className="about_team_info">
            {props.design ? <LinkedIn/>: <GitHub />}
            
            <h5> {props.title}</h5>
          </div>
        </div>
      </a>
    </>
  );
}

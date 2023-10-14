import TeamCard from "./TeamCard";
import "./TeamCard.css";

export default function TeamHolder() {
  return (
    <>
      <div className="card_holder_team">
        <h2 className="contributors">Student Coordinators</h2>
        <h2 style={{ marginTop: "5px" }}>Lead</h2>
        <div className="team_con">
          <TeamCard
            name="VryuShab Goyani"
            link="https://www.iiits.ac.in/home/administration/director/"
            title="Management Lead"
          />
        </div>
        <h2>Web Dev Team</h2>
        <div className="team_con">
          <TeamCard
            link="https://www.linkedin.com/in/nikhil-tripathi/"
            name="Shashank Raj"
            title="Web Dev Lead, IOTA"
          />
          <TeamCard
            name="Shashank Raj"
            link="https://www.linkedin.com/in/dr-neha-agrawal-0a32776b/"
            title="Web Dev Lead, IOTA"
          />
          <TeamCard
            link="https://www.linkedin.com/in/nikhil-tripathi/"
            name="Shashank Raj"
            title="Web Dev Lead, IOTA"
          />
          <TeamCard
            name="Shashank Raj"
            link="https://www.linkedin.com/in/dr-neha-agrawal-0a32776b/"
            title="Web Dev Lead, IOTA"
          />
        </div>
        <h2>Design Team</h2>
        <div className="team_con">
          <TeamCard
            link="https://www.linkedin.com/in/nikhil-tripathi/"
            name="Shashank Raj"
            title="Web Dev Lead, IOTA"
          />
          <TeamCard
            name="Shashank Raj"
            link="https://www.linkedin.com/in/dr-neha-agrawal-0a32776b/"
            title="Web Dev Lead, IOTA"
          />
          <TeamCard
            link="https://www.linkedin.com/in/nikhil-tripathi/"
            name="Shashank Raj"
            title="Web Dev Lead, IOTA"
          />
          <TeamCard
            name="Shashank Raj"
            link="https://www.linkedin.com/in/dr-neha-agrawal-0a32776b/"
            title="Web Dev Lead, IOTA"
          />
        </div>
      </div>
    </>
  );
}

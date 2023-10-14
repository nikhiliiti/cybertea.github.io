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
            link="https://github.com/Vrushabh1217"
            title="Management Lead"
          />
        </div>
        <h2>Web Devlopment Team</h2>
        <div className="team_con">
          <TeamCard
            link="https://github.com/sosenkkk"
            name="Shashank Raj"
            design={false}
            title="sosenkkk"
          />
          <TeamCard
            name="Mithun .U "
            link="https://github.com/Mithun-750"
            design={false}
            title="Mithun.U"
          />
          <TeamCard
            link="https://github.com/Vinayak-Anand"
            name="Vinayak Anand"
            design={false}
            title="
            Vinayak-Anand"
          />
          <TeamCard
            name="Charishma Bollineni"
            link="https://github.com/Charishma608"
            design={false}
            title="Charishma608"
          />
        </div>
        <h2>Design Team</h2>
        <div className="team_con">
          <TeamCard
            link="https://www.linkedin.com/in/iamayan2011/"
            name="Ayan Raza
            "
            title="Design Team"
            design={true}
          />
          <TeamCard
            name="Akansh Vaibhav"
            link="https://www.linkedin.com/in/akansh-vaibhav-040524222/"
            design={true}
            title="Design Team"
          />
          
        </div>
      </div>
    </>
  );
}

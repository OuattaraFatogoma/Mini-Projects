import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const GrooupedTeamMembers = ({ employees, selectedTeam, setSelectedTeam }) => {
  const [groupEmployees, setGroupEmployees] = useState(groupteamMembers());

  function groupteamMembers() {
    const teams = [];
    teams.push(teamData("TeamA"));
    teams.push(teamData("TeamB"));
    teams.push(teamData("TeamC"));
    teams.push(teamData("TeamD"));
    return teams;
  }

  function teamData(teamN) {
    const teamMembers = employees.filter(
      (employee) => employee.teamName === teamN
    );
    return {
      team: teamN,
      members: teamMembers,
      collapsed: selectedTeam === teamN ? true : false,
    };
  }

  function handleTeamClick(event) {
    console.log(event.currentTarget.id);
    console.log(groupEmployees);

    const teamModified = groupEmployees.map((teamGroupe) =>
      teamGroupe.team === event.currentTarget.id
        ? { ...teamGroupe, collapsed: !teamGroupe.collapsed }
        : teamGroupe
    );
  
    setGroupEmployees(teamModified);
    console.log(selectedTeam);
    setSelectedTeam(event.currentTarget.id);
    console.log(selectedTeam);
  }

  return (
    <div className="accordion w-75 m-auto">

      {groupEmployees.map((item) => (

        <div 
          className= {item.collapsed ? "accordion-item show" : "accordion-item " }
          key={item.team} 
          id={item.team}
          onClick={handleTeamClick}
          >

          <div className="accordion-header border border-bottom-1 p-2 "> 
            <h3 className="text-center">{item.team}</h3>
          </div>

          <div className="accordion-content">
            <ul>
              {
                item.members.map(member => 
                <li key={member.id}>
                  <h5 className="card-title">Name: {member.fullName}</h5>
                  <p className="card-text pb-2">
                    <b> Designation : </b> {member.designation}
                  </p>
                </li>)
              }
            </ul>
          </div>

        </div>
      ))}
    </div>
  );
};

export default GrooupedTeamMembers;

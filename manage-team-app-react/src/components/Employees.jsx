import maleProfile from "../images/maleProfile.jpg";
import femaleProfile from "../images/femaleProfile.jpg";

const Employees = ({
  employees,
  selectedTeam,
  handleTeamSelectionChange,
  handleEmployeeCardClick,
}) => {
  return (
    <div className="team-member-selection">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <select
              name="teamName"
              className="form-select form-select-lg"
              value={selectedTeam}
              onChange={handleTeamSelectionChange}
            >
              <option value="TeamA">TeamA</option>
              <option value="TeamB">TeamB</option>
              <option value="TeamC">TeamC</option>
              <option value="TeamD">TeamD</option>
            </select>
          </div>
        </div>

        <div className="row mx-5 justify-content-center">
          {employees.map((employee) => (
            <div
              key={employee.id}
              id={employee.id}
              className={
                employee.teamName === selectedTeam
                  ? "card col-lg-3 col-md-4 col-xs-10 m-2 onteam"
                  : "card col-lg-3 col-md-4 col-xs-10 m-2"
              }
              style={{ cursor: "pointer" }}
              onClick={handleEmployeeCardClick}
            >
              {employee.gender === "male" ? (
                <img
                  src={maleProfile}
                  className="card-img-top"
                  alt="maleProfile"
                />
              ) : (
                <img
                  src={femaleProfile}
                  className="card-img-top"
                  alt="femaleProfile"
                />
              )}

              <div className="card-body">
                <h5 className="card-title">Full name: {employee.fullName}</h5>
                <p className="card-text">
                  <b> Designation : </b>
                  {employee.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employees;

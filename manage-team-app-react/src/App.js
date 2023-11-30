import { useState, useEffect } from "react";
import {
  Header,
  Footer,
  Employees,
  GrooupedTeamMembers,
  Nav,
  NotFound,
} from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [selectedTeam, setSelectedTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamA"
  );
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeeList")) || [
      {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "Team A",
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "Team A",
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "Team A",
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "Team B",
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "Team B",
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "Team B",
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "Team C",
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "Team C",
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "Team C",
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "Team D",
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "Team D",
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "Team D",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleTeamSelectionChange(event) {
    console.log(event.target.value);
    setSelectedTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const changeEmployeeTeam = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(changeEmployeeTeam);
  }

  return (
    <div className="App">
      <Router>
        <Nav />
        <Header employees={employees} selectedTeam={selectedTeam} />

        <Routes>
          <Route
            path="/"
            element={
              <Employees
                employees={employees}
                selectedTeam={selectedTeam}
                handleTeamSelectionChange={handleTeamSelectionChange}
                handleEmployeeCardClick={handleEmployeeCardClick}
              />
            }
          />
          <Route
            path="/GrooupedTeamMembers"
            element={
              <GrooupedTeamMembers
                employees={employees}
                selectedTeam={selectedTeam}
                setSelectedTeam={setSelectedTeam}
              />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

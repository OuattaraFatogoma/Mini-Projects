const Header = ({ selectedTeam, employees }) => {
  const teamMembersNumber = employees.filter(
    (employees) => employees.teamName === selectedTeam
  ).length;
  return (
    <header className="text-center">
      <h1 className="display-4 text-capitalize">Team Member Allocation</h1>
      <h5 className="display-6">
        {selectedTeam} has {teamMembersNumber} members
      </h5>
    </header>
  );
};

export default Header;

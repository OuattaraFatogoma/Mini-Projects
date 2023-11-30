const Footer = () => {
  const today = new Date();
  return (
    <footer className="container mt-5 mb-3 text-center">
      <h5>Team Member Allocation App - {today.toLocaleDateString()}</h5>
    </footer>
  );
};

export default Footer;

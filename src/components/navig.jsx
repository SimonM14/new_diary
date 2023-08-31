const { Link } = require("react-router-dom");
const Navbar = () => {
  return (
    <nav
      style={{
        textAlign: "right",
        fontStyle: "italic",
        backgroundColor: "",
        marginTop: "20px",
      }}
    >
      <Link to="/" style={{ padding: "20px" }}>
        Home
      </Link>
      <Link to="/profile" style={{ padding: "20px" }}>
        Profile
      </Link>
      <Link to="/about" style={{ padding: "20px" }}>
        About
      </Link>
    </nav>
  );
};
export default Navbar;

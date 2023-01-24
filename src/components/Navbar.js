const Navbar = () => {
  return (
    <div className="container d-flex flex-column">
      <ul className="navbar container d-flex align-items-center justify-content-center gap-3">
        <h2>Student Management</h2>
        <li className="nav-items">
          <a href="">Dashboard</a>
        </li>
        <li>
          <a href="">Lecture</a>
        </li>
        <li>
          <a href="">Student</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import logo from './react-logo.png';

export function Navbar() {
  return (
    <nav>
      <img className="logo" src={logo} alt="React Logo" />
      <h3>React Facts</h3>
      <h4>React course - Project 1</h4>
    </nav>
  );
}

import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <h1>X-Personality</h1>
        </a>
      </div>
      <div className="nav--links">
        <ul className="links">
          <a href="/">
            <li>About Us</li>
          </a>
          <a href="/">
            <li>Social</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Headerh1">
      <h1> "Travel tours"</h1>

      <div>
        <Link to="/">Home page</Link>
      </div>
    </div>
  );
}
export default Header;

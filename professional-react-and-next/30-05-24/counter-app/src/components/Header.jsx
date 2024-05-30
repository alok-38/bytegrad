import reactLogo from "../assets/react.svg";
import "../App.css";

function Header() {
  return (
    <div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react block mx-auto" alt="React logo" />
      </a>
    </div>
  );
}

export default Header;

import logo from "../../assets/welcome/main.png";
import team from "../../assets/welcome/c2ri.png";
import "./styles.css";

function welcome() {
  return (
    <div className="Welcome">
      <h1>셔를레이호</h1>
      <div>
        <img className="main-logo" alt="iPhone_01" src={logo} />
        <img className="team-logo" alt="iPhone_01" src={team} />
      </div>
    </div>
  );
}

export default welcome;

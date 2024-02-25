import "./styles.css";
import MainLogo from "../../components/Welcome/MainLogo";
import LoginModule from "../../components/Welcome/LoginModule";

function Welcome() {
  return (
    <div className="welcome">
      <div>
        <MainLogo />
        <LoginModule />
      </div>
    </div>
  );
}

export default Welcome;

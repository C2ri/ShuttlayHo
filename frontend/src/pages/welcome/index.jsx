import "./styles.css";
import MainLogo from "../../components/welcome/MainLogo";
import LoginModule from "../../components/welcome/LoginModule";

function welcome() {
  return (
    <div>
      <MainLogo />
      <LoginModule />
    </div>
  );
}

export default welcome;

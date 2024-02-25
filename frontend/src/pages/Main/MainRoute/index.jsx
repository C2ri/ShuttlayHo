import "../../../styles/common.css";
import IndivRoute from "../../../components/Main/MainRoute";
import "./styles.css";

function MainRoute() {
  const locationArr = ["강남", "광화문", "신촌", "성수", "여의도", "판교"];
  return (
    <div>
      <h1 className="main-h1">출근노선</h1>
      {locationArr.map((a, i) => {
        return <IndivRoute loca={a} num={i} key={i} />;
      })}
    </div>
  );
}

export default MainRoute;

import "../../../styles/common.css";
import IndivRoute from "../../../components/Main/MainRoute";

function MainRoute() {
  const locationArr = ["강남", "광화문", "신촌", "성수", "여의도", "판교"];
  return (
    <div>
      <h1>출근노선</h1>
      {locationArr.map((week, index) => (
        <span key={index}>{week}</span>
      ))}
      {locationArr.map((a, i) => {
        return <IndivRoute loca={a} num={i} key={i} />;
      })}
    </div>
  );
}

export default MainRoute;

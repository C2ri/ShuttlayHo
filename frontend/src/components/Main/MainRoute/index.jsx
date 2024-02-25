import "../../../styles/common.css";
function IndivRoute(props) {
  console.log(props);
  return (
    <div>
      <div>
        <h2>{props.loca}방면</h2>
      </div>
      <div>
        <button className="small-button">당산</button>
        <button className="small-button">노원</button>
        <button className="small-button">송파</button>
      </div>
      <div>
        <button className="small-button">사당</button>
        <button className="small-button">인천</button>
        <button className="small-button">구로</button>
      </div>
    </div>
  );
}

export default IndivRoute;

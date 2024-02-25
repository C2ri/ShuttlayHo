import "../../../../styles/common.css";

function SelectWay() {
  const ride = ["강남", "광화문", "신촌", "성수", "여의도", "판교"];
  const alight = ["당산", "노원", "송파", "사당", "인천", "구로"];
  return (
    <div>
      <h1>탑승 지역을 선택해주세요</h1>

      <div className="ride-box">
        {ride.map((a, i) => {
          return (
            <button loca={a} num={i} key={i} className="small-button">
              {a}
            </button>
          );
        })}
      </div>
      <h1>하차 지역을 선택해주세요</h1>
      <div className="alight-box">
        {alight.map((a, i) => {
          return (
            <button loca={a} num={i} key={i} className="small-button">
              {a}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SelectWay;

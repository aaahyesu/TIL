import scissors from "../assets/img/scissors.png";
import rock from "../assets/img/rock.png";
import paper from "../assets/img/paper.png";
import questionmark from "../assets/img/questionmark.png";

export default function Box({ user, item, result }) {
  const imgMap = {
    scissors,
    rock,
    paper,
    questionmark,
  };

  const displayResult =
    user === "컴퓨터"
      ? result === "이겼다"
        ? "졌다"
        : result === "졌다"
        ? "이겼다"
        : result
      : result;
  // 이겼을 경우, .win클래스 추가
  const getClass = () => {
    if (displayResult === "이겼다") return "win";
    if (displayResult === "졌다") return "lose";
    return "tie";
  };

  return (
    <div className={`box ${getClass()}`}>
      <h2>{user}</h2>
      <p>{item?.name}</p>
      <img
        className="item-img"
        src={imgMap[item?.img] || questionmark}
        alt="rock"
      />
      <p>{displayResult}</p>
    </div>
  );
}

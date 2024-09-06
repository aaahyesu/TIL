import { useState } from "react";
import Box from "./components/Box";
import "./css/App.css";

function App() {
  const choice = {
    rock: {
      name: "바위",
      img: "rock",
    },
    scissors: {
      name: "가위",
      img: "scissors",
    },
    paper: {
      name: "보",
      img: "paper",
    },
  };

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("시작");

  const play = (item) => {
    console.log(item);
    let userChoice = choice[item];
    let computerChoice = randomSelect();
    setUserSelect(choice[item]);
    setComputerSelect(computerChoice);
    setResult(judgement(userChoice, computerChoice));
  };

  const randomSelect = () => {
    let itemArr = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArr.length);
    let final = itemArr[randomItem];
    return choice[final];
  };

  const judgement = (user, computer) => {
    return user.name === computer.name
      ? "비겼다"
      : (user.name === "바위" && computer.name === "가위") ||
        (user.name === "가위" && computer.name === "보") ||
        (user.name === "보" && computer.name === "바위")
      ? "이겼다"
      : "졌다";
  };

  return (
    <main className="main">
      <h1>가위 바위 보</h1>
      <section>
        <Box user="사용자" item={userSelect} result={result} />
        <Box user="컴퓨터" item={computerSelect} result={result} />
      </section>
      <div className="btns">
        <button
          onClick={() => {
            play("scissors");
          }}
        >
          가위
        </button>
        <button
          onClick={() => {
            play("rock");
          }}
        >
          바위
        </button>
        <button
          onClick={() => {
            play("paper");
          }}
        >
          보
        </button>
      </div>
    </main>
  );
}

export default App;

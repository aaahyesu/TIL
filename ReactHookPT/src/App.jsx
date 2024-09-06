import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // useEffect : 배열 값이 바뀌게 되면 sideEffect로서 첫번째 인수로 전달한 콜백함수 실행

  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]); // 의존성 배열(Dependency array = deps) , 배열에 여러개 넣을 수 있음

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;

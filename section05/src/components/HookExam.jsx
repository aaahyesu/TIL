// 3가지 Hook 관련 팁
// 1.함수 컴포넌트, 커스텀 훅 함수 내부에서만 호출 가능하다.
// use를 접두사로 가지는 변수명을 사용하면 커스텀 훅 만들기 가능(function input -> function useInput)
// 2. 조건부로 호출될 수는 없다.(= 조건문이나 반복문 내부에서 호출할 수 없다.)
// 3. 커스텀 훅을 직접 만들 수 있다.

import useInput from "../hooks/useInput";

const HookExam = () => {
  const [input, onChange] = useInput("");
  const [input2, onChange2] = useInput("");

  return (
    <div>
      <input type="text " value={input} onChange={onChange} />
      <input type="text " value={input2} onChange={onChange2} />
    </div>
  );
};
export default HookExam;

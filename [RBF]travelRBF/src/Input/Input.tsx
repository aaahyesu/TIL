import { useState } from "react";
import "./input.css";

export default function Input({
  list,
  setList,
}: {
  list: string[];
  setList: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [inputValue, setInputValue] = useState("");

  // 입력 이벤트
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // add 버튼 클릭 함수(localStorage 저장)
  const addClick = () => {
    if (inputValue.trim() === "") return;
    const updatedList = [...list, inputValue.trim()]; // 기존 리스트에 새로운 항목 추가
    localStorage.setItem("travelList", JSON.stringify(updatedList));
    setList(updatedList); // 상태 업데이트
    setInputValue(""); // 저장 후 input 창 초기화
  };

  // enter로 입력
  const inputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Enter 입력시 add 버튼 작동 막기
      addClick(); // addClick 호출
    }
  };

  return (
    <div className="inputField mw">
      <input
        id="inputField"
        type="text"
        placeholder="가고싶은 여행지를 등록하세요"
        value={inputValue}
        onChange={inputChange}
        onKeyDown={inputEnter}
      />
      <button id="add" onClick={addClick}>
        ADD
      </button>
    </div>
  );
}

import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름  2. 생년월일 3. 국적 4. 자기소개

// useRef: 컴포넌트가 리렌더링 되어도 기억하고 싶은 값을 저장할 때 사용
// <Register/><Register/>을 하면 ref 값이 공유되어서 값이 누적됨
const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  const countRef = useRef(0);
  const inputRef = useRef();
  let count = 0;

  const onChange = (e) => {
    // countRef.current++;
    count++;
    console.log(count);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <button
          onClick={() => {
            countRef.current++;
            console.log(countRef.current);
          }}
        >
          ref+1
        </button>
      </div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          type="date"
          value={input.birth}
          onChange={onChange}
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option></option>
          <option value="KR">한국</option>
          <option value="US">미국</option>
          <option value="UK">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};
export default Register;

import { useState } from "react";
import InputEl from "../components/InputEl";
import SelectEl from "../components/SelectEl";
import styles from "../style/InputCon.module.css";

export default function InputCon({ group }) {
  const generateId = () => Math.random().toString(36).slice(2, 11);

  const initialFormData = {
    id: generateId(), // 초기 랜덤 id 값 생성
    name: "",
    phone: "",
    group: "",
    memo: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 유효성 검사
    // 유효성 검사가 통과되면
    // setFormData에 formData를 넣어서 초기화
    console.log("전송");
    setFormData(initialFormData);
  };
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputCon}>
      <InputEl
        inputName="이름"
        inputId="name"
        placeholder="이름입력"
        value={formData.name}
        onChange={handleInputChange}
      />
      <InputEl
        inputName="전화번호"
        inputId="phone"
        placeholder="010-0000-0000형식으로 입력해주세요"
        value={formData.phone}
        onChange={handleInputChange}
      />
      <SelectEl
        selectId="group"
        inputName="그룹"
        value={formData.group}
        onChanage={handleInputChange}
        options={group}
      />
      <InputEl
        inputName="간단한 기록"
        inputId="memo"
        placeholder="간단한 기록"
        value={formData.memo}
        onChange={handleInputChange}
      />
      <button type="submit" className={styles.btn}>
        추가
      </button>
    </form>
  );
}

# 📖 [RBF] - React JS → TS 전환 ‘여행지 TO-DO List’



- [x] Dummy Data 가져오도록 useState 활용 해보기
- [x] JS → TS로 전환해보기
- [x] Dummy 대신 LocalStorage에 저장 후 가져오기
- [x] 삭제 구현

      

## 💬 발견 이슈



### Q. 요소 삭제 시 해당 인덱스를 바로 `splice`해서 삭제하는 것이 가장 빠르고 효율적이지 않을까..?

A. `splice`는 배열을 직접 수정하므로, 원본 배열이 변경 된다.

바로 삭제하면 상태가 변경 되었다고 *React가 인식하지 못할 수 있기에*

복사한 배열에 변화를 제거해서 보여주는 것이 좋다..

**(초기)**

```tsx
const handleDelete = (index: number) => {
  // 원본 배열을 복사하여 새로운 배열을 생성
  const updatedList = [...list];
  // 특정 인덱스의 요소를 배열에서 제거
  updatedList.splice(index, 1);
  // 변경된 배열을 로컬스토리지에 저장
  localStorage.setItem("travelList", JSON.stringify(updatedList));
  // 상태 업데이트
  setList(updatedList);
};
```

**(변경 ver.1)**

```tsx
const addClick = () => {
  if (inputValue.trim() === "") return;
  const updatedList = [...list, inputValue.trim()]; // 기존 리스트에 새로운 항목 추가
  localStorage.setItem("travelList", JSON.stringify(updatedList));
  setList(updatedList); // 상태 업데이트
  setInputValue(""); // 저장 후 input 창 초기화
};
```

Q. `filter`를 사용해서 배열 순회하면서 조건에 맞는 요소만 가져와서 새로운 배열을 가져오는 것이 더 나을지..?
하지만 시간복잡도를 생각하면 *O(N)*인데 이게 효율적일까..?

A. 성능보다 중요한건 _불변성 유지(React가 변화를 못찾으면 에러니깐..)_

`filter`를 사용하여 상태를 업데이트하는 것이 더 안정적이고 유지보수하기 쉬운 접근법인듯 🤔

**(변경 ver.2)**

```tsx
const handleDelete = (index: number) => {
  // filter를 사용하여 새로운 배열을 생성
  const updatedList = list.filter((_, i) => i !== index);
  // 변경된 배열을 로컬스토리지에 저장
  localStorage.setItem("travelList", JSON.stringify(updatedList));
  // 상태 업데이트
  setList(updatedList);
};
```
